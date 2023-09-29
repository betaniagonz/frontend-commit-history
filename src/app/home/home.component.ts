import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';
import { IApiResponseUser, IApiUser } from 'src/app/services/models/github-api-models';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private _githubService = inject(GithubService);
  loading = true;
  user!: IApiUser;

  ngOnInit(): void {
    this.getUserInfo();

  }

  getUserInfo(){
    this._githubService.getUserInfo().subscribe({
      next: (resp: IApiResponseUser) => {
        this.user = resp;
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }
}
