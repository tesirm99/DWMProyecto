import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { ProfileComponent } from './profile/profile.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ListaVentasComponent } from './lista-ventas/lista-ventas.component';
import { NewSaleComponent } from './newsale/newsale.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CarruselComponent,
    ListaProductosComponent,
    PasswordPatternDirective,
    ProfileComponent,
    ListaComprasComponent,
    ListaVentasComponent,
    NewSaleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline' }},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
