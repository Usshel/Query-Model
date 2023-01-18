import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RoleModel } from '../../models/role.model';
import { QueryStringSingleUserService } from '../../services/query-string-single-user.service';
import { UserQueryModel } from 'src/app/query-models/user.query-model';

@Component({
  selector: 'app-query-string-single-user',
  styleUrls: ['./query-string-single-user.component.scss'],
  templateUrl: './query-string-single-user.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringSingleUserComponent {
  readonly listUsers$: Observable<UserModel[]> = this._queryStringSingleUserService.getAllUser();
  readonly listRoles$: Observable<RoleModel[]> = this._queryStringSingleUserService.getAllRoles();


  readonly usersQueryModel$: Observable<UserQueryModel[]> = combineLatest([
    this.listUsers$,
    this.listRoles$
  ]).pipe(
    map(([users, roles]) => {
        return users.map((user) => 
        { 
        const roleMap = roles.reduce((a,c) => {
          return {...a,[c.id]: c}
        } ,{}) as Record<string, RoleModel>;

        return {
          email: user.email,
          role: roleMap[user.roleId] ? roleMap[user.roleId].role : ''
        };
      });
    })
  );

  constructor(private _queryStringSingleUserService: QueryStringSingleUserService) {
  }
}
