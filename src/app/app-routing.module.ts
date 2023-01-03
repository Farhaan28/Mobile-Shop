import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from './mobiles/apple/apple.component';
import { GoogleComponent } from './mobiles/google/google.component';
import { MotorolaComponent } from './mobiles/motorola/motorola.component';
import { OneplusComponent } from './mobiles/oneplus/oneplus.component';
import { OppoComponent } from './mobiles/oppo/oppo.component';
import { RealmeComponent } from './mobiles/realme/realme.component';
import { SamsungComponent } from './mobiles/samsung/samsung.component';
import { VivoComponent } from './mobiles/vivo/vivo.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'products/oppo',component:OppoComponent},
  {path:'products/apple',component:AppleComponent},
  {path:'products/vivo',component:VivoComponent},
  {path:'products/oneplus',component:OneplusComponent},
  {path:'products/realme',component:RealmeComponent},
  {path:'products/motorola',component:MotorolaComponent},
  {path:'products/google',component:GoogleComponent},
  {path:'products/samsung',component:SamsungComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }