import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.router';
import { AuthServiceService } from '../app/security/services/auth-service.service';
import { AuthServiceGuard } from '../app/security/guard/auth-service.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserModule
  ],
  providers: [
    AuthServiceService,
    AuthServiceGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
