<template>
  <div class="tab-bar-item" @click="itemclick()">
    <div v-if="isActive"><slot name="item-ico-active"></slot></div>
    <div v-else><slot name="item-ico"></slot></div>
    <div :style="getcolor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    itemcolor:{
      type:String,
      default:'red'
    }
  },
  methods:{
    itemclick(){
      this.$router.push(this.path).catch(err=>{return err})
    }
  },
  computed:{
    getcolor(){
      return this.isActive?{color:this.itemcolor}:{}
    },
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  }
}
</script>

<style>
.tab-bar-item{
  font-size:14px;
  flex:1;
  text-align: center;
  height: 49;
}

.tab-bar-item img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>