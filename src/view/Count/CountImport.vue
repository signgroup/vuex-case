<template>
    <div class="CountIndex">
        <h3>{{importFrom}}</h3>
        <el-form ref="form" label-width="80px">
            <el-form-item label="当前值">
                <!--<p>当前最新数量是[{{count}}]</p>-->
                <p>{{showNum}}</p>
            </el-form-item>
            <el-form-item label="每次加减">
                <el-input class="count-input" type="number" v-model.number="counterNum"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="addCountMutation(counterNum)">+</el-button>
                <el-button @click="reduceCountMutation(counterNum)">-</el-button>
            </el-form-item>
            <el-form-item label="异步加减">
                <el-input-number class="input-number" v-model="time" :min="1" :max="10"
                                 label="描述文字"></el-input-number>
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
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

    export default {
        name: "Index",
        data() {
            return {
                counterNum: 1,
                time: 1,
                loading: false
            }
        },
        computed: {
            // ...mapState(['count']), //不加module
            ...mapState({
                count: state => state.moduleCount.count
            }),
            ...mapGetters(['showNum','importFrom'])
        },
        methods: {
            ...mapMutations(['addCountMutation', 'reduceCountMutation']),
            ...mapActions(['addAsyncAction', 'reduceAsyncAction']),
            asyncDispatch(action) {
                this.loading = true
                this[action]({
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
            }
        },
        watch: {
            counterNum(val) {
                this.counterNum = val !== '' ? parseInt(val) : 1
            },
            time(val) {
                this.time = val > 0 ? val : 1
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "./../../assets/count-index";
</style>
