export type Slot = {
  slot: number;
  name?: string;
  label?: string;
  tipologia?: string;
  rarity?: string;
  width?: number;
  height?: number;
  count?: number;
  weight?: number;
  metadata?: {
    [key: string]: any;
  };
  durability?: number;
};

export type SlotWithItem = Slot & {
  name: string;
  tipologia: string;
  rarity: string;
  weight: number;
  width: number;
  height: number;
  count: number;
  durability?: number;
  price?: number;
  currency?: string;
  ingredients?: { [key: string]: number };
  duration?: number;
  image?: string;
  grade?: number | number[];
};
