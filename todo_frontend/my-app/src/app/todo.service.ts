import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})





export class TodoService {

  
  constructor(private http:HttpClient) { 
   
  }


  getDatasetTypes(): Observable<any> {
   
    return this.http.get<any>("http://127.0.0.1:8000/todos/api");
  }

  

UpdateTodos(data:any): Observable<any>{
  return this.http.post<any>("http://127.0.0.1:8000/todos/api",data).pipe();
}
UpdateTodo(data:any,id:any): Observable<any>{
  return this.http.put<any>(`http://127.0.0.1:8000/todos/api/${id}/`, data).pipe();
}
delete(id:any){
  return this.http.delete<any>(`http://127.0.0.1:8000/todos/api/${id}`).pipe();
}

}

