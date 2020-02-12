import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { ApiResponse } from '../apiresponse';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Observable<Client>;
  //clientss:any = []; 

  constructor(private clientService: ClientService,private router: Router) {
  
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.clientService.getAllClient()
      .subscribe(
        data => {
          console.log(data);
          this.clients = data.response;
        },
        error => console.log(error));
  }

  deleteClient(id: number) {
    console.log("delete func " + id);
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
