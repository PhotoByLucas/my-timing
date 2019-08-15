<template>
  <div id="app">
    <router-view />

    <!-- 将底部fix然后加一个div补上 -->
    <div style="height:50px"></div>
    <!-- 底部栏目 -->
    <tabbar>
      <tabbar-item  v-for="(item, index) in tabItems" :key="index" :id="item.id" :link="`/${item.id}`">
        <img slot="icon" :src="`../static/icons/${item.id}.png`" />
        <span slot="label">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tabbar: 'home',
      screenHeight: document.body.clientHeight, // 设置屏幕高度
      tabItems: [
        {
          id: 'home',
          label: '首页'
        },
        {
          id: 'message',
          label: '消息'
        },
        {
          id: 'personCenter',
          label: '个人中心'
        }
      ]
    }
  },
  watch: {
    tabbar: function (val) {
      this.$router.push(`${val}`)
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  /* color: #2c3e50; */
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
