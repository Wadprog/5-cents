import config from 'config';
import { nanoid } from 'nanoid';

const NAMESPACE = config.get('TEST_MAIL_NAMESPACE');

export default () => `${NAMESPACE}.${nanoid()}@inbox.testmail.app`;
