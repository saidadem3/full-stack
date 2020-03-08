import { Component, OnInit } from "@angular/core";
import { faFilm, faFire } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  filmIcon = faFilm;
  fire = faFire;
  constructor() {}

  ngOnInit() {}
}
