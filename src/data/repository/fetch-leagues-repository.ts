import { League } from "@/domain/entities/league";

export interface FetchLeaguesRepository {
  fetch(): Promise<League[]>;
}
