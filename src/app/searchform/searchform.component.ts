import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})

export class SearchformComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  selectedCity: string="";

  cities: City[] = [
    {value: '43.653225,-79.383186', viewValue: 'Toronto'},
    {value: '51.048615,-114.070847', viewValue: 'Calgary'},
    {value: '45.501690,-73.567253', viewValue: 'Montreal'},
    {value: '42.360081,-71.058884', viewValue: 'Boston'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  updateCity(cityloc:string) {

    if(cityloc){
      this.messageEvent.emit(cityloc)
    }
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
