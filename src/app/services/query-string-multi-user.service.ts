import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { RoleModel } from '../models/role.model';
import { DepartmentModel } from '../models/department.model';

@Injectable({ providedIn: 'root' })
export class QueryStringMultiUserService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllUsers(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }

  getAllRoles(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

  getAllDepartments(): Observable<DepartmentModel[]> {
    return this._httpClient.get<DepartmentModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments');
  }

}
