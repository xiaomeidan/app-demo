<template>
  <view class="box">
    <image class="img" mode="aspectFit" :src="empty.img" />
    <view v-if="empty.title" class="title">{{ empty.title }}</view>
    <view v-if="empty.subTitle" class="subtitle">{{ empty.subTitle }}</view>
  </view>
</template>

<script setup lang="ts">
import favImg from "@/static/empty/fav.png";
import dataImg from "@/static/empty/data.png";
import cartImg from "@/static/empty/cart.png";

const props = defineProps<{
  type: string;
}>();

const emptyMap = {
  fav: {
    title: "No Favorites Found",
    subTitle: "Open the product menu and select your favorite product",
    img: favImg,
  },
  data: {
    title: "No Related Product",
    subTitle: "",
    img: dataImg,
  },
  data: {
    title: "Empty Basket",
    subTitle: "Your basket is still empty, browse the attractive promos from bardeal",
    img: cartImg,
  },
};
const empty = computed(() => emptyMap[props.type]);
</script>

<style lang="scss" scoped>
.box {
  padding: 100rpx 40rpx 0 40rpx;
  text-align: center;
}
.img {
  width: 500rpx;
}
.title {
  font-size: 30px;
  line-height: 70px;
  color: $theme-primary;
}
.subtitle {
  font-size: 16px;
  color: $uni-text-color-grey;
}
</style>
