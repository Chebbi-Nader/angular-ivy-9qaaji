import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/dist/types';

@Injectable()
export class AlbumService {
  private _apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private _httpClient: HttpClient) {}

  getAllAlbum(): Observable<Object> {
    return this._httpClient.get(this._apiUrl);
  }
}
