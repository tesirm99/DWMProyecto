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
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { SliderComponent } from './slider/slider.component';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './select/select.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCardCartComponent } from './product-card-cart/product-card-cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductMinCardComponent } from './product-min-card/product-min-card.component';
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
    NewSaleComponent,
    SliderComponent,
    SelectComponent,
    FooterComponent,
    ProductCardComponent,
    ProductPageComponent,
    ContactComponent,
    ProductCardCartComponent,
    ShoppingCartComponent,
    AboutComponent,
    DeleteComponent,
    ProductMinCardComponent
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
    CommonModule, 
    SlickCarouselModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule, 
    MatSelectModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline' }},
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
