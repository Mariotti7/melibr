import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolvido',
  templateUrl: './devolvido.component.html',
  styleUrls: ['./devolvido.component.css']
})
export class DevolvidoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

}
