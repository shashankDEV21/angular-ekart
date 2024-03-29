import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './container/product-list/product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    HeaderComponent,
    ProductListComponent,
    MainMenuComponent,
    TopMenuComponent,
    SearchComponent,
    ContainerComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
