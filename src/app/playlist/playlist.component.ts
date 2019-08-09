import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Video } from '../video';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{
  @Output() notify: EventEmitter<Video> = new EventEmitter<Video>();
  constructor (private http: HttpClient) { }
  videoList: Video[]; 

  ngOnInit () {
    this.http.get('http://localhost:3004/youtube').subscribe(res => this.videoList = res as Video[]);
  }

  playVideo(selectedVideo:Video){
    console.log('Clicked!!!!'+selectedVideo.id);
    this.notify.emit(selectedVideo);    
  }


}
