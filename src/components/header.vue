<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" class="set-img" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="iconMap[seller.supports[0].type]"></span>
          <span>{{seller.supports[0].description}}</span>
        </div>
        <div class="num-wrapper" v-if="seller.supports">
          <span class="num">{{seller.supports.length}}个</span>
          <span class="icon-keyboard_arrow_right more"></span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <span class="bulletin">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right more"></span>
    </div>
    <div class="background-img">
      <img :src="seller.avatar" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.iconMap = ['decrease', 'discount', 'special', 'invoice_1', 'guarantee']
  }
}
</script>

<style lang="less">
.header{
  position: relative;
  overflow: hidden;
  .content-wrapper{
    background-color: rgba(7, 17, 27, 0.5);
    position: relative;
    .avatar{
      display:inline-block;
      margin: 24px 24px 18px;
      width: 64px;
      height: 64px;
      border-radius: 2px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 2px;
      }
    }
    .content{
      
      display: inline-block;
      color: rgb(255, 255, 255);
      .title{
        margin: 2px 4px;
        height: 18px;
        .brand{
          display:inline-block;
          margin-right: 6px;
          background-image: url('../assets/images/brand@2x.png');
          width: 30px;
          height: 18px;
          background-size: 30px 18px;
          vertical-align: top;
        }
        .name{
          font-size: 16px;
          font-weight: bold;
          line-height: 18px;
        }
      }
      .description{
        margin-top: 8px;
        font-size: 12px;
        font-weight: 100;
        height: 12px;
        line-height: 12px;
      }
      .supports{
        margin-top: 10px;
        margin-bottom: 2px;
        font-size: 10px;
        font-weight: 100;
        line-height: 16px;
        height: 16px;
        .icon{
          display: inline-block;
          margin-right: 4px;
          width: 16px;
          height: 16px;
          vertical-align: top;
          background-size: 16px;
          &.decrease{
            background-image: url('../assets/images/decrease_2@2x.png');
          }
          &.discount{
            background-image: url('../assets/images/discount_2@2x.png');
          }
          &.guarantee{
            background-image: url('../assets/images/guarantee_2@2x.png');
          }
          &.invoice{
            background-image: url('../assets/images/invoice_1@2x.png');
          }
          &.special{
            background-image: url('../assets/images/special_1@2x.png');
          }
        }
      }
      .num-wrapper{
        position: absolute;
        right: 12px;
        bottom: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 7px 8px;
        font-size: 10px;
        height: 12px;
        line-height: 12px;
        .num, .more{
          vertical-align: middle;
        }
      }
    }
  }
  .bulletin-wrapper{
    position: relative;
    padding: 0 12px;
    // width: 100%;
    height: 28px;
    background-color: rgba(7, 17, 27, 0.2);
    color: rgb(255, 255, 255);
    font-size: 10px;
    font-weight: 100;
    line-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .bulletin-icon{
      display: inline-block;
      width: 22px;
      height: 12px;
      background: url('../assets/images/bulletin@2x.png');
      background-size: 22px 12px;
      vertical-align: middle;
    }
    .bulletin{
      margin:0 4px;
      vertical-align: middle;
    }
    .more{
      position:absolute;
      right: 12px;
      bottom: 8px;
    }
  }
  .background-img{
    position:absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
    width: 100%;
    filter: blur(10px);
    img{
      background-size: cover;
      width: 100%;
    }
  }
}
</style>
