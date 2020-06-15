<template>
    <div class="TodoIndex">
        <h3>{{$store.getters.storeFrom}}</h3>
        <el-input placeholder="请输入内容" v-model="inputValue" @keyup.enter.native="addItem">
            <Select v-model="select" slot="prepend" placeholder="请选择" class="type-select">
                <Option v-for="item in ($store.getters.getTypeOptions)" :label="item.name" :value="item.type"></Option>
            </Select>
            <el-button slot="append" @click="addItem">添加</el-button>
        </el-input>
        <draggable v-model="listData" @update="dragEnd" :options="{animation:500}">
            <transition-group>
                <div class="todo-item" v-for="item in listData" :key="item.id">
                    <Alert :title="item.content" :type="item.type" :closable="false">
                        <el-button type="primary" size="mini" icon="el-icon-edit" circle
                                   @click="updateItem(item)"></el-button>
                        <el-button type="danger" size="mini" icon="el-icon-delete" circle
                                   @click="deleteItem(item.id)"></el-button>
                    </Alert>
                </div>
            </transition-group>
        </draggable>
        <Dialog
        title="提示"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :visible.sync="dialogVisible">
            <el-form ref="form" label-width="80px">
                <el-form-item label="类别">
                    <Select v-model="itemData.type" placeholder="请选择" class="dialog-select">
                        <Option
                        v-for="item in ($store.getters.getTypeOptions)"
                        :key="item.type"
                        :label="item.name"
                        :value="item.type">
                        </Option>
                    </Select>
                </el-form-item>
                <el-form-item label="当前值">
                    <el-input placeholder="请输入内容" v-model="itemData.content"/>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitUpdate">确 定</el-button>
            </span>
        </Dialog>
    </div>
</template>
<script>
    import {Alert, Select, Option, Dialog, Message} from 'element-ui'
    import draggable from 'vuedraggable'

    export default {
        name: "TodoIndex",
        data() {
            return {
                select: 'error',
                inputValue: '',
                listData: this.$store.state.moduleTodo.list,
                dialogVisible: false,
                itemData: {}
            }
        },
        components: {
            draggable, Alert, Select, Option, Dialog
        },
        methods: {
            deleteItem(id) {
                this.$store.commit('deleteTodoMutation', id)
            },
            updateItem(item) {
                this.itemData = {...item}
                this.dialogVisible = true
            },
            addItem() {
                if (!this.inputValue.trim().length) {
                    Message({
                        showClose: true,
                        message: '请输入内容',
                        type: 'warning',
                    })
                    return
                }
                this.$store.commit('addTodoMutation', {
                    content: this.inputValue.trim(),
                    type: this.select
                })
                this.inputValue = ''
            },
            submitUpdate() {
                if (!this.itemData.content.trim().length) {
                    Message({
                        showClose: true,
                        message: '请输入内容',
                        type: 'warning',
                    })
                    return
                }
                this.$store.commit('updateTodoMutation', this.itemData)
                this.dialogVisible = false
                this.inputValue = ''

            },
            dragEnd(evt) {
                evt.preventDefault();
                /*console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)*/
                this.$store.commit('updateTodoList', this.listData)
            }
        },
        mounted() {
            //为了防止火狐浏览器拖拽的时候以新标签打开
            document.body.ondrop = function (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
</script>

<style lang="less" scoped>
   @import "./../../assets/todo-index";
</style>
