<template>
  <view :class="['good', `good-${margin}`]">
    {{ primaryColor }}
    <view class="img-wrap">
      <image class="img" mode="aspectFill" :src="good.img" />
      <view class="fav" @click="toggleFav">
        <uni-icons :type="isFavState ? 'heart-filled' : 'heart'" size="24" color="#FF7465" />
      </view>
    </view>
    <view class="name">{{ good.name }}</view>
    <view class="price">$ {{ good.price.toFixed(2) }}</view>
  </view>
</template>

<script setup lang="ts">
import type { Good } from "@/types/index";
import useFavStore from "@/stores/fav";

const props = defineProps<{
  good: Good;
  margin: "top" | "bottom";
}>();

const favStore = useFavStore();
const primaryColor = ref("");
const id = computed(() => props.good.id);
const isFavState = computed(() => favStore.isFav(id.value));

function toggleFav() {
  favStore.toggleFav(props.good);
}
</script>

<style lang="scss" scoped>
.img-wrap {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  .img {
    width: 100%;
  }
}
.name {
  font-size: 20px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  color: $theme-primary;
}
.good-top {
  margin-bottom: 30rpx;
}
.good-bottom {
  margin-top: 30rpx;
}
.fav {
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: white;
  border-radius: 50%;
  padding: 4px;
  height: 24px;
  line-height: 24px;
}
</style>
