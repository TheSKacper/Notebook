import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../server/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allNote!:any
  constructor(private apiServer:ApiService) { }

  ngOnInit(): void {
    this.loadNote()
  }


  loadNote()
  {
    this.apiServer.getAllNote().subscribe((res:any) =>
    {
      this.allNote = res
    })
  }


  deleteNote(_id:String)
  {
    this.apiServer.deleteNote(_id).subscribe((res:any) =>
    {
      alert('Deleted')
      window.location.reload()
    })
  }



}
