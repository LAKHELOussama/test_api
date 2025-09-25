import { IOrder } from "./order.modele";
import { OrderRepository } from "./order.repo";

export class OrderService {
    private orderRepository: OrderRepository
    constructor() {
        this.orderRepository = new OrderRepository()
    }
    async createOrder(orderData: Partial<IOrder>): Promise<IOrder> {
        return await this.orderRepository.createOrder(orderData)
    }

    async updateOrder(id: string, orderData: Partial<IOrder>): Promise<IOrder | null> {
        return await this.orderRepository.updateOrder(id, orderData)
    }

    async deleteOrder(id: string): Promise<IOrder | null> {
        return this.orderRepository.deleteOrder(id)
    }

    async finById(id: string): Promise<IOrder | null> {
        return this.orderRepository.findOrderById(id)
    }
    async paginate(page: number, limit: number , query? :any) {
        return await this.orderRepository.paginate(page, limit ,query )
    }

}