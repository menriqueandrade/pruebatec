import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Employee } from 'src/app/services/models/Employee';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  Employee: any;

  constructor(
    private apiService: ApiService,


  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.apiService.getEmployee().subscribe(response => {
        console.log(response);
        this.Employee = response;
      });
    },
      500);

    // if (this.apiService.banderita == false) {
    //   this.apiService.getEmployee().subscribe(response => {

    //     this.Employee = response;
    //   });
    // }
  }
  delay(ms: number) {
    console.log(ms);
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  deleteEmployee(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Esta seguro de borrar??")) {
      this.apiService.deleteEmployee(id).subscribe((response) => {
        console.log(response);
        //indice de control frame
        this.Employee.splice(iControl, 1)
      });
    }
  }


}
