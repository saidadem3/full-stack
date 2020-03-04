import { Component } from "@angular/core";
import { CourseService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class CoursesComponenet {
  email = "me@example.com";
  onKeyUp() {
    console.log(this.email);
  }
}
