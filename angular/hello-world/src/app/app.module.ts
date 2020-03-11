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
import { FavoriteComponent } from "./favorite/favorite.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilm, faFire } from "@fortawesome/free-solid-svg-icons";
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponenet,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    PanelComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, FontAwesomeModule],
  providers: [CourseService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFilm, faFire);
  }
}
