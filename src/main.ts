import { HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [HttpClientModule]
})
  .catch((err) => console.error(err));
