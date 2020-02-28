import { Component, OnInit, ComponentFactory, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormControl, FormGroup, NgForm, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { throwError } from 'rxjs';
import { empService } from '../../Services/empService';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'create',
  templateUrl: './create.component.html'

})
export class createcomponent implements OnInit {

  employeeForm: FormGroup;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private _avroute: ActivatedRoute, private _empService: empService, private _router: Router) {

  }
  ngOnInit() {

    this.employeeForm = new FormGroup({
      eid: new FormControl(),
      ename: new FormControl(),
      edept: new FormControl(),
      esalary: new FormControl()

    });

  };
  get eid() { return this.employeeForm.get('eid'); }
  get ename() { return this.employeeForm.get('ename'); }
  get edept() { return this.employeeForm.get('edept'); }
  get esalary() { return this.employeeForm.get('esalary'); }
  save() {
    this._empService.saveEmployee(this.employeeForm.value).subscribe((data)=> {
      this._router.navigate(['./emp'])
    }, error => this.errorMessage = error);
  }
  cancel() {

    this._router.navigate(['./emp']);
  }
}
