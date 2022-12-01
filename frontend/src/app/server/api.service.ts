import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }


  createNote(note:any)
  {
    return this.http.post('http://localhost:5000/api/note/',note)
  }

  deleteNote(_id:String)
  {
    return this.http.delete('http://localhost:5000/api/note/'+_id)
  }

  updateNote(_id:String,note:any)
  {
    return this.http.put('http://localhost:5000/api/note/'+_id,note)
  }

  getNote(_id:String)
  {
    return this.http.get('http://localhost:5000/api/note/'+_id)
  }

  getAllNote()
  {
    return this.http.get('http://localhost:5000/api/note/')
  }

}
