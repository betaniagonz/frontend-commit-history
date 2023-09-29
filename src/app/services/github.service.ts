import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponseCommit, IApiResponseRepo, IApiResponseRepos, IApiResponseUser } from './models/github-api-models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private _http = inject(HttpClient);

  getUserInfo(): Observable<IApiResponseUser>{
    const url = environment.api+'/getUserInfo';
    return this._http.get<IApiResponseUser>(url);
  }

  getUserRepos(): Observable<IApiResponseRepos>{
    const url = environment.api+'/getUserRepos';
    return this._http.get<IApiResponseRepos>(url);
  }

  getRepo(reponame: string): Observable<IApiResponseRepo>{
    const url = environment.api+'/getRepo/'+reponame;
    return this._http.get<IApiResponseRepo>(url);
  }

  getRepoCommits(reponame: string): Observable<IApiResponseCommit>{
    const url = environment.api+'/getRepoCommits/'+reponame;
    return this._http.get<IApiResponseCommit>(url);
  }
}
