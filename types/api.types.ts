import type { Nullable } from "./utils.types";

export type ApiRoute = "star";

export type ApiPaginatedResponse<Entity> = {
  current_page: number;
  data: Entity[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: Nullable<string>;
    label: string;
    active: boolean;
  }[];
  next_page_url: Nullable<string>;
  path: string;
  /** 10 should be the default per page in the API */
  per_page: 10 | number;
  prev_page_url: Nullable<string>;
  to: number;
  /** Total of entities (not fetched, but db count) */
  total: number;
};
