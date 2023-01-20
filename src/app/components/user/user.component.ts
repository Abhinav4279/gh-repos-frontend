import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { User } from '../../User';
import { Repo } from 'src/app/Repo';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnChanges {
  @Input() user: User = {};
  @Input() repos: Repo[] = [];
  twitter_url: string = ''
  page_repos: Repo[] = [];
  repos_count = 0;
  
  constructor() {}

  ngOnInit(): void {}

  onPageChange(pe:PageEvent) {
    let start = pe.pageIndex*9;
    let end = Math.min(start + 9, this.repos_count)
    this.page_repos = [...this.repos.slice(start, end)]
  }

  ngOnChanges(changes: SimpleChanges) : void {
    let change = changes['user']
    if(!change?.firstChange) {
      this.twitter_url = 'https://twitter.com/' + this.user.twitter_username;
    }

    change = changes['repos']
    if(!change?.firstChange) {
      this.repos_count = this.repos.length
      this.page_repos = [...this.repos.slice(0, Math.min(9, this.repos_count))]
    }
  }
}
