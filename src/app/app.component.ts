import { Component, OnInit, OnDestroy } from '@angular/core';
import { animation } from '@angular/animations'
import { GameService } from './game.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = "Games for platform"
  public Data: any;
  public Sub: any;
  public ListOfGames: any;
  public searchText: string;
  constructor(private _service: GameService) {

  }
  //This is called when component is initilised
  ngOnInit() {
    this.Sub = this._service.GetGameData().subscribe(success => {
      this.ListOfGames = success;
      this.ListOfGames = this.ListOfGames.filter(f => { return f.title; })
    }, error => {
      console.log(error);
    })
  }
  //this is called when component life cycle is ended:can be used to avoid memory leakage
  ngOnDestroy() {
    //release the object from memory
    this.Sub.unsubscribe();
  }
  //Sort by
  public IsAsc=false;
  Sort() {
    this.IsAsc=!this.IsAsc;
    if(this.IsAsc)
    this.ListOfGames.sort(function (a, b) { return a.score - b.score;});
    else{
      this.ListOfGames.sort(function (a, b) { return  b.score-a.score;});
    }

  }
}
