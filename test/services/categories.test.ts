import app from '../../src/app';

describe('\'categories \' service', () => {
  it('registered the service', () => {
    const service = app.service('categories');
    expect(service).toBeTruthy();
  });
});
