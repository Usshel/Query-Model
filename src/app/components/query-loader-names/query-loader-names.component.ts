import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';
import { QueryLoaderNamesQueryModel } from 'src/app/query-models/query-loader-names.query-model';
import { QueryLoaderNamesService } from '../../services/query-loader-names.service';

@Component({
  selector: 'app-query-loader-names',
  templateUrl: './query-loader-names.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryLoaderNamesComponent {
  readonly listNames$: Observable<string[]> = this._queryLoaderNamesService.getAllNamesRandom();

  private _refreshSubject: Subject<void> = new Subject<void>();

  public refresh$: Observable<QueryLoaderNamesQueryModel> = this._refreshSubject
  .asObservable().pipe(
    switchMap(() => this._queryLoaderNamesService.getAllNamesRandom().pipe( 
      map((names) => 
        (
          {
            isLoading: false,
            names: names
          }
        )
      ),
      startWith({isLoading: true}),
      catchError((error) =>of({ isLoading: false, error: error}))
    ))
  );

  constructor(private _queryLoaderNamesService: QueryLoaderNamesService) {
  }

  refreshData(): void {
    this._refreshSubject.next(void 0);
  }


}
