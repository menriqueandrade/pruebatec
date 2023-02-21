import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { JsComponent } from './components/js/js.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {
    path: 'menu', pathMatch: 'full', redirectTo: 'menu',

  },
  {
    path: 'menu', pathMatch: 'full', component: MenuComponent

  },
  {
    path: 'add-employee', component: AddEmployeeComponent
  },
  {
    path: 'list-employee', component: ListEmployeeComponent
  },
  {
    path: 'edit-employee/:id', component: EditEmployeeComponent
  },
  {
    path: 'js', component: JsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
