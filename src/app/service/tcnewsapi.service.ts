import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private http:HttpClient) { }

  //top headline API URL
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=6b07d4b7c1074201bb511ae504e9e474';

  tcHeadlines():Observable<any>{
    return this.http.get(this.topHeadlinesNews)
    }
}