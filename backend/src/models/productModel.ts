import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Review {
  @prop({ required: true })
  public name!: string
  @prop({ required: true })
  public comment!: string
  @prop({ required: true })
  public rating!: number
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id?: string
  @prop({ required: true })
  public name!: string
  @prop({ required: true, unique: true })
  public slug!: string
  @prop({ required: true })
  public image!: string
  @prop()
  public images!: string[]
  @prop({ required: true })
  public brand!: string
  @prop({ required: true })
  public category!: string
  @prop({ required: true })
  public description!: string
  @prop({ required: true, default: 0 })
  public price!: number
  @prop({ required: true, default: 0 })
  public countInStock!: number
  @prop({ required: true, default: 0 })
  public rating!: number
  @prop({ required: true, default: 0 })
  public numReviews!: number
  @prop()
  public reviews!: Review[]
}

export const ProductModel = getModelForClass(Product)
