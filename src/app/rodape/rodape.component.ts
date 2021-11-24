import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  linkWA: string = 'https://wa.me/5511947329191'
  linkInsta: string = 'https://instagram.com/boanova.eng?utm_medium=copy_link'
  linkEmail: string = 'mailto:boanova@boanovaservicos.com.br'
  constructor() { }

  ngOnInit(): void {
  }

}
