// Initializes the `tags ` service on path `/tags`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Tags } from './tags.class';
import createModel from '../../models/tags.model';
import hooks from './tags.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'tags': Tags & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/tags', new Tags(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('tags');

  service.hooks(hooks);
}
