import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<any> {
    return this.http
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=UaqrnSCENMbrDjAgEIYY7seqBUNxLlCuKvoei3ic'
      )
      .pipe(
        tap((response) => console.table(response)),
        catchError((error) => {
          console.error(error);
          return of(error)
        })
      );
  }
}
