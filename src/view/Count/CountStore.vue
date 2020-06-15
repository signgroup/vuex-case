<template>
    <div class="CountIndex">
        <h3>{{$store.getters.storeFrom}}</h3>
        <el-form ref="form" label-width="80px">
            <el-form-item label="当前值">
                <!--<p>当前最新数量是[{{$store.state.moduleCount.count}}]</p>-->
                <p>{{$store.getters.showNum}}</p>
            </el-form-item>
            <el-form-item label="每次加减">
                <el-input class="count-input" type="number" v-model="counterNum"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="add">+</el-button>
                <el-button @click="reduce">-</el-button>
            </el-form-item>
            <el-form-item label="异步加减">
                <el-input-number class="input-number" v-model="time" :min="1" :max="10" label="描述文字"></el-input-number>
                <span>秒</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="asyncDispatch('addAsyncAction')" :loading="loading">+ Async
                </el-button>
                <el-button @click="asyncDispatch('reduceAsyncAction')" :loading="loading">- Async</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: "Index",
        data() {
            return {
                counterNum: 1,
                time: 1,
                loading: false
            }
        },
        methods: {
            asyncDispatch(action) {
                this.loading = true
                this.$store.dispatch(action, {
                    counterNum: this.counterNum,
                    time: this.time
                })
                let time = this.time
                let timer = setInterval(() => {
                    time--
                    // console.log(time)
                    if (time <= 0) {
                        clearInterval(timer);
                        this.loading = false
                    }
                }, 1000)
            },
            add() {
                this.$store.commit('addCountMutation', this.counterNum)
            },
            reduce() {
                this.$store.commit('reduceCountMutation', this.counterNum)
            }
        },
        watch: {
            counterNum(val) {
                this.counterNum = val !== '' ? parseInt(val) : 1
            },
            time(val) {
                this.time = parseInt(val) > 0 ? parseInt(val) : 1
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/count-index";
</style>
