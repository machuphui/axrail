import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client : Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService,private router: Router) { }

  ngOnInit(): void {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    console.log("create " + JSON.stringify(this.client));
    this.clientService.createClient(this.client)
      .subscribe(data => 
        console.log(JSON.stringify(data)), 
        error => console.log(error));
    this.client = new Client();
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }

}
