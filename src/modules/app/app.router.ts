import userRoutes from '../user/user.router';
import orderRoutes from '../orders/order.router'
import productRoutes from '../products/product.router'
import invoiceRoutes from '../Invoices/Invoice.router'
import roleRoutes from '../roles/role.router'
import authRoutes from '../auth/auth.router'
import photoRouter from '../photo/photo.router'
import { AuthController } from '../auth/auth.controller';

export class AppRouter {
    public static async router (app: any){
          
        // app.use(AuthController.autorotation)
        app.use('/api/auth' , authRoutes)
        app.use('/api/product' , productRoutes)
        app.use('/api/orders' , orderRoutes)

        app.use('/api/photo' , photoRouter)
        app.use('/api/users', userRoutes);
        app.use('/api/invoice' , invoiceRoutes)
        app.use('/api/role' , roleRoutes)

        
    }
}