import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';
import { Router } from '@angular/router';
import { IAssignment } from '../work-list/assignment';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
    assignmentId: number;
    assignmentTitle: string;
    subject: string;
    dueDate: string;
    priority: string;
    status: string;
    title = 'Work 2 Do';

  listFilter: string;
  constructor(private _assignmentService: AssignmentService, private router: Router) { }

  ngOnInit() {
  }

  addAssignment(): void {
    let assignment:IAssignment = {
    assignmentId: this.assignmentId,
    assignmentTitle: this.assignmentTitle,
    subject: this.subject,
    dueDate: this.dueDate,
    priority: this.priority,
    status: this.status,
    };
    this._assignmentService.addAssignment(assignment);

    this.router.navigate(['/work-list']);
  }
}
