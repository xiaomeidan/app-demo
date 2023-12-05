<template>
  <view class="cart">
    <slot name="left" />
    <view class="cart-img">
      <image class="img" mode="aspectFill" :src="cart.img" />
    </view>
    <view class="cart-middle">
      <view class="name">{{ cart.name }}</view>
      <view class="price">$ {{ cart.price.toFixed(2) }}</view>
    </view>
    <view>
      <button class="btn" @click="minus">
        <uni-icons type="minus" size="30" color="#D8D8D8" />
      </button>
    </view>
    <view>
      <input type="number" v-model="count" class="count-input" />
    </view>
    <view>
      <button class="btn" @click="add">
        <uni-icons type="plus" size="30" color="#FF7465" />
      </button>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { Cart } from "@/types/index";
import useCartStore from "@/stores/cart";

const props = defineProps<{
  cart: Cart;
}>();

const cartStore = useCartStore();

const count = computed({
  get() {
    return props.cart.count;
  },
  set(val: number) {
    cartStore.setGoodNumber(props.cart, val);
  },
});

function add() {
  cartStore.addToCart(props.cart);
}

function minus() {
  cartStore.rmFromCart(props.cart);
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  align-items: center;
  margin: 16px 0;
}
.cart-img {
  margin: 0 16px;
  border-radius: 20px;
  overflow: hidden;
  .img {
    width: 150rpx;
    height: 150rpx;
  }
}
.cart-middle {
  flex: 1;
}
.name {
  font-size: 20px;
  line-height: 30px;
}
.price {
  color: $theme-primary;
}
.btn {
  display: inline-block;
  border: none;
}
.count-input {
  display: inline-block;
  width: 30px;
  text-align: center;
  padding: 0;
}
</style>
