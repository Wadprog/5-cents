import { Application } from '../declarations';
import users from './users/users.service';
import transaction from './transaction/transaction.service';
import transactionTypes from './transaction-types/transaction-types.service';
import tags from './tags/tags.service';
import paymentMethod from './payment-method/payment-method.service';
import categories from './categories/categories.service';

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(transaction);
  app.configure(transactionTypes);
  app.configure(tags);
  app.configure(paymentMethod);
  app.configure(categories);
}
