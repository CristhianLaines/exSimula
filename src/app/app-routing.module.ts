import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/book/home/home.component';
import { ListadoComponent } from './component/book/listado/listado.component';
import { EditarComponent } from './component/book/editar/editar.component';
import { BookComponent } from './component/book/book.component';

const routes: Routes = [
  {
    path: 'book', component: BookComponent, children: [
      { path: 'listado', component : ListadoComponent},
      { path: 'editar/:id', component: EditarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
