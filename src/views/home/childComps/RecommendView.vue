<template>
    <div class="nav_box">
        <div v-for="(items,index) in recommends" :key="index" class="nav_buy">
            <a :href="items.link">
                <img :src="items.image" alt="">
            </a>
            <p>{{items.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

.nav_box{
    display: flex;
    border-bottom: 8px solid #eee;
    padding-bottom: 20px;
}
.nav_buy{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
}
.nav_buy a{
    width:79px;
    height: 79px;
    margin-bottom:8px;
    margin-top:8px;
}
.nav_buy a img{
    width:100%;
}

</style>