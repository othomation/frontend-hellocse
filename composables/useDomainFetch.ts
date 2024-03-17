import type { AsyncData, UseFetchOptions } from "#app";
import type { ApiRoute } from "~/types/api.types";

/** Utility hook to infer base uri */
export const useDomainFetch = <ExpectedData, TransformOutput = ExpectedData>(
  route: ApiRoute,
  options: UseFetchOptions<ExpectedData, TransformOutput> = {}
) => {
  const {
    public: { API_BASE_URL },
  } = useRuntimeConfig();

  return useFetch(
    `${API_BASE_URL}/api/${route}`,
    // To enhance when needed
    {
      ...options,
    }
  );
};
