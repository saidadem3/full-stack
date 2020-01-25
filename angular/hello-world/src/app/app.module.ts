import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponenet } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CourseService } from "./courses.service";

@NgModule({
  declarations: [AppComponent, CoursesComponenet, CourseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
