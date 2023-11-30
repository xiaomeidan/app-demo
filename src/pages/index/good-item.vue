<template>
  <view class="good">
    <img :src="good.img" :alt="good.name" class="img" />
  </view>
</template>

<script setup lang="ts">
import { getGood } from "@/pages/api/index";
import type { Good } from "@/types/index";

const props = defineProps<{
  good: Good;
}>();
</script>

<style lang="scss" scoped>
.good {
  border-radius: 30px;
  overflow: hidden;
  .img {
    width: 100%;
  }
}
</style>
