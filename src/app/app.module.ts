import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduitMockService} from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import{ProduitService} from './produit/produit.service';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from './app.service';
import { XhrInterceptor } from './xhr.iterceptor';
import { CookieService } from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';
import {StoreModule} from '@ngrx/store';
import { principalReducer } from './shared/principal.reducer';
import { UserService } from './user/user.service';
import { CrudComponent } from './shared/crud/crud.component';
import {CrudService} from './shared/crud.service';
import { ChartModule } from 'angular2-chartjs';
import { MyChartComponent } from './my-chart/my-chart.component';
import { SampleComponent } from './shared/crud/sample/sample.component';
import { UploadComponent } from './shared/crud/upload/upload.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent,
    MyChartComponent,
    SampleComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal:principalReducer}),ChartModule 
  ],
  providers: [ProduitMockService,ProduitService,AppService,
  {provide:HTTP_INTERCEPTORS,useClass :XhrInterceptor ,multi:true},
  CookieService,UserService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
