import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: number;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
      this.client = new Client();
  
      this.id = this.route.snapshot.params['id'];
      
      this.clientService.getClientById(this.id)
        .subscribe(data => {
          console.log(data)
          this.client = data;
        }, error => console.log(error));
    }
  
    list(){
      this.router.navigate(['clients']);
    }

}
