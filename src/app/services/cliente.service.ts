import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  selectedCliente:Cliente;
  clientes:Cliente[];
  readonly URL_API='https://montenegrobackend.herokuapp.com/api/clientes';

  constructor(private http: HttpClient) {
    this.selectedCliente=new Cliente();
   }

   getClientes(){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.get<Cliente[]>(this.URL_API, {headers}). pipe(map(data => {
      return Object.values(data);
    }));
   }

   postCliente(cliente: Cliente){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.post(this.URL_API, cliente,{headers});
  }

  putCliente(Cliente: Cliente){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.put(this.URL_API + `/${Cliente._id}`, Cliente,{headers})
  }

  deleteCliente(_id: string){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.delete(this.URL_API + `/${_id}`,{headers});
  }
}
