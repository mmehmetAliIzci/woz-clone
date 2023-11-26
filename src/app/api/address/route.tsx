import { NextRequest, NextResponse } from 'next/server';

const BASE_API_URL = 'https://api.bestaatditadres.nl/lookup.json';

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

export async function GET(
  req: NextRequest
): Promise<NextResponse<AddressResponse[] | { error: unknown }>> {
  try {
    const searchParams = req.nextUrl.searchParams;
    const postcode = searchParams.get('postcode');
    const houseNumber = searchParams.get('houseNumber');

    const response = await fetch(
      `${BASE_API_URL}?postcode=${postcode?.toUpperCase()}&huisnummer=${houseNumber}`
    );

    if (!response.ok) {
      throw new Error(`Failed to communicate with external API with status: ${response.status}`);
    }

    const responseData: AddressResponse[] = await response.json();

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
