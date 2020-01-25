import { Component } from "@angular/core";
import { CourseService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let courses of courses">
        {{ courses }}
      </li>
    </ul>
  `
})
export class CoursesComponenet {
  title = "List of courses";
  courses;

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }
}
