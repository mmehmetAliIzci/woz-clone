import { parseAddress } from './parseAddress';

describe('getDutchPostCode', () => {
  [
    {
      input: '3026gs',
      output: {
        postCode: '3026gs'
      }
    },
    {
      input: '  3026gs  ',
      output: {
        postCode: '3026gs'
      }
    },
    {
      input: '  3026gs  123AB',
      output: {
        postCode: '3026gs',
        houseNumber: '123'
      }
    },
    {
      input: '3026gs 1234',
      output: {
        postCode: '3026gs',
        houseNumber: '1234'
      }
    },
    { input: '12345GG', output: undefined }
  ].forEach(({ input, output }) => {
    it(`works correctly for ${input}`, () => {
      expect(parseAddress(input)).toStrictEqual(output);
    });
  });
});
