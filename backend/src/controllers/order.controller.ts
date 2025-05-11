import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export const getAllOrders = async (_req: Request, res: Response) => res.json(await orderService.getAllOrders());
export const getOrderById = async (req: Request, res: Response) => res.json(await orderService.getOrderById(req.params.id));
export const createOrder = async (req: Request, res: Response) => res.status(201).json(await orderService.createOrder(req.body));
export const updateOrder = async (req: Request, res: Response) => res.json(await orderService.updateOrder(req.params.id, req.body));
export const deleteOrder = async (req: Request, res: Response) => res.json(await orderService.deleteOrder(req.params.id));
