import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../../server/api.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {


  addNote:any

  constructor(private apiServer:ApiService, private fb:FormBuilder,private router:Router) 
  {
    this.addNote = fb.group
    ({
        title:['',Validators.required],
        desc:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.apiServer.createNote(this.addNote.value).subscribe((res:any) =>
    {
        this.router.navigate(['/'])
    })
  }

}
