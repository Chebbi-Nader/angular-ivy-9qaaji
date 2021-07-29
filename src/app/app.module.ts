import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AlbumComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
