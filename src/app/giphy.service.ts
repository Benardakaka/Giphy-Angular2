import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  gifRequest(): Observable<any>{
    interface ApiResponse{
      title: string;
      username: string;
      imgPath: string;
    }
    return this.http.get<ApiResponse>(environment.TrendingUrl);
  }

  searchGif(term: string): Observable<any>{
    // https://api.giphy.com/v1/gifs/search?api_key=iXnp72e4U2TNlfyWd2Wj9IHLxBiTKbMM&q=&limit=25&offset=0&rating=g&lang=en
    interface ApiResponse{
      title: string;
      username: string;
      imgPath: string;
    }
    return this.http.get<ApiResponse>(environment.SearchUrl + "&q=" + term);
  }


  }
