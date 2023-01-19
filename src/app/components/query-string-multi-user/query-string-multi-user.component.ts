import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RoleModel } from '../../models/role.model';
import { DepartmentModel } from '../../models/department.model';
import { QueryStringMultiUserService } from '../../services/query-string-multi-user.service';
import { UserDepartmentAndRoleQueryModel } from 'src/app/query-models/user-department-and-role.query-model';

@Component({
  selector: 'app-query-string-multi-user',
  templateUrl: './query-string-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringMultiUserComponent {
  readonly users$: Observable<UserModel[]> = this._queryStringMultiUserService.getAllUsers();
  readonly roles$: Observable<RoleModel[]> = this._queryStringMultiUserService.getAllRoles();
  readonly departments$: Observable<DepartmentModel[]> = this._queryStringMultiUserService.getAllDepartments();

  readonly usersRoleDepartment$: Observable<UserDepartmentAndRoleQueryModel[]> = combineLatest([
    this.users$,
    this.roles$,
    this.departments$
  ]).pipe(
    map(([users, roles, departments]) =>
     this._mapToUserWithJobsAndDepartments(users, roles, departments))
  )


  constructor(private _queryStringMultiUserService: QueryStringMultiUserService) {
  }

 private _mapToUserWithJobsAndDepartments(
  users: UserModel[],
  roles: RoleModel[],
  departments: DepartmentModel[]): UserDepartmentAndRoleQueryModel[]{
    const rolesTagMap = roles.reduce((a,c) => {
      return {...a,[c.id]: c}
    },{}) as Record<string, RoleModel>

    const departmentMap = departments.reduce((a,c) => {
      return {...a,[c.id]: c}
    },{}) as Record<string, DepartmentModel>

    return users.map((user) => ({
      email: user.email,
      role: rolesTagMap[user.roleId] ? rolesTagMap[user.roleId].role : '',
      department: departmentMap[user.departmentId] ? departmentMap[user.departmentId].name : ''
    }))
    }

}
