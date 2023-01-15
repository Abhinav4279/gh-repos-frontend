import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() username: string = '';
  not_found = true;
  user = {};

  constructor(private repoService: UserService) {}

  ngOnInit(): void {
    this.repoService.getUser().subscribe((user) => (this.user = user));
  }
}
