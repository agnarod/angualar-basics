import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  /*template  : `
  <app-server></app-server>
  
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['testServer', 'TestServer2'];

  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)

  }

  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! name is ' + this.serverName;
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
