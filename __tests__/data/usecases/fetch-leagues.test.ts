import { League } from "@/domain/entities/league";
import { FetchLeagues } from "@/data/usecases/fetch-leagues";

const mockLeagues: League[] = [
  {
    id: 1,
    name: "A League 1",
    logo: "https://example.com/mock-league-1-logo.png",
    countryName: "Mock Country 1",
    countryFlag: "https://example.com/mock-country-1-flag.png",
  },
  {
    id: 2,
    name: "B League 2",
    logo: "https://example.com/mock-league-2-logo.png",
    countryName: "Mock Country 2",
    countryFlag: "https://example.com/mock-country-2-flag.png",
  },
];

const makeFetchLeagues = () => {
  const fetchLeaguesRepository = {
    fetch: jest.fn(),
  };

  const fetchLeagues = new FetchLeagues(fetchLeaguesRepository);

  return {
    fetchLeagues,
    fetchLeaguesRepository,
  };
};

describe("FetchLeaguesUseCase", () => {
  it("should be defined", () => {
    expect(FetchLeagues).toBeDefined();
  });

  it("Should call repository fetchLeaguesRepository correctly", async () => {
    const { fetchLeagues, fetchLeaguesRepository } = makeFetchLeagues();

    fetchLeaguesRepository.fetch.mockResolvedValueOnce(mockLeagues);

    await fetchLeagues.execute();

    expect(fetchLeaguesRepository.fetch).toHaveBeenCalled();
  });

  it("Should return leagues", async () => {
    const { fetchLeagues, fetchLeaguesRepository } = makeFetchLeagues();

    fetchLeaguesRepository.fetch.mockResolvedValueOnce(mockLeagues);

    const leagues = await fetchLeagues.execute();

    expect(leagues).toEqual(mockLeagues);
  });

  it("Should return leagues in alphabetical order", async () => {
    const { fetchLeagues, fetchLeaguesRepository } = makeFetchLeagues();

    fetchLeaguesRepository.fetch.mockResolvedValueOnce([
      {
        id: 2,
        name: "B League 2",
        logo: "https://example.com/mock-league-2-logo.png",
        countryName: "Mock Country 2",
        countryFlag: "https://example.com/mock-country-2-flag.png",
      },
      {
        id: 1,
        name: "A League 1",
        logo: "https://example.com/mock-league-1-logo.png",
        countryName: "Mock Country 1",
        countryFlag: "https://example.com/mock-country-1-flag.png",
      },
    ]);

    const leagues = await fetchLeagues.execute();

    expect(leagues).toEqual(mockLeagues);
  });
});
