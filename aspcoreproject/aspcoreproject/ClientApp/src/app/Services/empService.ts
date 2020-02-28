import {Injectable,Inject} from '@angular/core';
import {Http,Response} from '@angular/http';
import {map,catchError,retry} from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class empService {

  myAppUrl: string = "";
  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string){
    this.myAppUrl = baseUrl;
  }

  getEmployee() {
    //console.log(this.myAppUrl + "api/emp/Disp_Rec");
    return this._http.get(this.myAppUrl + "api/emp/Disp_Rec").pipe(map((response: Response) => response.json() ), catchError(this.errorHandler));

  }
  errorHandler(error: Response) {
    return throwError(error);

  }
  saveEmployee(employee) {

    return this._http.post(this.myAppUrl + "api/emp/Save_Rec", employee).pipe(map((response: Response) => response.json()), catchError(this.errorHandler));
  }
  updateEmployee(employee) {

    return this._http.put(this.myAppUrl + "api/emp/Update_Rec", employee).pipe(map((response: Response) => response.json()), catchError(this.errorHandler));

  }
  deleteEmployee(id: number) {

    //return this._http.delete(this.myAppUrl + "api/emp/Delete_Rec/" + id).pipe(map((response: Response) => response.json()), catchError(this.errorHandler));

    return this._http.delete(this.myAppUrl + "api/emp/Delete_Rec/" + id)
      .pipe(map((response: Response) => response.json())
        , catchError(this.errorHandler));
    
  }
  getEmpById(id: number) {

    return this._http.get(this.myAppUrl + "api/emp/Find_Rec/" + id).pipe(map((response: Response) => response.json()), catchError(this.errorHandler));


  }
}
