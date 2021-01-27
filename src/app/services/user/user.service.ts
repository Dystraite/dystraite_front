import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tips } from 'src/app/models/tips/tips';
import { User } from 'src/app/models/user/user.model';
import { environment } from 'src/environments/environment';
import { ContextService } from '../context/context.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_SERVER = environment.apiUrl + "/users/";

  constructor(private httpService: HttpClient, private context: ContextService) { }

  getAllUsers(): Observable<User[]> {
    return this.httpService.get(this.REST_API_SERVER).pipe(
      map((res: User[]) => res));
  }

  createUser(user: User): Observable<User> {
    return this.httpService.post<User>(this.REST_API_SERVER, user);
  }

  updateUser(id: number, value: User) {
    return this.httpService.put(this.REST_API_SERVER + id, value);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpService.delete<User>(this.REST_API_SERVER + id);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.httpService.get(this.REST_API_SERVER + "?email=" + email).pipe(
      map((res: User) => res));
  }
  like(tip: Tips): Observable<Tips> {
    return null;
    //return this.httpService.post<Tips>(this.REST_API_SERVER, tip);
  }


  // Need backup implementation

  /*
  getUserByLastname(lastname: string): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?lastname=" + lastname).pipe(
          map((res: User) => res));
  }
  
  getUserByFirstname(firstname: string): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?firstname=" + firstname).pipe(
          map((res: User) => res));
  }
  
  getUserByBirthdate(birthdate: string): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?birthdate=" + birthdate).pipe(
          map((res: User) => res));
  }
  
  getUserByLatitude(latitude: number): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?latitude=" + latitude).pipe(
          map((res: User) => res));
  }
  
  getUserByLongitude(longitude: number): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?longitude=" + longitude).pipe(
          map((res: User) => res));
  }
  
  getUserByCity(city: string): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?city=" + city).pipe(
          map((res: User) => res));
  }
  
  getUserByZipcode(zipcode: number): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?zipcode=" + zipcode).pipe(
          map((res: User) => res));
  }
  
  getUserByPassword(password: string): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?password=" + password).pipe(
          map((res: User) => res));
  }
  
  getUserByRole(role: string): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?role=" + role).pipe(
          map((res: User) => res));
  }
  
  getUserByPhoto(photo: any): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?photo=" + photo).pipe(
          map((res: User) => res));
  }
  
  getUserBySpeechtherapist(speechtherapist: any): Observable<User> {
      return this.httpService.get(this.REST_API_SERVER + "?speechtherapist=" + speechtherapist).pipe(
          map((res: User) => res));
  }*/
}
