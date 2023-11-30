import type { Good } from "@/types/index";
import img1 from "@/static/good/amethyst.png";
import img2 from "@/static/good/dream.png";
import img3 from "@/static/good/fantasy.png";
import img4 from "@/static/good/fire.png";
import img5 from "@/static/good/iron.png";
import img6 from "@/static/good/monarch.png";
import img7 from "@/static/good/obsidian.png";
import img8 from "@/static/good/space.png";
import img9 from "@/static/good/thunder.png";
import img10 from "@/static/good/wind.png";

export function getGood(): Good[] {
  return [
    {
      id: "1",
      name: "紫晶华光沙发",
      img: img1,
      tag: "top",
      price: 30,
    },
    {
      id: "2",
      name: "幻影之梦沙发",
      img: img2,
      tag: "lastest",
      price: 30,
    },
    {
      id: "3",
      name: "炫彩奇幻沙发",
      img: img3,
      tag: "top",
      price: 30,
    },
    {
      id: "4",
      name: "火焰烈焰沙发",
      img: img4,
      tag: "top",
      price: 30,
    },
    {
      id: "5",
      name: "钢铁巨兽沙发",
      img: img5,
      tag: "top",
      price: 30,
    },
    {
      id: "6",
      name: "王者御座沙发",
      img: img6,
      tag: "lastest",
      price: 30,
    },
    {
      id: "7",
      name: "黑曜石宝座沙发",
      img: img7,
      tag: "top",
      price: 30,
    },
    {
      id: "8",
      name: "星际航行沙发",
      img: img8,
      tag: "lastest",
      price: 30,
    },
    {
      id: "9",
      name: "雷电霹雳沙发",
      img: img9,
      tag: "top",
      price: 30,
    },
    {
      id: "10",
      name: "飞翼御风沙发",
      img: img10,
      tag: "top",
      price: 30,
    },
  ];
}
