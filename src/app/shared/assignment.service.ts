import { Injectable } from '@angular/core';
import { IAssignment } from '../work-list/assignment';
import { HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, map,  tap } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private _assignmentUrl = 'http://localhost:3000/assignments';

  assignmentsCollection: AngularFirestoreCollection<IAssignment>;

  assignments: Observable<IAssignment[]>;

  allAssignments: IAssignment[];
  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) { 
    this.assignmentsCollection = _afs.collection<IAssignment>("assignments");
  }

  getAssignments(): Observable<IAssignment[]> {
    this.assignments = this.assignmentsCollection.snapshotChanges().pipe(
      map(actions  => actions.map(a => {
        const data = a.payload.doc.data() as IAssignment;
        console.log("getAssignments:data" + JSON.stringify(data));
        const id = a.payload.doc.id;
        console.log("getAssignments:id = " +id);
        return { id, ...data };
      }))
    );
    return this.assignments;
}

addAssignment(assignment: IAssignment): void{
  this.assignmentsCollection.add(assignment);
}

addAllAssignments() {
  this._http.get<IAssignment[]>(this._assignmentUrl).subscribe(
    assignments => {
      this.allAssignments = assignments;
      for (let assignment of this.allAssignments){
        console.log("Adding: " + assignment.assignmentTitle);
        this.assignmentsCollection.add(assignment);
      }
    },
    error => (this.errorMessage = <any>error)
  );    
}

deleteAssignment(id:string): void {
  this.assignmentsCollection.doc(id).delete()
  .catch(error => {console.log("deleteAssignment error: " +error); })
  .then(() => console.log('deleteAssignment: id = ' +id));
}

private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
}
}
