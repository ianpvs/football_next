import { FetchLeaguesRepository } from "@/data/repository/fetch-leagues-repository";
import { League } from "@/domain/entities/league";

interface ApiLeagueResponse {
  get: string;
  parameters: Record<string, unknown>;
  errors: string[];
  results: number;
  response: ApiLeagueData[];
}

interface ApiLeagueData {
  league: ApiLeague;
  country: ApiCountry;
}

interface ApiLeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface ApiCountry {
  name: string;
  code: string;
  flag: string;
}

export class HttpFetchLeaguesRepository implements FetchLeaguesRepository {
  async fetch(): Promise<League[]> {
    console.log(process.env.API_URL);
    console.log(process.env.API_KEY);
    
    const response = await fetch(`${process.env.API_URL}/leagues`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": String(process.env.API_KEY),
        "Content-Type": "application/json",
      },
    });

    const { response: leagues } = (await response.json()) as ApiLeagueResponse;

    return leagues.map(({ country, league }) => ({
      countryFlag: country.flag,
      countryName: country.name,
      id: league.id,
      logo: league.logo,
      name: league.name,
    }));
  }
}
