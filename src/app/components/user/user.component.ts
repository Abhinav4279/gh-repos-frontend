import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
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
  twitter_url: string = ''
  
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) : void {
    this.twitter_url = 'https://twitter.com/' + this.user.twitter_username;
    console.log(this.user)
  }
}
