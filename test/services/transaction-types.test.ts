import app from '../../src/app';

describe('\'transaction-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('transaction-types');
    expect(service).toBeTruthy();
  });
});
