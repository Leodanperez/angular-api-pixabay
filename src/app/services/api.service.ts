import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Photo, SearchForm} from "../photo.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  getPhotos(
    formData: any,
    page?: number,
    perPage?: number,
  ): Observable<Photo> {
    return this.http.get<Photo>(`${this.apiUrl}&q=${formData}&page=${page}&per_page=${perPage}`)
  }

  getAllPhotos(imageType?: string, perPage?: number, page?: number) {
    return this.http.get<Photo>(`${this.apiUrl}&image_type=${imageType}&page=${page}&per_page=${perPage}`)
  }

  getImageCategory(category?: string, page?: number, perPage?: number) {
    return this.http.get<Photo>(`${this.apiUrl}&category=${category}&page=${page}&per_page=${perPage}`)
  }
}
