import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, tap } from 'rxjs';
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

  getAllUsersWithAvatars(): Observable<UsersAvatarsModel[]> {
    return this._httpClient.get<UsersAvatarsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/users-with-avatars');
  }

  getAllTeams(orgIds: string[]): Observable<Record<string,TeamModel[]>> {
    return forkJoin(
        orgIds.map((id) => this._httpClient.get<TeamModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${id}/teams`),
        )
    ).pipe(
        map((orgIdWithTeams: TeamModel[][]) => orgIdWithTeams.reduce((a,c,idx) => ({...a, [orgIds[idx]]: c}), {} as Record <string, TeamModel[]>)
        ), tap(console.log))
  }
  // returns the 2d Array with asd

}
/*23 Maps id of organisation to teams
    orgIds = ['1', '2', '3', '4', '5', '6', '7', '8']
     (1) => this._httpClient.get<TeamModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${1}/teams`) -->

     NEXT
    [{"name":"Shoes","userIds":["1","2","3"],"id":"1","organizationId":"1"},
    {"name":"Music","userIds":["27"],"id":"9","organizationId":"1"}]
    NEXT
    orgIds = [[{"name":"Shoes","userIds":["1","2","3"],"id":"1","organizationId":"1"},
    {"name":"Music","userIds":["27"],"id":"9","organizationId":"1"}], '2', '3', '4', '5', '6', '7', '8']

    forkJoin(returns orgIds where every orgId is a team array)
    
    NEXT
    pipe it and changes name for orgWithTeam
    we reduce "{...a, [orgIds[idx]]: c}" it to the object {1: Array(2), 2: Array(2), 3: Array(2), 4: Array(2), 5: Array(2), 6: Array(2), 7: Array(2), 8: Array(1)}
        so orgIds will be a key to the array with an team arrays which will have a keys indexed (from 0 to amount of arrays - 1).
    
    */