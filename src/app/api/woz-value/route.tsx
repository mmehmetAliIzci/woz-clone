import { NextRequest, NextResponse } from 'next/server';

export interface WozValueResponse {
  wozValue: number;
  eWozValue: number;
}

function getRandomIntInclusive(min: number, max: number) {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber / 1000) * 1000;
}

export async function GET(
  req: NextRequest
): Promise<NextResponse<WozValueResponse | { error: unknown }>> {
  try {
    let response = {
      wozValue: getRandomIntInclusive(400000, 450000),
      eWozValue: getRandomIntInclusive(400000, 450000)
    };

    // Simulate a 1 second delay before returning the response
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
