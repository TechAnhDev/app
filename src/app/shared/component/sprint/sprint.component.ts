import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprint',
  standalone: false,
  templateUrl: './sprint.component.html',
  styleUrl: './sprint.component.scss',
})
export class SprintComponent {
  @Input() isLoading: boolean = false;
}
