import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesService } from './heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }