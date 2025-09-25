import { IOrder, OrderModel } from "./order.modele";

export class OrderRepository {
    async createOrder(orderData: Partial<IOrder>): Promise<IOrder> {
        const order = new OrderModel(orderData);
        return await order.save();
    }
    async updateOrder(id: string, orderData: Partial<IOrder>): Promise<IOrder | null> {
        return await OrderModel.findByIdAndUpdate(id, orderData);
    }
    async deleteOrder(id: string): Promise<IOrder | null> {
        return await OrderModel.findByIdAndDelete(id)
    }
    async findOrderById(id: string): Promise<IOrder | null> {
        return await OrderModel.findById(id);
      }
    async paginate(page: number | string, limit: number | string, query: any = {}, select = "-password") {

        const { address  , status} = query;
        const regexName = new RegExp(address, 'i');
       
       
        let _query = {}
        console.log(regexName)
        if (status) {
          _query = {
            $or: [
              { status: status },
            ],
          }
        }
        const total = await OrderModel.countDocuments(_query);
        const limitNumber = limit === Infinity || limit === 'Infinity' ? total : Number(limit);
        const pageNumber = Math.max(Number(page), 1);


        const docs = await OrderModel
            .find(_query)
            .select(select)
            .limit(limitNumber)
            .skip((pageNumber - 1) * limitNumber)
            .lean();


        return {
            'docs': docs,
            'page': pageNumber,
            'limit': limitNumber,
            'total': total,
            'pages': Math.ceil(total / limitNumber),
        };
    }
}