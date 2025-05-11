import Item from "../models/item.model";

export const getAllItems = () => Item.find();
export const getItemById = (id: string) => Item.findById(id);
export const createItem = (data: any) => new Item(data).save();
export const updateItem = (id: string, data: any) => Item.findByIdAndUpdate(id, data, { new: true });
export const deleteItem = (id: string) => Item.findByIdAndDelete(id);
