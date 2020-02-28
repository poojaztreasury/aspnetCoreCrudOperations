import { Component, OnInit, ComponentFactory, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormControl, FormGroup, NgForm, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { throwError } from 'rxjs';
import { empService } from '../../Services/empService';

@Component({

  selector: 'fetchemp',
  templateUrl: './fetchemp.component.html'

})
export class fetchempComponent {
  public empList: EmpData[]
  constructor(public _http: Http, private _router: Router, private _empService: empService) {

    this.getEmployee();
  }
  getEmployee() {

    this._empService.getEmployee().subscribe((data) => this.empList = data );


  }
  delete(id: number) {

    this._empService.deleteEmployee(id).subscribe((data) => this.getEmployee());
  }
}
interface EmpData {
  eid: number;
  ename: string;
  edept: string;
  esalary: number;
}
