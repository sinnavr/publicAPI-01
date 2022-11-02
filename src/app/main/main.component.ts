import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [AppService]
})
export class MainComponent implements OnInit {

  service:AppService
  listofPlaces : any = []
  filteredlistofPlaces : any = []
  filterCityName: string =''
  selectedChargerloc:any

  constructor(appService:AppService) {
    this.service = appService;
   }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
      this.service.getlistofchargerNearby().subscribe(data => {
        this.listofPlaces = data;
    });

  }

  showOnDetails(place:any){
    this.selectedChargerloc = place;
  }

  filterCityItem(cityName:string){
    this.filterCityName = cityName
    if(cityName.includes(",")){
      const latlong = cityName.split(",");
      this.listofPlaces= []
      this.service.getlistofchargerNearbyLatLong(latlong[0], latlong[1]).subscribe(data => {
        this.listofPlaces = data;
        });

      console.log("text received "+ cityName)
    }
    // const filterList = this.listofPlaces.filter((item: { AddressInfo: { Town: string; }; })=>{
    //     return item.AddressInfo.Town!= null
    // });
    // console.log("unfiltered list")
    // console.log( this.listofPlaces)
    // console.log("filtered list")
    // console.log(filterList)
    // this.filteredlistofPlaces = filterList;
  }

}
