import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FormularioComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
