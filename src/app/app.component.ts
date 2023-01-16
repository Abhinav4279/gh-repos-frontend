import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './User';
import {Repo} from './Repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gh-repos-frontend';
  username: string = '';
  not_found = true;
  user: User = {};
  loading = false;
  subscription1: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();
  repos: Repo[] = []

  constructor(private repoService: UserService) {}

  onSearch() {
    this.loading = true;
    this.not_found = false;
    this.subscription1 = this.repoService.getUser(this.username)
                            .subscribe((user: User) => {this.user = {...user}; this.loading = false}, 
                            err => {
                              this.not_found = true;
                              this.loading = false;
                              console.log(err);
                            });

    this.subscription2 = this.repoService.getRepos(this.username)
                            .subscribe((repos: Repo[]) => {this.repos = [...repos];}, 
                            err => {
                              console.log(err);
                            });
}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
