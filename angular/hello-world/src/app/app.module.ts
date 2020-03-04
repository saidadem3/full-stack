import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponenet } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CourseService } from "./courses.service";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors.service";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponenet,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CourseService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
