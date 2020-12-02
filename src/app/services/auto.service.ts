import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Auto } from '../models/auto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  selectedAuto: Auto;
  autos:Auto[];
    readonly URL_API='https://montenegrobackend.herokuapp.com/api/autos';

  constructor(private http: HttpClient) {
    this.selectedAuto=new Auto();
   }

  getAutos(){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.get<Auto[]>(this.URL_API, {headers}). pipe(map(data => {
      return Object.values(data);
    }));

  }

  postAuto(auto: Auto){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.post(this.URL_API, auto,{headers});
  }

  putAuto(Auto: Auto){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.put(this.URL_API + `/${Auto._id}`, Auto,{headers})
  }

  deleteAuto(_id: string){
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE2MjFmODk0ZTZkZjM1YzRkZTJlNDIiLCJpYXQiOjE2MDY4MzY5NjUsImV4cCI6MTYwNjg4MDE2NX0.D1Wh-44qaWpNea2hUQdkEMbUACwe-l7CoExP50B7eP4'
    });
    return this.http.delete(this.URL_API + `/${_id}`,{headers});
  }

}
