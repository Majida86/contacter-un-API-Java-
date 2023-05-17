import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogementsComponent } from './logements/logements.component';
import { LogementService } from './logement.service';

@NgModule({
  declarations: [
    AppComponent,
    LogementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LogementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
