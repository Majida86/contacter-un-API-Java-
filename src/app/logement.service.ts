import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { logement } from './models/logement.model';
@Injectable({
  providedIn: 'root'
})
export class LogementService {

 private  apiUrl =  'http://193.46.198.245:4532/logements';
  constructor(private http: HttpClient) { }

  getData() : Observable<logement[]> {
    const url = '$(this.apiUrl)';
    return this.http.get<logement[]>(this.apiUrl);
  }
}
