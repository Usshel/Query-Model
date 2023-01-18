import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { JobsQueryModel } from 'src/app/query-models/jobs.query-model';
import { JobPostsModel } from '../../models/job-posts.model';
import { JobTagsModel } from '../../models/job-tags.model';
import { QueryArraySingleJobService } from '../../services/query-array-single-job.service';

@Component({
  selector: 'app-query-array-single-job',
  templateUrl: './query-array-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryArraySingleJobComponent {
  readonly listJobs$: Observable<JobPostsModel[]> = this._queryArraySingleJobService.getAlljobPosts();
  readonly listJobsTags$: Observable<JobTagsModel[]> = this._queryArraySingleJobService.getAllJobTags();

  readonly JobsOnQueryModel$: Observable<JobsQueryModel[]> = combineLatest([
    this.listJobs$,
    this.listJobsTags$
  ]).pipe(
    map(([jobs, jobsTags]) => this._mapToJobWithTagsQuery(jobs, jobsTags)
    ))
  


  


  constructor(private _queryArraySingleJobService: QueryArraySingleJobService) {
  }

  private _mapToJobWithTagsQuery(jobs: JobPostsModel[], jobsTags: JobTagsModel[]): JobsQueryModel[] {
    const jobsTagMap = jobsTags.reduce((a,c) => {
        return {...a, [c.id]: c}
      },{}) as Record<string, JobTagsModel>;

      return jobs.map((job) => ({title: job.title, jobTags: job.jobTagIds.map((jId) => jobsTagMap[jId].name)}))

  }
}

 //---------------------------------------------------First-------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
//$          DESCRIPTION            $//
/* In example below everything happens in a variable.
 like:
  1.mapping jobs[], 
  2.creating a Map of one JobTag object with key which is own property - id.  Problem: there would be created a 'x' amount of Map when x is a amount of jobTag objects in JobTags[] 
  3.returning a object which fits to the QueryModel
  So now there is new object which is created using job-posts Model with variables title and jobTags*/


//$          CODE            $//
// readonly JobsOnQueryModel$: Observable<JobsQueryModel[]> = combineLatest([
//   this.listJobs$,
//   this.listJobsTags$
// ]).pipe(
//   map(([jobs, jobsTags]) => jobs.map((job) => 
//   {
//     const jobsTagMap = jobsTags.reduce((a,c) => {
//       return {...a, [c.id]: c}
//     },{}) as Record<string, JobTagsModel>;

//     return {
//       title: job.title,
//       jobTags: job.jobTagIds.map((jId) => jobsTagMap[jId].name )

//     }

//   }))
// )



 //---------------------------------------------------SECOND-----------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
//$          DESCRIPTION            $//

/* In example below only mapping of jobs[] happens in variable it passes one job object to the Method which accepts job and jobsTags[].
 in method happens things like:
  1.Creating a Map of all JobsTags with key which is own property - id.  there is no problem like in first code example becuase there is one  Map created  with all jobTag objects from jobTags[]
  2.Returning a object which fits to the QueryModel 
  So now there is new object which is created using job-posts Model with variables title and jobTags*/


//$          CODE            $//
// readonly JobsOnQueryModel$: Observable<JobsQueryModel[]> = combineLatest([
//   this.listJobs$,
//   this.listJobsTags$
// ]).pipe(
//   map(([jobs, jobsTags]) => jobs.map((job) => this._mapToJobWithTagsQuery(job, jobsTags)
//   ))
// )





// constructor(private _queryArraySingleJobService: QueryArraySingleJobService) {
// }

// private _mapToJobWithTagsQuery(job: JobPostsModel, jobsTags: JobTagsModel[]): JobsQueryModel {
//   const jobsTagMap = jobsTags.reduce((a,c) => {
//       return {...a, [c.id]: c}
//     },{}) as Record<string, JobTagsModel>;

//     return {
//       title: job.title,
//       jobTags: job.jobTagIds.map((jId) => jobsTagMap[jId].name )

//     }

// }