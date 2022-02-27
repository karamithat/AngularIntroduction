import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  today : Date = new Date()
  selectedCity:string = '';
  changeCity(event:any){
    this.selectedCity = event.target.value;
  }

  names = [
    {
      name: 'Harun',
      surname: 'Durak'
    },
    {
      name: 'Burhan',
      surname: 'Kara'
    },
    {
      name: 'Erhan',
      surname: 'Mert'
    },
    {
      name: 'Aysegul',
      surname: 'Avci'
    },
    {
      name: 'Mithat',
      surname: 'Kara'
    }, {
      name: 'Ecem',
      surname: 'Mete'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
