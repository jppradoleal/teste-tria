import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsService } from '../core/services/comics.service';
import { HeaderComponent } from '../core/components/header/header.component';
import { CardComponent } from '../core/components/card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CheckoutComponent,
    HeaderComponent,
    CardComponent
  ],
  bootstrap: [AppComponent],
  providers: [ComicsService]
})
export class AppModule {}
