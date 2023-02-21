import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../services/models/Employee';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API: string ='http://localhost/employee/';

  constructor(private clientHttp:HttpClient) { 
    
  }

  AddEmployeeComponent(dataEmployee:Employee):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",dataEmployee)
  }

  getEmployee(){
    return this.clientHttp.get(this.API)
  }

  deleteEmployee(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id)
  }

  getEmployeeIdEdit(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id)
  }
  editEmployee(id:any,dataEmployee:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,dataEmployee)
  }
}
