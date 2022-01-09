import { Component } from '@angular/core';
import { CaronaService } from './services/carona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries:any
  country:any
  confirmed:number
  recovered:number
  deaths:number
  constructor(private carona:CaronaService){}

  ngOnInit(){
    this.carona.getCountries().subscribe((data)=>{
      console.log(data)
      this.countries= data
    })
  }

  getCovidData(){
    
    this.carona.covidRealTimeData(this.country).subscribe((data)=>{
      // console.log(data)
      var index = data.lenght - 1
      this.confirmed= data[index].Confirmed
      this.recovered= data[index].Recovered
      this.deaths= data[index].Deaths
    })
  }

  getCountry(country:any){
    this.country = country
  }

}
