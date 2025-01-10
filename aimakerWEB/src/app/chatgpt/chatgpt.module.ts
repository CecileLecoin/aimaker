import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatgptRoutingModule } from './chatgpt-routing.module';
import { ChatgptmakerComponent } from './components/chatgptmaker/chatgptmaker.component';
import { ChatGPTService } from './services/chatgpt.service';
import { ChatGPTResolver } from './resolvers/chatgpt.resolver';


@NgModule({
  declarations: [
    ChatgptmakerComponent
  ],
  imports: [
    CommonModule,
    ChatgptRoutingModule
  ],
  exports:[
    ChatgptmakerComponent
  ],
  providers:[
    ChatGPTService,
    ChatGPTResolver,
  ]
})
export class ChatgptModule { }
