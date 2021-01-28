<template>
<div>
    <h1>课程</h1>
    <router-link to="/fe">前端课程</router-link> | 
    <router-link to="/rd">后端课程</router-link>
    <router-view></router-view>
</div>
</template>

<script>
    export default {
        name:"course",
        
    }
</script>

<style lang="scss" scoped>
    
</style>