import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  updateCity(cityName:string) {
    this.messageEvent.emit(cityName)
  }

  getUserLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const long = position.coords.longitude;
          const lat = position.coords.latitude;
          console.log(lat,long);
          this.messageEvent.emit(lat+","+long)
        });
    } else {
       console.log("No support for geolocation")
    }

  }
}
