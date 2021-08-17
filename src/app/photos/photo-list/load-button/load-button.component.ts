import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input()
  hasMore: boolean = true; //saber se tem mais coisa para exibir

  constructor() { }

  ngOnInit() {
  }

}
