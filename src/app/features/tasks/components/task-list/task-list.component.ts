import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task> = [
    {
      id: 1,
      description: 'Create a base project',
      completed: false
    },
    {
      id: 2,
      description: 'Read articles new articles',
      completed: true
    },
    {
      id: 3,
      description: 'Meeting with new customers',
      completed: true
    },
    {
      id: 4,
      description: 'Alignment meeting on the 07-18th at 14 pm',
      completed: true
    },
    {
      id: 5,
      description: 'Request new team member',
      completed: false
    },
    {
      id: 6,
      description: 'Read articles new articles',
      completed: false
    },
    {
      id: 7,
      description: 'Marketing meeting',
      completed: false
    },
    {
      id: 8,
      description: 'Read emails from international customers',
      completed: false
    },
    {
      id: 9,
      description: 'Change base project components',
      completed: false
    },
    {
      id: 10,
      description: 'Innovation meeting',
      completed: false
    },
    {
      id: 11,
      description: 'Read emails from national customers',
      completed: false
    },
    {
      id: 12,
      description: 'Call the sustainability customer',
      completed: false
    },
    {
      id: 13,
      description: 'Moving forward with the ESG project',
      completed: false
    },
    {
      id: 14,
      description: 'Make daily report',
      completed: false
    },
    {
      id: 15,
      description: 'Monthly report',
      completed: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
