import app from '../../src/app';

describe('\'transaction \' service', () => {
  it('registered the service', () => {
    const service = app.service('transaction');
    expect(service).toBeTruthy();
  });
});
