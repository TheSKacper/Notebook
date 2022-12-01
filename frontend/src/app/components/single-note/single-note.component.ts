import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../server/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent implements OnInit {

  updateItem!:any
  id!:any


  constructor(private apiServer:ApiService,private fb:FormBuilder,private router:Router,private activatedRoute:ActivatedRoute) 
  {
    this.updateItem = fb.group
    ({
        title:['',Validators.required],
        desc:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    this.apiServer.getNote(this.id).subscribe(res =>
      {
        this.updateItem.patchValue(res)
      })
  }


  onSubmit()
  {
    this.apiServer.updateNote(this.id,this.updateItem.value).subscribe((res:any) =>
    {
      alert('Updated')
      this.router.navigate([''])
    })
  }

}
