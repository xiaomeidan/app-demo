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
      name: "Amethyst Radiance Sofa",
      img: img1,
      tag: "top",
      price: 30,
    },
    {
      id: "2",
      name: "Dream Phantom Sofa",
      img: img2,
      tag: "lastest",
      price: 30,
    },
    {
      id: "3",
      name: "Dazzling Fantasy Sofa",
      img: img3,
      tag: "top",
      price: 30,
    },
    {
      id: "4",
      name: "Flame Inferno Sofa",
      img: img4,
      tag: "top",
      price: 30,
    },
    {
      id: "5",
      name: "Steel Beast Sofa",
      img: img5,
      tag: "top",
      price: 30,
    },
    {
      id: "6",
      name: "Royal Throne Sofa",
      img: img6,
      tag: "lastest",
      price: 30,
    },
    {
      id: "7",
      name: "Obsidian Throne Sofa",
      img: img7,
      tag: "top",
      price: 30,
    },
    {
      id: "8",
      name: "Interstellar Voyage Sofa",
      img: img8,
      tag: "lastest",
      price: 30,
    },
    {
      id: "9",
      name: "Thunderbolt Sofa",
      img: img9,
      tag: "top",
      price: 30,
    },
    {
      id: "10",
      name: "Winged Breeze Sofa",
      img: img10,
      tag: "top",
      price: 30,
    },
  ];
}
