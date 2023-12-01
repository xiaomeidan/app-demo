import { defineStore } from "pinia";
import type { Good as GoodOrig } from "@/types/index";

type Good = GoodOrig & { count: number };

const cartStore = defineStore("cart", () => {
  const cart = ref<Good[]>([]);

  function setGoodNumber(good: GoodOrig, count: number) {
    if (count <= 0) {
      cart.value = cart.value.filter(({ id }) => id !== good.id);
      return;
    }

    const isExist = cart.value.find(({ id }) => id === good.id);
    if (isExist) {
      isExist.count = count;
      return;
    }
    cart.value = [{ ...good, count }, ...cart.value];
  }

  return {
    cart,
    setGoodNumber,
  };
});

export default cartStore;
