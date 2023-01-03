import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { OppoComponent } from './mobiles/oppo/oppo.component';
import { AppleComponent } from './mobiles/apple/apple.component';
import { RealmeComponent } from './mobiles/realme/realme.component';
import { OneplusComponent } from './mobiles/oneplus/oneplus.component';
import { SamsungComponent } from './mobiles/samsung/samsung.component';
import { MotorolaComponent } from './mobiles/motorola/motorola.component';
import { GoogleComponent } from './mobiles/google/google.component';
import { VivoComponent } from './mobiles/vivo/vivo.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    OppoComponent,
    AppleComponent,
    RealmeComponent,
    OneplusComponent,
    SamsungComponent,
    MotorolaComponent,
    GoogleComponent,
    VivoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
