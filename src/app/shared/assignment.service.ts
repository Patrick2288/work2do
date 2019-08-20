import { Injectable } from '@angular/core';
import { IAssignment } from '../work-list/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor() { }

  getAssignments(): IAssignment[] {
    return [
      {
          "assignmentId": 1,
          "assignmentTitle": "Web App",
          "subject": "Web Programming",
          "dueDate": "August 25th, 2019",
          "priority": "High",
          "status": "In Progress",
      },
      {
          "assignmentId": 2,
          "assignmentTitle": "Logo Design",
          "subject": "Creative Design",
          "dueDate": "March 18th, 2020",
          "priority": "Low",
          "status": "Not Started",
      },
  ];
}
}
