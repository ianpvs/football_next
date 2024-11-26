import { HttpFetchLeaguesRepository } from "@/infrastructure/repository/http-fetch-leagues-repository";

const mockLeagues = [
  {
    country: { flag: "flag", name: "name" },
    league: { id: 1, logo: "logo", name: "name" },
  },
];

const mockResponse = {
  json: jest.fn().mockResolvedValue({ response: mockLeagues }),
};

describe("HttpFetchLeaguesRepository", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue(mockResponse);
  });

  it("should be defined", () => {
    expect(HttpFetchLeaguesRepository).toBeDefined();
  });

  it("Should have a fetch method", () => {
    const fetchLeaguesRepository = new HttpFetchLeaguesRepository();

    expect(fetchLeaguesRepository.fetch).toBeInstanceOf(Function);
  });

  it("Should throw error when API_KEY is not defined", async () => {
    const originalApiKey = process.env.API_KEY;
    process.env.API_KEY = undefined;

    (global.fetch as jest.Mock).mockRejectedValue(
      new Error("API_KEY is not defined")
    );

    const fetchLeaguesRepository = new HttpFetchLeaguesRepository();

    await expect(fetchLeaguesRepository.fetch()).rejects.toThrow(
      "API_KEY is not defined"
    );

    process.env.API_KEY = originalApiKey;
  });

  it("Should call fetch api with correct params", async () => {
    const fetchLeaguesRepository = new HttpFetchLeaguesRepository();

    const fetchApiSpy = jest.spyOn(global, "fetch");

    await fetchLeaguesRepository.fetch();

    expect(fetchApiSpy).toHaveBeenCalledWith(
      "https://v3.football.api-sports.io/leagues",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": String(process.env.API_KEY),
        },
      }
    );
  });

  it("Should return leagues", async () => {
    const fetchLeaguesRepository = new HttpFetchLeaguesRepository();

    const leagues = await fetchLeaguesRepository.fetch();

    expect(leagues).toEqual([
      {
        countryFlag: "flag",
        countryName: "name",
        id: 1,
        logo: "logo",
        name: "name",
      },
    ]);
  });

  it("Should throw error when fetch api throws error", async () => {
    const fetchLeaguesRepository = new HttpFetchLeaguesRepository();

    (global.fetch as jest.Mock).mockRejectedValue(new Error("error"));

    await expect(fetchLeaguesRepository.fetch()).rejects.toThrow("error");
  });
});
