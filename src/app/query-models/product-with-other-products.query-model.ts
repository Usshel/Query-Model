import { ProductModel } from "../models/product.model";

export interface ProductWithOtherProductsQueryModel {
  readonly product: ProductModel;
  readonly otherProducts: ProductModel[];
}
