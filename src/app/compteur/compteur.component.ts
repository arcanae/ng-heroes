import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {

  compte:number = 0;
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.compte++;
  }

  decrement() {
    this.compte--;
  }

  reset() {
    this.compte = 0;
  }
}
