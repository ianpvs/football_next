import { League } from "@/domain/entities/league";
import { UseCase } from "@/domain/interfaces/usecase";

export interface FetchLeaguesUseCase extends UseCase {
  execute(): Promise<League[]>;
}
