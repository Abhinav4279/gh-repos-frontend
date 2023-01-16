import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './User';

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
  subscription: Subscription = new Subscription();
  // TODO: repos

  constructor(private repoService: UserService) {}

  onSearch() {
    this.loading = true;
    this.not_found = false;
    this.subscription = this.repoService.getUser(this.username)
                            .subscribe((user: User) => {this.user = {...user}; this.loading = false}, 
                            err => {
                              this.not_found = true;
                              this.loading = false;
                              console.log(err);
                            });
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
