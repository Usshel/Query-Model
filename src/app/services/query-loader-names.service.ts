import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QueryLoaderNamesService {

    

    getAllNamesRandom(): Observable<string[]> { 
        return of(['Tommy', 'Rany', 'Julek', 'Eehso', 'Steve' ]).pipe(
            delay(2000),
            map((names) => {
                // Math.random() > 0.5 ? names : throw this.emptyNames; That expression throws error for "throw" ('Expression expected')
                // it may be caused by default return for "? : expression"
                if(Math.random() > 0.5){
                    return names
                }
                else
                {
                    throw new Error('Oops something gone wrong')
                }
            })
        )
    }
}
