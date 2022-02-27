import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = "Başlık";
  content:string = "İçerik";

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){
    this.content = "Değişen içerik"
    alert(this.title)
  }

  changeTitle(event:any){
    this.title = event.target.value;
  }

}
