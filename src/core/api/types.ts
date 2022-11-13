export interface WozValueResponse {
  wozValue: number;
  eWozValue: number;
}

export interface AddressResponse {
  readonly woonplaats?: string;
  readonly postcode?: string;
  readonly huisnummer?: string;
  readonly huisletter?: string;
  readonly huisnummertoevoeging?: string | null;
  readonly openbareruimte?: string;
  readonly gebruiksdoelen: string[];
  readonly object_id: string;
}
