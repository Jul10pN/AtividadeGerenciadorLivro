import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormStyle } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** imports do Angular Material */

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivroInserirComponent } from './livro-inserir/livro-inserir.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';




@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    LivroInserirComponent,
    LivroListaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
