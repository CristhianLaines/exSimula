import { Component, OnInit } from '@angular/core';
import { Auto } from '../../model/auto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  public dato : any = "";
  public auto: Auto = new Auto();
  public cadena: string = "";
  ngOnInit(): void {
    this.dato = localStorage.getItem('tutorial');
    let s: any = localStorage.getItem('auto');
    this.auto = JSON.parse(s);
    console.log(this.auto.marca);
  }

}
