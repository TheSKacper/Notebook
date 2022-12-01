import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNoteComponent } from './components/single-note/single-note.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'single',component:SingleNoteComponent},
  {path:'add',component:NewNoteComponent},
  {path:'edit/:id',component:SingleNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
