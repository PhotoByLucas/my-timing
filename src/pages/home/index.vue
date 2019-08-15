<template>
  <div>
    <!-- 头部 -->
    <x-header >首页</x-header>

    <div style="height:20px"></div>

    <!-- 标签行 -->
    <flexbox :gutter="0" wrap="wrap" justify="space-around">
      <flexbox-item
        :span="1/2.3"
        v-for="(item, index) in secondCardList"
        :key="index"
        class="yuan-jiao"
        :style="`background-color:${item.color}`"
      >
        <div class="second-Card-label">{{item.label}}</div>
      </flexbox-item>
    </flexbox>

    <cell title="推荐小组" disabled></cell>
    <panel class="my-panel" :list="panelList" type="1" style="margin-top: 0px "></panel>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      // 第二行标签
      secondCardList: [
        {
          label: '自 习 室',
          color: '#66b1ea'
        },
        {
          label: '番 茄 学 习',
          color: '#62ccb6'
        },
        {
          label: '早 晚 打 卡',
          color: '#fb9701'
        },
        {
          label: '学 习 小 组',
          color: '#FFEB3B'
        }
      ],
      // 小组卡片
      panelList: [
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          fallbackSrc: '',
          title: '小组一',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚'
          // url: '/component/cell'
        },
        {
          src: '',
          title: '小组二',
          desc:
            '小组介绍大噶似大噶似的高大上的噶山豆根大傻祷告艾迪莎是德国啊的施工嗷刚',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';

.yuan-jiao {
  margin-bottom: 10px;
  border-radius: 10px;
  height: 60px;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
}
.second-Card-label {
  font-size: 20px;
  color: white;
}
/deep/ .weui-panel {
  margin-top: 0px !important;
  overflow: auto;
}
</style>
