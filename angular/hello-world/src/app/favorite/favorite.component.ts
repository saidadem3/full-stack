import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { faFilm, faFire } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  @Input("is-fave") isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
