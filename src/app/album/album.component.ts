import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: any[];
  constructor(private _albumServive: AlbumService) {}

  ngOnInit() {
    this._albumServive.getAllAlbum().subscribe(data => (this.albums = data));
  }
}
