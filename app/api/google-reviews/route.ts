import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  console.log("API Key:", apiKey, "Place ID:", placeId);

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1hr
    const data = await res.json();
    console.log("Fetched data:", data);

    if (data.status !== "OK") {
      return NextResponse.json({ error: data.status }, { status: 500 });
    }

    return NextResponse.json({
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews ?? [],
    });
  } catch (err) {
    console.error(err, 'err');
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}