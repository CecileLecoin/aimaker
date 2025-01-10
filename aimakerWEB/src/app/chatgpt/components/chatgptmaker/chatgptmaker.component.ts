import { Component, ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { OpenAI } from "openai";
import { environment } from '../../../../environments/environment.development';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ChatGPT } from '../../models/chatgpt.model';
import { ChatCompletion, ChatCompletionMessage } from 'openai/resources/index.mjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatgptmaker',
  standalone: false,
  templateUrl: './chatgptmaker.component.html',
  styleUrls: ['./chatgptmaker.component.scss']
})
export class ChatgptmakerComponent implements OnInit{

  firstwebsite$= new Observable<String | null>;
  dataLoaded = false;
  /*newChat = new ChatGPT;
  this.newChat.model= "gpt-4o"
  this.newChat.messages[0].role = "system";*/

  constructor(private route: ActivatedRoute) { 
    console.log('ChatgptmakerComponent instantiated'); 
     
    //this.cdr.detectChanges();
  } 

  
  ngOnInit(): void {
      this.firstwebsite$ = this.route.data.pipe(map(data => data['chats']));
      //console.log("fwb:", this.firstwebsite$)
      this.firstwebsite$.subscribe({
        next: () => this.dataLoaded = true,
        error: () => this.dataLoaded = false
      });
  }

  
}
