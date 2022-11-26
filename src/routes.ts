import product from './api/product';
import { Application } from 'express';

const routes = (app: Application) => {
    app.use('/api/product', product)
}

export default routes;
