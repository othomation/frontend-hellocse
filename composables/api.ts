import type { StarEntity } from "~/types/entities.types";
import { useDomainFetch } from "./useDomainFetch";
import type { ApiPaginatedResponse } from "~/types/api.types";

export const useStars = () => {
  return useDomainFetch<ApiPaginatedResponse<StarEntity>>("star");
};
