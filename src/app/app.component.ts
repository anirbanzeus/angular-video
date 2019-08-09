import { Component } from '@angular/core';
import { Video } from './video';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular video-player';
  //constructor (private http: HttpClient) { }
  //videoList: Video[];


 /*constructor(private http: HttpClient) { }
  getVideoData() {
  this.http.get('http://localhost:3004/youtube').subscribe(res => this.videoList = res as Video[]);
  }*/
  ngOnInit () {
   // this.http.get('http://localhost:3004/youtube').subscribe(res => this.videoList = res as Video[]);
  }

}
