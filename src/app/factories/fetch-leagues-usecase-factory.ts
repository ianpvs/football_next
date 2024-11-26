import { FetchLeagues } from "@/data/usecases/fetch-leagues";
import { UseCaseFactory } from "@/domain/interfaces/usecase-factory";
import { FetchLeaguesUseCase } from "@/domain/usecases/fetch-leagues-usecase";
import { HttpFetchLeaguesRepository } from "@/infrastructure/repository/http-fetch-leagues-repository";

export class FetchLeaguesUseCaseFactory implements UseCaseFactory {
  make(): FetchLeaguesUseCase {
    const fetchLeaguesRepository = new HttpFetchLeaguesRepository();
    return new FetchLeagues(fetchLeaguesRepository);
  }
}
