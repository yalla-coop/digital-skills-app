import { expect } from 'chai';
import { build } from '../../../database';
import * as find from './find';

// eslint-disable-next-line no-unused-vars
let createdData;

describe('findTestById()', () => {
  before(async () => {
    createdData = await build();
  });
  it('should return...', async () => {
    await find.findTestById();
    expect(1).to().eq(1);
  });
});
