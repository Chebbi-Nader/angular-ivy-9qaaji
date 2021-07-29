import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AlbumService } from './services/album.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, AlbumComponent],
  bootstrap: [AppComponent],
  providers: [AlbumService]
})
export class AppModule {}
