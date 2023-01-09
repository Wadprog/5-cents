// Initializes the `payment-method` service on path `/payment-method`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { PaymentMethod } from './payment-method.class';
import createModel from '../../models/payment-method.model';
import hooks from './payment-method.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'payment-method': PaymentMethod & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/payment-method', new PaymentMethod(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('payment-method');

  service.hooks(hooks);
}
