import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn:  'root'
  })
export class stockIntradayService {
  private url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
  constructor(private http: HttpClient) { }
  getStockdata(){
    return this.http.get(this.url);
  }
}