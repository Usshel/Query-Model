import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganizationModel } from '../models/organization.model';
import { TeamModel } from '../models/team.model';
import { UsersAvatarsModel } from '../models/users-avatars.model';

@Injectable({ providedIn: 'root' })
export class OrganizationsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllOrganizations(): Observable<OrganizationModel[]> {
    return this._httpClient.get<OrganizationModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/organizations');
  }

  getAllTeams(orgId: string): Observable<TeamModel[]> {
    return this._httpClient.get<TeamModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${orgId}/teams`);
  }

}
