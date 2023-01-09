// Initializes the `category ` service on path `/category`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Category } from './category.class';
import createModel from '../../models/category.model';
import hooks from './category.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'category': Category & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/category', new Category(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('category');

  service.hooks(hooks);
}
