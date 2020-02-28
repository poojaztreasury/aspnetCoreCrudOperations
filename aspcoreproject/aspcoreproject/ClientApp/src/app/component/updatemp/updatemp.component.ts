import { Component, Inject, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { throwError } from 'rxjs';
import { empService } from '../../Services/empService';
import { error } from '@angular/compiler/src/util';
@Component({

  selector: 'updatemp',
  templateUrl: './updatemp.component.html'

})
export class updatempComponent implements OnInit {

  employeeForm: FormGroup;
  id: number;
  errorMessage: any;
  ngOnInit() {

    if (this.id > 0) {

      this._empService.getEmpById(this.id).subscribe(resp => this.employeeForm.setValue(resp), error => this.errorMessage = error);

    }
    this.employeeForm = new FormGroup({
      eid: new FormControl(),
      ename: new FormControl(),
      edept: new FormControl(),
      esalary: new FormControl()
    });

  };

  constructor(private _fb: FormBuilder, private _avroute: ActivatedRoute, private _empService: empService, private _router: Router) {
    if (this._avroute.snapshot.params["id"]) {

      this.id = this._avroute.snapshot.params["id"];
    }
  }
  update() {

    this._empService.updateEmployee(this.employeeForm.value).subscribe((data) => { this._router.navigate(['/emp']) }, error => this.errorMessage);
  }
  cancel() {

    this._router.navigate(['/emp']);
  }
  get eid() { return this.employeeForm.get('eid'); }
  get ename() { return this.employeeForm.get('ename'); }
  get edept() { return this.employeeForm.get('edept'); }
  get esalary() { return this.employeeForm.get('esalary'); }
}
