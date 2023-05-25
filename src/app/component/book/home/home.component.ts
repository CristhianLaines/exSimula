import { Auto } from './../../model/auto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public auto = new Auto();
  curso : string = 'Esto es Angular';
  ngOnInit(): void {
    this.auto.id=1;
    this.auto.marca="Volvo";
    this.auto.modelo="Jetta";
    this.auto.precio=20000;
    localStorage.setItem('auto11', JSON.stringify(this.auto));

  }

}
