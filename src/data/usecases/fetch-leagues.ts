import { FetchLeaguesUseCase } from "@/domain/usecases/fetch-leagues-usecase";
import { FetchLeaguesRepository } from "@/data/repository/fetch-leagues-repository";
import { League } from "@/domain/entities/league";

export class FetchLeagues implements FetchLeaguesUseCase {
  constructor(
    private readonly fetchLeaguesRepository: FetchLeaguesRepository
  ) {}

  async execute(): Promise<League[]> {
    const leagues = await this.fetchLeaguesRepository.fetch();

    return leagues.sort((a, b) => a.name.localeCompare(b.name));
  }
}
