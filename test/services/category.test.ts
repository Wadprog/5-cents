import app from '../../src/app';

describe('\'category \' service', () => {
  it('registered the service', () => {
    const service = app.service('category');
    expect(service).toBeTruthy();
  });
});
