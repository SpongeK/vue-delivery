<template>
  <div id="goods">
    <div class="menu-wrapper">
      <div class="menu-item" v-for="(item, index) in goods" :key="index">
        <div class="text-wrapper">
          <span class="menu-icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
          <span class="menu-content">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'goods',
  data () {
    return{
      goods: [],
      classMap: [
        'decrease',
        'discount',
        'special',
        'invoice_1',
        'guarantee'
      ]
    }
  },
  created () {
    axios.get('/good/goods').then(res => {
      if(res.data.code === 0) {
        this.goods = res.data.data
      }
    })
  }
}
</script>

<style lang="less">
#goods{
  position: relative;
  display: flex;
  .menu-wrapper{
    flex: 0 0 80px;
    background-color: #f3f5f7;
    width: 80px;
    font-size: 12px;
    .menu-item{
      padding: 0 12px;
      .text-wrapper{
        display: table-cell;
        vertical-align: middle;
        height: 54px;
        width: 56px;
        line-height: 14px;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .menu-icon{
          display: inline-block;
          vertical-align: top;
          width: 14px;
          height: 14px;
          background-size: 14px;
          &.decrease{
            background-image: url('../assets/images/decrease_3@2x.png');
          }
          &.discount{
            background-image: url('../assets/images/discount_3@2x.png');
          }
          &.guarantee{
            background-image: url('../assets/images/guarantee_3@2x.png');
          }
          &.invoice{
            background-image: url('../assets/images/invoice_3@2x.png');
          }
          &.special{
            background-image: url('../assets/images/special_3@2x.png');
          }
        }
        
      }
      &.current{
        background-color: #fff;
        & .text-wrapper{
          border-bottom: 1px solid #fff;
        }
      }
      
    }

  }
  .foods-wrapper{

  }
}
</style>
