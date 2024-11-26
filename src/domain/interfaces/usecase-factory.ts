import { UseCase } from "@/domain/interfaces/usecase";

export interface UseCaseFactory {
  make(): UseCase;
}
