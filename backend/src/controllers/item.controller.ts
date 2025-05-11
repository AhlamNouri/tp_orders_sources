import { Request, Response } from "express";
import * as itemService from "../services/item.service";

export const getAllItems = async (_req: Request, res: Response) => res.json(await itemService.getAllItems());
export const getItemById = async (req: Request, res: Response) => res.json(await itemService.getItemById(req.params.id));
export const createItem = async (req: Request, res: Response) => res.status(201).json(await itemService.createItem(req.body));
export const updateItem = async (req: Request, res: Response) => res.json(await itemService.updateItem(req.params.id, req.body));
export const deleteItem = async (req: Request, res: Response) => res.json(await itemService.deleteItem(req.params.id));
