import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  getID: any;
  formEmployeeEdit: FormGroup;
  constructor(
    public form: FormBuilder,
    private activeRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,

  ) {
    //obtenemos id
    this.getID = this.activeRoute.snapshot.paramMap.get('id');
    //utilizamos el servicio para enviar y escuchar
    this.apiService.getEmployeeIdEdit(this.getID).subscribe(
      response => {
        console.log(response);
        this.formEmployeeEdit.setValue(
          {
            //enviar valores obtenidos al form
            name: response[0]['name'],
            email: response[0]['email'],
          }
        );
      }
    )
    this.formEmployeeEdit = this.form.group({
      //enviar valores obtenidos al form
      name: [''],
      email: [''],
    });
  }
  ngOnInit(): void {

  }
  sendDataEdit(): any {
    console.log(this.getID);
    console.log(this.formEmployeeEdit.value);
    this.apiService.editEmployee(this.getID, this.formEmployeeEdit.value).subscribe((respuesta => {
      console.log(respuesta)
    }



    ));

    this.router.navigateByUrl('list-employee');




  }

}
