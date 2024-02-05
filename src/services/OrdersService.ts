import {Order} from "../models/OrderModel";

export class OrdersService {
    private static instance: OrdersService;

    static getInstance(): OrdersService {
        if (!OrdersService.instance) {
            OrdersService.instance = new OrdersService();
        }
        return OrdersService.instance
    }

    async getAllOrders(): Promise<Order[]> {
        return Order.findAll();
    }

    async getOrderById(id: string): Promise<Order | null> {
        return Order.findByPk(id);
    }

    async createOrder(orderData: CreateOrderData): Promise<Order> {
        return await Order.create({
            itemIds: orderData.item_ids,
            total: orderData.total,
            status: orderData.status || 'en attente',
        });
    }

}


interface CreateOrderData {
    item_ids: number[];
    total: number;
    status?: string; // Status est optionnel, vous pouvez définir une valeur par défaut
}