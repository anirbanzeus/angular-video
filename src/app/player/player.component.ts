import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {
  constructor() { }
  //@Input() 
  selectedVideo:string;

  ngOnChanges(): void {
    console.log("123");  
    
  } 

  ngOnInit() {
  }

  onNotify(video:Video){
    console.log("Reached event");
    this.selectedVideo = video.url;
    console.log(video.url);
  }

}
