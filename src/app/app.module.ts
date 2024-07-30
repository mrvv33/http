import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OrnekComponent } from './ornek/ornek.component';
import { TokenInterceptor } from './token.interceptor';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    OrnekComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
