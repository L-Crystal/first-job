<template>
    <div>
        <h1>vuex</h1>
        <p>mycount: {{ mycount }}</p>
        <p>mapstate_count: {{ count }}</p>
        <p>$store_count: {{ $store.state.count }}</p>
        <p>result:{{result}}</p>
        <!-- <button v-on:click="$store.commit('add')">+1</button> -->
        <button v-on:click="add">+1</button>
        <button v-on:click="addNum(5)">+5</button>
        <button v-on:click="reduceFun">-1</button>
    </div>
</template>

<script>
    import {mapState , mapMutations , mapActions, mapGetters} from "vuex";
    export default {
        computed: {
            //对需要的state进行映射
                ...mapState(["count"]),
                ...mapGetters(["result"]),
        },
        data() {
            return {
                
                mycount: this.$store.state.count,
            }
        },
        methods: {
            ...mapMutations(['add','addNum']),
            ...mapActions(["reduceFun"]),
            // add1(){
            //     this.$store.commit('add');
            // },
            // addNum1(num){
            //     this.$store.commit('addNum',num)
            // },
        }
    }
</script>

<style lang="scss" scoped>

</style>