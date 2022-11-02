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
}
