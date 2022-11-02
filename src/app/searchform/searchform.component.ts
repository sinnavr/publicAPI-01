import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent implements OnInit {

  city = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
  updateCity() {
    this.city.setValue('Toronto');
  }

  getUserLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          const long = position.coords.longitude;
          const lat = position.coords.latitude;
          console.log(long, lat);
        });
    } else {
       console.log("No support for geolocation")
    }

  }
}
