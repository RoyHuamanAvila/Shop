import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        _id: false
    }
})
class Category{
    @prop({type: String,required: true})
    name: string
    @prop()
    slug: string
}

@modelOptions({
    schemaOptions: {
        _id: false
    }
})
class Brand {
    @prop({required: true})
    name: string
    @prop()
    slug: string
}


@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Product {
    @prop({type: String, required: true})
    name: string;
    @prop({Type:[Category],required: true})
    category: Category;
    @prop({type:[Brand],required: true})
    brand: Brand
    @prop({type:String})
    slug: string
    @prop({type: String,required: true})
    status: string
    @prop({type: Number, required: true})
    price: number
}

const ProductModel = getModelForClass(Product)
export default ProductModel
