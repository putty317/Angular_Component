import { Component, OnInit } from '@angular/core';

@Component({
  //selector:'[app-servers]',
  //selector: '.app-servers',
  selector:'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allownewserver= false;
servercreationstatus = 'No server was created';
servername="";
  constructor() { 
    setTimeout(()=>{
      this.allownewserver = true;
    },2000);
  }

  ngOnInit() {
  }

  oncreateserver(){
    this.servercreationstatus="server was ctreated";

  } 
  OnUpdateServerName(event: Event){
    console.log(event);
    this.servername=(<HTMLInputElement>event.target).value;

  }

}
