<template>
  <view>
    <view v-show="cart.length">
      <view>
        <checkbox value="all" color="#FF7465" :checked="selectAll" @change="onChange" />
        <text class="all">{{ selectAll ? "Cancel select" : "Select All" }}</text>
      </view>
      <checkbox-group @change="onSelect">
        <cart-item v-for="item in cart" :cart="item" :key="item.id">
          <template slot="left">
            <checkbox :value="item.id" color="#FF7465" :checked="select.includes(item.id)" />
          </template>
        </cart-item>
      </checkbox-group>
      <view class="checkout">
        Total Payment <text class="check-total">$ {{ total }}</text>
        <button class="checkout-btn">Checkout</button>
      </view>
    </view>
    <empty v-if="!cart.length" type="cart" />
  </view>
</template>

<script setup lang="ts">
import useCartStore from "@/stores/cart";
import empty from "@/component/empty.vue";
import cartItem from "@/pages/cart/cart-item.vue";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const selectAll = ref(false);
const select = ref<string[]>([]);

const total = computed(() =>
  cart.value.reduce((sum, item) => {
    if (!select.value.includes(item.id)) {
      return sum;
    }
    return sum + item.price * item.count;
  }, 0)
);

function onSelect(e: any) {
  select.value = e.detail.value;
}
function onChange(e: any) {
  selectAll.value = e.detail.value;
  if (selectAll.value) {
    select.value = cart.value.map((item) => item.id);
    return;
  }
  select.value = [];
}
</script>

<style lang="scss" scoped>
.all {
  color: $theme-primary;
  margin-left: 16px;
  font-size: 20px;
}
.checkout {
  position: fixed;
  bottom: 0;
  width: calc(100% - 40px);
  font-size: 20px;
  line-height: 52px;
}
.check-total {
  color: $theme-primary;
}
.checkout-btn {
  display: inline-block;
  padding: 0 20px;
  font-size: 20px;
  line-height: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #ff7465;
  color: white;
}
</style>
