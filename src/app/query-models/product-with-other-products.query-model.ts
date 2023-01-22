

export interface ProductWithOtherProductsQueryModel {
  readonly product: {
    id: string;
    title: string;
    price: number;
    category: string;
  };
  readonly otherProducts: {
    id: string;
    title: string;
    price: number;
    category: string;
  }[];
}
