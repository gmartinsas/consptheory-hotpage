import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { FormsComponent } from './components/forms/forms.component';
import { ConfirmaPageComponent } from './components/confirma-page/confirma-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IllustrationComponent,
    FormsComponent,
    ConfirmaPageComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
