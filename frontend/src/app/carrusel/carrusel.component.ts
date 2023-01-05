import { Component, OnInit, Input } from '@angular/core';
import { ICarrusel} from './Icarrusel.metadata';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent{

    @Input() 
    height = 500;
    @Input() 
    isFullScreen = false;
    @Input() items: ICarrusel[] = [];

    public finalHeight: string | number = 0;
    public currentPosition = 0;
  
    constructor() {
      this.finalHeight = this.isFullScreen ? '100vh' : '${this.height}px';
     }

     ngOnInit() {
      this.items.map( ( i, index ) => {
        i.id = index;
        i.marginLeft = 0;
      });
      }

      setCurrentPosition(position: number) {
        this.currentPosition = position;
        let item = this.items.find((i) => i.id ===0)?.marginLeft;
        item = -100 * position;
      }
      setNext() {
        let finalPercentage = 0;
        let nextPosition = this.currentPosition + 1;
        if (nextPosition <= this.items.length - 1) {
          finalPercentage = -100 * nextPosition;
        } else {
          nextPosition = 0;
        }
        let next = this.items.find((i) => i.id ===0)?.marginLeft;
        next = finalPercentage;
        this.currentPosition = nextPosition;
      }
    
      setBack() {
        let finalPercentage = 0;
        let backPosition = this.currentPosition  - 1;
        if (backPosition >= 0) {
          finalPercentage = -100 * backPosition;
        } else {
          backPosition = this.items.length - 1;
          finalPercentage = -100 * backPosition;
        }
        let next = this.items.find((i) => i.id ===0)?.marginLeft;
        next = finalPercentage;
        this.currentPosition = backPosition;
    
      }
}
