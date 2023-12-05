export interface Good {
  id: string;
  name: string;
  img: string;
  tag: "top" | "lastest";
  price: number;
}

export interface Cart extends Good {
  count: number;
}
