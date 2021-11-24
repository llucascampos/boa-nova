import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.display = "block";
   
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   
  }

  voltarAoTopo(){
    window.scrollTo(0, 0);
  }


}
