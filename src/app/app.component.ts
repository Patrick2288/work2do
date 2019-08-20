import { Component } from '@angular/core';
import { AssignmentService } from './shared/assignment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AssignmentService]
})
export class AppComponent {
  title = 'work2do';
}
