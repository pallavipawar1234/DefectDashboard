import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'project-status-page',
  templateUrl: './project-status-page.component.html',
  styleUrls: ['./project-status-page.component.css'],
})
export class ProjectStatusPageComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  wip = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  review = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
