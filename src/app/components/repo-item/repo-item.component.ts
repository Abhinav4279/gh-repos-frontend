import { Component, Input } from '@angular/core';
import { Repo } from '../../Repo';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent {
  @Input() repo: Repo = {};
}
