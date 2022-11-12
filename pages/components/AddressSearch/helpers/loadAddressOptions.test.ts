import {
  defaultDisabledValue,
  loadAddressOptions,
  SOMETHING_WRONG,
  TYPE_HOUSE,
  TYPE_HOUSE_POSTCODE
} from './loadAddressOptions';
import fetch from 'jest-fetch-mock';

describe('loadAddressOptions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('when postcode and house number not provided', () => {
    it('calls callback with asking housenumber and postcode', async () => {
      const mockCb = jest.fn();
      await loadAddressOptions('', mockCb);
      expect(mockCb).toBeCalledWith([{ ...defaultDisabledValue, label: TYPE_HOUSE_POSTCODE }]);
    });
    it('calls callback with asking housenumber and postcode', async () => {
      const mockCb = jest.fn();
      await loadAddressOptions('asdf', mockCb);
      expect(mockCb).toBeCalledWith([{ ...defaultDisabledValue, label: TYPE_HOUSE_POSTCODE }]);
    });
  });

  describe('when postcode provided and house number not provided', () => {
    it('calls callback with asking house number', async () => {
      const mockCb = jest.fn();
      await loadAddressOptions('3026gs', mockCb);
      expect(mockCb).toBeCalledWith([{ ...defaultDisabledValue, label: TYPE_HOUSE }]);
    });
  });

  describe('when api returns faulty', () => {
    it('calls callback with something wrong', async () => {
      const mockCb = jest.fn();
      await loadAddressOptions('3026gs 330', mockCb);
      expect(mockCb).toBeCalledWith([{ ...defaultDisabledValue, label: SOMETHING_WRONG }]);
    });
  });

  it('finds address', async () => {
    const mockCb = jest.fn();

    fetch.mockResponseOnce(
      JSON.stringify([
        {
          y: 436369.96,
          huisnummertoevoeging: '01',
          nevenadres: false,
          object_id: 599010000207427,
          openbareruimte: 'Mathenesserdijk',
          huisnummer: 330,
          object_type: 'verblijfsobject',
          gebruiksdoelen: ['woonfunctie'],
          breedtegraad: 51.91205704727332,
          postcode: '3026GS',
          lengtegraad: 4.44676329146297,
          woonplaats: 'Rotterdam',
          id: 599200000362765,
          huisletter: 'A',
          x: 90292.75
        }
      ])
    );

    await loadAddressOptions('3026gs 330', mockCb);

    expect(mockCb).toBeCalledWith([
      {
        value: {
          y: 436369.96,
          huisnummertoevoeging: '01',
          nevenadres: false,
          object_id: 599010000207427,
          openbareruimte: 'Mathenesserdijk',
          huisnummer: 330,
          object_type: 'verblijfsobject',
          gebruiksdoelen: ['woonfunctie'],
          breedtegraad: 51.91205704727332,
          postcode: '3026GS',
          lengtegraad: 4.44676329146297,
          woonplaats: 'Rotterdam',
          id: 599200000362765,
          huisletter: 'A',
          x: 90292.75
        },
        label: 'Mathenesserdijk, 330 01 3026GS Rotterdam',
        color: '#EBECF0'
      }
    ]);
  });
});
