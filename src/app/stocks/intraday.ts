import { Component, VERSION } from '@angular/core';
import {stockIntradayService} from '../services/stockintraday.service'

@Component({
  selector: 'stocks-intraday',
  templateUrl: './intraday.html'
  // styleUrls: [ './app.component.css' ]
})
export class stocksIntradayComponent  {
  name = 'stocksIntradayComponent';
  intradayData = Array();
  recentFive = Array();
  constructor(private stockIntradayService: stockIntradayService) { }
  loadStockData(){
    console.log("---")
    this.stockIntradayService.getStockdata().subscribe(
      (response)=>{
        console.log(this.intradayData)
        response=response["Time Series (5min)"];
        Object.keys(response).forEach(key =>  this.intradayData.push({
          date: key,
          openPrice: response[key]['1. open'],
          closePrice: response[key]['4. close'],
          volume: response[key]['5. volume']
       }));       
      console.log(this.intradayData)
      // this.intradayData=this.intradayData.slice(0,6);
      })
  }

  columnDefs = [{ field: "date" }, { field: "openPrice" }, { field: "closePrice" }, { field: "volume"}];

}
