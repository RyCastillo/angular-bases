import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power: 10
    }
  ];

  @Output()  // para mandarlo al exterior
  onDelete: EventEmitter<string> = new EventEmitter(); // comunicacion de hijo hacia padre

  onDeleteCharacter(id?: string):void{
    // emitir id del personaje
    if(!id) return;
    this.onDelete.emit( id )
  }

}
