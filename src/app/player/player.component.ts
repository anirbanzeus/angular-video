import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {
  constructor() { }
  @Input() selectedVideo:Video;

  ngOnChanges(): void {
    console.log("123");  
    
  } 

  onVideoSelect(videoData:Video) {
    this.selectedVideo = videoData
  }

  ngOnInit() {
  }

}
