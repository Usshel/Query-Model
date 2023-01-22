import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { UsersAvatarsModel } from 'src/app/models/users-avatars.model';
import { OrgsQueryModel } from 'src/app/query-models/orgs.query-model';
import { OrganizationsService } from '../../services/organizations.service';

@Component({
  selector: 'app-query-multi-nested-accordion-organizations',
  templateUrl: './query-multi-nested-accordion-organizations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryMultiNestedAccordionOrganizationsComponent {
  readonly orgs$: Observable<OrgsQueryModel[]> = 
  combineLatest([
    this._organizationsService.getAllOrganizations(),
    this._organizationsService.getAllUsersWithAvatars()
  ]).pipe(
    switchMap(([orgs, users]) =>            // down there, map every orgs object to being only an id
    this._organizationsService.getAllTeams(orgs.map((org) => org.id))    //passes id of organization to method from service and returns
    .pipe(map((teamMap) => 
          orgs.map((org) => ({
            name:org.name,                                          // creating an object which has a core from organisation - there is 2 variables name: which is getting directly from organisation
            teams: this.mapToTeamQuery(teamMap[org.id], users),     // and second variable is a teams object which is created in method 35.
          }))
        )
      )
    )      
  );

  constructor(private _organizationsService: OrganizationsService) {
  }

  mapToTeamQuery(
    teams: TeamModel[],                               // there are passed teams which are taken from teamMap by using key which is a organisation id
    users: UsersAvatarsModel[]
  ): any {
    const userMap = users.reduce((a,c) => ({...a,[c.id]: c}), {}) as Record<string, UsersAvatarsModel>; // creating hashMap with user.id as a key and with object which has a avatarUrl may have (id,name)

    return teams.map((team) => ({
      name: team.name,
      members: (team.userIds ?? []).map((uId: string) => ({   //Object team has an array of userIds so we map every userId as an object which has an avatarUrl taken from an userMap
        avatarUrl: userMap[uId]?.avatar
      }))

    }))
  }
}
