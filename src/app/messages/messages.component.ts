import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {  //Angular 只会绑定到组件的公共属性。

   }

  ngOnInit(): void {
  }

}
