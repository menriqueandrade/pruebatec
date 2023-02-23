import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formEmployee:FormGroup;
  constructor(
    public form:FormBuilder,
    private apiService:ApiService,
    private router: Router,
   
    ){
    this.formEmployee=this.form.group({
      name:[''],
      email:[''],
    })
  }
  ngOnInit(): void {

  }

  sendData():any{
    
    this.apiService.AddEmployeeComponent(this.formEmployee.value).subscribe();
    this.router.navigateByUrl('list-employee');
  
  }
}
