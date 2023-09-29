import { Component, OnInit, inject } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { IApiCommit, IApiFullRepo, IApiResponseCommit, IApiResponseRepos, IApiResponseUser } from 'src/app/services/models/github-api-models';
import { HttpErrorResponse } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { DatePipe, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-repo-information',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, DatePipe],
  templateUrl: './repo-information.component.html',
  styleUrls: ['./repo-information.component.scss']
})
export class RepoInformationComponent implements OnInit{
  private _githubService = inject(GithubService);
  loading = true;
  loadingRepo = true;
  repos!: IApiFullRepo[];
  commits!: IApiCommit[];

  ngOnInit(): void {
    this.getUserRepos();
  }

  getUserRepos(){
    this._githubService.getUserRepos().subscribe({
      next: (resp: IApiResponseRepos) => {
        this.repos = resp;
        console.log(this.repos)
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  getRepoCommits(reponame: string){
    this.loadingRepo = true;
    this._githubService.getRepoCommits(reponame).subscribe({
      next: (resp: IApiResponseCommit) => {
        this.commits = resp;
        console.log(this.commits)
        this.loadingRepo = false;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }
}
