import app from '../../src/app';

describe('\'tags \' service', () => {
  it('registered the service', () => {
    const service = app.service('tags');
    expect(service).toBeTruthy();
  });
});
