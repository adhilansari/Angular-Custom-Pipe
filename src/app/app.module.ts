import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingComponent } from './components/sorting/sorting.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { SortDirective } from './directives/sort.directive';


@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    SearchPipePipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
