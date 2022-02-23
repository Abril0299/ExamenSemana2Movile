import { Component } from '@angular/core';
import { Canciones } from '../interface/canciones.modelo';
import { CancionService } from '../services/cancion.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cancion:Canciones []= [];

  constructor(private CancionService:CancionService) {}


  MostarLista(){
    this.cancion=this.CancionService.getAll();
  }
}
