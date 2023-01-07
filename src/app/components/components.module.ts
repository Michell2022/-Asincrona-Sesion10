import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IngresadatosComponent } from './ingresadatos/ingresadatos.component';
import { MostrardatosComponent } from './mostrardatos/mostrardatos.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    IngresadatosComponent,
    MostrardatosComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    IngresadatosComponent,
    MostrardatosComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
