import app from '../../src/app';

describe('\'payment-method\' service', () => {
  it('registered the service', () => {
    const service = app.service('payment-method');
    expect(service).toBeTruthy();
  });
});
