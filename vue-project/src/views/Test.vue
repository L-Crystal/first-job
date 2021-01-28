<template>
    <div>
        <h1>活动页面</h1>
        <button @click="goback">后退一步</button>
        <button @click="goback2">后退两步</button>
        <button @click="goHome">返回首页</button>
    </div>
</template>

<script>
    export default {
        methods: {
            goback() {
                this.$router.back()
            },
            goback2() {
                this.$router.go(-2)
            },
            goHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>