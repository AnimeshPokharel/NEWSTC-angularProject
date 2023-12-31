import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TcnewsapiService } from '../service/tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private api:TcnewsapiService){}
  //display headlines data
  topHeadlinesData:any = [];

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    })
  }

}
