import { Component, OnInit } from '@angular/core';
import { IAssignment } from './assignment';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent {
  
  pageTitle: string = "Work 2 Do";
  _listFilter: string;
  errorMessage: string;
  username: string;

  get listFilter(): string {
      return this._listFilter;
  }

  set listFilter(value: string){
      this._listFilter = value;
      this.filteredAssignments = this.listFilter ? this.performFilter(this.listFilter) : this.assignments;
  }
  
  filteredAssignments: IAssignment[];
  assignments: IAssignment[];

  constructor(private _assignmentService: AssignmentService){
  }

  public ngOnInit(): void{
    this._assignmentService.getAssignments().subscribe(assignments => {
        this.assignments = assignments,                
    this.filteredAssignments = this.assignments;
    },
    error => this.errorMessage = <any>error);
} 

  performFilter(filterBy: string): IAssignment[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.assignments.filter((assignment: IAssignment) =>
  assignment.dueDate.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

deleteAssignment(id:string): void {
  this._assignmentService.deleteAssignment(id);
}
}