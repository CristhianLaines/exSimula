import { Auto } from './../../model/auto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const auto: Auto = new Auto();
    auto.id=1;
    auto.marca="Volvo";
    auto.modelo="Jetta";
    auto.precio=20000;
    localStorage.setItem('tutorial', 'Esto es Angular');
    localStorage.setItem('auto', JSON.stringify(auto));

  }

}
