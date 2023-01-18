import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTagsModel } from '../models/job-tags.model';
import { JobPostsModel } from '../models/job-posts.model';

@Injectable({ providedIn: 'root' })
export class QueryArraySingleJobService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllJobTags(): Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }

  getAlljobPosts(): Observable<JobPostsModel[]> {
    return this._httpClient.get<JobPostsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }
}
