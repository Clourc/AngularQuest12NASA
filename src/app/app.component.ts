import { Component, OnInit } from '@angular/core';
import { NasaService } from './service/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularQuest12';
  constructor(public nasaService: NasaService){}

  imgOfTheDay: any = '';

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((value) => this.imgOfTheDay = value);
  }

}
