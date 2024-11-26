import { FetchLeaguesUseCaseFactory } from "@/app/factories/fetch-leagues-usecase-factory";
import { League } from "@/domain/entities/league";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fetchLeagues = new FetchLeaguesUseCaseFactory().make();

    const leagues = await fetchLeagues.execute();

    return NextResponse.json<League[]>(leagues);
  } catch (error) {
    console.error(error);
    NextResponse.json([]);
  }
}
