import { createProduct, getProductById, getProducts, updateProduct, deleteProduct} from "./product.service";  
import { Request, Response } from "express";
 
export const createProductHandler = async(req: Request, res: Response) => {
    try {
        const productCreated = await createProduct(req.body);
        return res.json({message: 'Product created', productCreated})
    } catch (error) {
        console.log('Error to create a new product');
        return res.status(500).json({error})
    }
}

export const findProductsHandler =  async (req:Request, res: Response) => {
    try {
        const foundProducts = await getProducts();
        return res.json({message: "Found products", foundProducts})
    } catch (error) {
        console.log(error);
    }
}

export const updateProductHandler = async(req: Request, res: Response) => {
    try {
        const {id} = req.params
        const newData = req.body 
        
        const foundProduct = await getProductById(id)
        
        if(!foundProduct) return res.status(404).json({message: "Product not found"})

        const updatedProduct = await updateProduct(id, newData)

        return res.status(200).json({message: "updated product", updatedProduct})
        
    } catch (error) {
        console.log(error)
    }
}

export const deleteProductHandler = async (req: Request, res: Response) => {
    try {
        const {id} = req.params

        const foundProduct = await getProductById(id)
        
        if(!foundProduct) return res.status(404).json({message: "Product not found"})

        const deletedProduct = await deleteProduct(id)

        return res.status(200).json({message: "Deleted product", deletedProduct})

    } catch (error) {
        console.log(error)
    }
}
