<template>
    <footer  :style="{ backgroundColor: curMenu.bgColor}">
        <div v-for="menu in menuList" :key="menu.path" @click="setCurMenu(menu)">
            <router-link to="/menu.path">{{menu.name}}</router-link>
        </div>
        <!-- <div>
            <router-link to="/music">音乐</router-link>
        </div>
        <div>
            <router-link to="/book">书籍</router-link>
        </div>
        <div>
            <router-link to="/chat">聊天</router-link>
        </div> -->
        
    </footer>
</template>

<script>
import { mapState,mapMutations} from "vuex";
    export default {
        computed: {
            ...mapState(["curMenu"]),
        },
        data(){
            return {
                curColor:" rgb(117, 38, 38)",
                menuList:[
                    {path:'/',name:'剧集',bgColor:'rgb(117, 38, 38)'},
                    {path:'/music',name:'音乐',bgColor:'rgb(145, 116, 55)'},
                    {path:'/book',name:'书籍',bgColor:' rgb(76, 121, 58)'},
                    {path:'/chat',name:'聊天',bgColor:' rgb(97, 45, 65)'},
                ]
            }
        },
        methods: {
            ...mapMutations(["setCurMenu"]),
            changeColor(menu){
                this.setCurMenu(menu)
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    footer{
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: rgb(117, 38, 38);
        span{
            position: absolute;
            left: 0;
        }
    }
</style>