import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../User';
import { Repo } from 'src/app/Repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user: User = {};
  @Input() repos: Repo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
