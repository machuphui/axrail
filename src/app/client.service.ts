import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrlAllClient = 'https://senduk-api.herokuapp.com/api/v1/client';
  private baseUrlDeleteClient = 'https://senduk-api.herokuapp.com/api/v1/deleteClient';
  private baseUrlCreateClient = 'https://senduk-api.herokuapp.com/api/v1/createClient';

  private localbaseUrlAllClient = 'http://localhost:8181/api/v1/client/';
  private localbaseUrlDeleteClient = 'http://localhost:8181/api/v1/deleteClient/';
  private localbaseUrlCreateClient = 'http://localhost:8181/api/v1/createClient';


  constructor(private http: HttpClient) { }

  getClientById(id: number): Observable<any> {
    return this.http.get('${this.baseUrl}'+ '/client' +'/${id}');
  }

  createClient(client: Client): Observable<Object> {
    console.log("client service" + JSON.stringify(client));
    console.log("client name" + client.name);
    return this.http.post(this.baseUrlCreateClient+'?name=' + client.name +'&phoneNumber='+ client.phoneNumber,null);
    //return this.http.post(this.localbaseUrlCreateClient+'?name=' + client.name +'&phoneNumber='+ client.phoneNumber,null);
  }

  updateClient(id: number, value:any): Observable<Object> {
    return this.http.post('${this.baseUrl}/${id}', value);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.get(this.baseUrlDeleteClient + id);
    //return this.http.get(this.localbaseUrlDeleteClient + id);
  }

  getAllClient(): Observable<any> {
    return this.http.get(this.baseUrlAllClient);
    //return this.http.get(this.localbaseUrlAllClient);
  }
}
