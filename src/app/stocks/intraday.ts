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
  constructor(private stockIntradayService: stockIntradayService) { }
  loadStockData(){
    console.log("---")
    this.stockIntradayService.getStockdata().subscribe(
      (response)=>{
        console.log(this.intradayData)
        response=response["Time Series (5min)"];
        Object.keys(response).forEach(key =>  this.intradayData.push({
          date: key,
          info: response[key]
       }));       
      console.log(this.intradayData)
      })
  }

}
