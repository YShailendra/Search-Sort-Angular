import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {

  constructor(private httpClient:HttpClient) { }
  
  //Get Game data from serve
  GetGameData(){
    return this.httpClient.get(" http://starlord.hackerearth.com/gamesarena");
  }
}
