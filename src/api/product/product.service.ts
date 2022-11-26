import ProductModel, { Product } from "./product.model";

export const createProduct = (data: Product) => ProductModel.create(data);
export const getProducts = () => ProductModel.find({});
export const getProductById = (id: string) => ProductModel.findById(id);
export const updateProduct = (id: string, newData: Product) => ProductModel.findByIdAndUpdate(id, newData, {new: true});
export const deleteProduct = (id: string) => ProductModel.findByIdAndDelete(id);

