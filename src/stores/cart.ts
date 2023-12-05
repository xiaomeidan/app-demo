import { defineStore } from "pinia";
import img9 from "@/static/good/thunder.png";
import img10 from "@/static/good/wind.png";
import type { Good, Cart } from "@/types/index";

const cartStore = defineStore("cart", () => {
  const cart = ref<Cart[]>([
    {
      id: "9",
      name: "Thunderbolt Sofa",
      img: img9,
      tag: "top",
      price: 30,
      count: 2,
    },
    {
      id: "10",
      name: "Winged Breeze Sofa",
      img: img10,
      tag: "top",
      price: 30,
      count: 3,
    },
  ]);

  function addToCart(good: Good) {
    const isExist = cart.value.find(({ id }) => id === good.id);
    setGoodNumber(good, isExist ? isExist.count + 1 : 1);
  }

  function rmFromCart(good: Good) {
    const isExist = cart.value.find(({ id }) => id === good.id);
    if (isExist) {
      setGoodNumber(good, good.count - 1);
    }
  }

  function setGoodNumber(good: Good, count: number) {
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
    addToCart,
    rmFromCart,
    setGoodNumber,
  };
});

export default cartStore;
