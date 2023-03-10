// Initializes the `transaction-types` service on path `/transaction-types`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { TransactionTypes } from './transaction-types.class';
import createModel from '../../models/transaction-types.model';
import hooks from './transaction-types.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'transaction-types': TransactionTypes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/transaction-types', new TransactionTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('transaction-types');

  service.hooks(hooks);
}
