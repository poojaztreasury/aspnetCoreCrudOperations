import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { empService } from './Services/empService';
import { createcomponent } from './component/createmp/create.component';
import { fetchempComponent } from './component/fetchemp/fetchemp.component';
import { updatempComponent } from './component/updatemp/updatemp.component'
import { from } from 'rxjs';
import { HttpModule } from '@angular/http';

 
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    fetchempComponent,
    createcomponent,
    updatempComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'emp', component: fetchempComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'create', component: createcomponent },
      { path: 'emp/Find_Rec/:id', component: updatempComponent },
    ])
  ],
  providers: [empService],
  bootstrap: [AppComponent]
})
export class AppModule { }
