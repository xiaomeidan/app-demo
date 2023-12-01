<template>
  <view>
    <view class="good-wrap">
      <good-item
        v-for="(good, index) in fav"
        :key="good.id"
        :good="good"
        :margin="index % 2 === 0 ? 'top' : 'bottom'"
      />
    </view>
    <empty v-if="!fav.length" type="fav" />
  </view>
</template>

<script setup lang="ts">
import useFavStore from "@/stores/fav";
import empty from "@/component/empty.vue";
import goodItem from "@/pages/index/good-item.vue";

const favStore = useFavStore();
const { fav } = storeToRefs(favStore);
</script>

<style lang="scss" scoped>
.good-wrap {
  display: grid;
  grid-template-columns: repeat(2, 320rpx);
  grid-gap: 0 30rpx;
}
</style>
