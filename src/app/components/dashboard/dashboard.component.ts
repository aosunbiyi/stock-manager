import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StockInterface, StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<String>;


  constructor(private service: StocksService) {

    this.symbols = service.get();

  }

  public generateData() {

    this.stocks = [];
    this.service.load(this.symbols)
      .subscribe(stocks => {
        this.stocks = stocks;
        console.log(stocks);

      });
  }

  ngOnInit() {

    this.service.load(this.symbols)
      .subscribe(stocks => {
        this.stocks = stocks;

      });
  }

}
