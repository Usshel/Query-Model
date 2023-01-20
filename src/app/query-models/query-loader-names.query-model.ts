import { HttpErrorResponse } from "@angular/common/http";

export interface QueryLoaderNamesQueryModel {
  readonly isLoading: boolean;
  readonly names?: string[];
  readonly error?: HttpErrorResponse | Error;
}
