import { Component, OnInit } from '@angular/core';
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
  // TODO: repos

  constructor(private repoService: UserService) {}

  onSearch() {
    console.log(this.user);
    this.repoService.getUser(this.username).subscribe((user: User) => (this.user = {...user}));
  }
}
