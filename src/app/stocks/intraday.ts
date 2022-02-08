import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import {stockIntradayService} from '../services/stockintraday.service'

@Component({
  selector: 'stocks-intraday',
  templateUrl: './intraday.html'
  // styleUrls: [ './app.component.css' ]
})
export class stocksIntradayComponent  {
  name = 'stocksIntradayComponent';
intradayData: any;
  // intraday: Observable<any[]>;
  // intradayData= Array();
  // recentFive = Array();
  constructor(private stockIntradayService: stockIntradayService) { 
    console.log("---")
    // const intradayData= Array();
    this.stockIntradayService.getStockdata().subscribe(
      (response)=>{
        response=response["Time Series (5min)"];
        Object.keys(response).forEach(key =>  this.intradayData.push({
          date: key,
          openPrice: response[key]['1. open'],
          closePrice: response[key]['4. close'],
          volume: response[key]['5. volume']
       }));       
      console.log(this.intradayData)
      })
}
  rowData: [
    {
        "date": "2022-02-07 20:00:00",
        "openPrice": "137.3900",
        "closePrice": "137.3900",
        "volume": "108"
    },
    {
        "date": "2022-02-07 17:30:00",
        "openPrice": "137.5900",
        "closePrice": "137.5800",
        "volume": "672"
    },
    {
        "date": "2022-02-07 17:20:00",
        "openPrice": "137.5800",
        "closePrice": "137.5800",
        "volume": "204"
    },
    {
        "date": "2022-02-07 17:10:00",
        "openPrice": "137.2400",
        "closePrice": "137.2400",
        "volume": "1020"
    }
]
  columnDefs = [{ field: "date" }, { field: "openPrice" }, { field: "closePrice" }, { field: "volume"},];
  
}
