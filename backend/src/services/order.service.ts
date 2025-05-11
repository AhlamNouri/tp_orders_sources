import Order from "../models/order.model";

export const getAllOrders = () => Order.find();
export const getOrderById = (id: string) => Order.findById(id);
export const createOrder = (data: any) => new Order(data).save();
export const updateOrder = (id: string, data: any) => Order.findByIdAndUpdate(id, data, { new: true });
export const deleteOrder = (id: string) => Order.findByIdAndDelete(id);
