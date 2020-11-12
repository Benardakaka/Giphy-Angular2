import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Giphy } from '../giphy';
import { GiphyService } from '../giphy.service';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gif: Giphy;
  gifs: any = [];
  link = environment.SearchUrl;
  http;


  constructor( private giphyService: GiphyService, http: HttpClient) {
    this.http = http;
  }

  performSearch(searchTerm): any {
    this.giphyService.searchGif(searchTerm.value).subscribe((res: Response) => {
      this.gifs = [];
      for (let i = 0; i < res[ 'data' ].length; i++){
        let gifTitle = res['data'][i]['title'];
        let gifUname = res['data'][i]['username'];
        let gifImage = res['data'][i]['images']['original']['url'];
        let  giphy = new Giphy(gifTitle, gifUname, gifImage);
        this.gifs.push(giphy);

      }
    })
    // const apilink = this.link + searchTerm.value;

    // this.http.get(apilink).subscribe((res: Response) => {
    //   for (let i = 0; i < res[ 'data' ].length; i++){
    //     let gifTitle = res['data'][i]['title'];
    //     let gifUname = res['data'][i]['username'];
    //     let gifImage = res['data'][i]['images']['original']['url'];
    //     let  giphy = new Giphy(gifTitle, gifUname, gifImage);
    //     this.gifs.push(giphy);

    //   }
    // });

  }



  ngOnInit(): void {
    this.giphyService.gifRequest()
    .subscribe((res: Response) => {
      for (let i = 0; i < res[ 'data' ].length; i++){
        let gifTitle = res['data'][i]['title'];
        let gifUname = res['data'][i]['username'];
        let gifImage = res['data'][i]['images']['original']['url'];
        let  giphy = new Giphy(gifTitle, gifUname, gifImage);
        this.gifs.push(giphy);
      }
    });
  }

}
