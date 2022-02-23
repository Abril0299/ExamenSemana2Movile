import { Injectable } from '@angular/core';
import { Canciones } from '../interface/canciones.modelo';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  nuevaCancion : Canciones []= [
    {
      titulo : 'Levitating',
      artista : 'Dua Lipa',
      album: "Future Nostalgia",
    },

    {
      titulo : 'Peaches',
      artista : 'Justin Bieber',
      album: "Justice",
    },

    {
      titulo : 'Vida de Rico',
      artista : 'Camilo',
      album: "Mis manos",
    },

    {
      titulo : 'Yellow',
      artista : 'Codplay',
      album: "Yellow",
    },

    {
      titulo : 'Getting Older',
      artista : 'Billie Elish',
      album: "Happier That Ever",
    },
    
  
  ]

  constructor() { }

  getAll(){
    return this.nuevaCancion;
  }
}
