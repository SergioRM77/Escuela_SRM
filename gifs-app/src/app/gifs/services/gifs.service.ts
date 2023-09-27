
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

 const GIPHY_API_KEY: string = 'vbkJNWWo81tVoCYawgD0bXWyljflamL9';


@Injectable({providedIn: 'root'})
export class GifsService {

  public giflist: Gif[] = [];

  private _tagHistory: string[] = [];
  private apyKey: string = GIPHY_API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();

  }


  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if(this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(oldtag => oldtag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  // Guardar en Local Storage los datos buscados
  private saveLocalStorage(): void{
    //para guardarlo en el local storage tenemos que pasarlo a json de string
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void{
    if (!localStorage.getItem('history')) return;

    //para cargarlo desde el local storage tenemos que pasarlo a json
    // usamos ! para decirle que no puede ser null
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagHistory.length === 0) return;

    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string): void{
    if(tag.length === 0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apyKey)
    .set('limit', 10)
    .set('q', tag)

    // Esto es una forma
    // const resp = await fetch("https://api.giphy.com/v1/gifs/search?api_key=vbkJNWWo81tVoCYawgD0bXWyljflamL9&q=valorant&limit=10")
    //                   .then(response => response.json())
    //                   .then(data => data)

    // const data = await resp.json();


    // Esto es la forma estadar de Angular, usando HttpClientModule en app.module.ts y HttpClient
    // en el servicio correspondiente
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        // console.log(resp.data);

        this.giflist = resp.data;
        console.log({gifs: this.giflist});
      } )

  }


}
