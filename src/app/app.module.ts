import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AlbumService } from './services/album.service';
import { Observable } from 'rxjs/dist/types';

@NgModule({
  imports: [BrowserModule, FormsModule, Observable],
  declarations: [AppComponent, AlbumComponent],
  bootstrap: [AppComponent],
  providers: [AlbumService]
})
export class AppModule {}
