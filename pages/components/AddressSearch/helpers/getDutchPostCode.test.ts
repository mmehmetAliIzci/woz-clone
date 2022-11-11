import { getDutchPostCode } from './getDutchPostCode';

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
        houseNumber: '123AB'
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
      expect(getDutchPostCode(input)).toStrictEqual(output);
    });
  });
});
