import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cours } from 'src/app/models/cours/cours.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  constructor(private http: HttpClient) { }

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(environment.apiUrl + '/cours');
  }
}