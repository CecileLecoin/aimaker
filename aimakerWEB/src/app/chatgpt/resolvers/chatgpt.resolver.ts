import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ChatGPT } from '../models/chatgpt.model';
import { Message } from '../models/message.model'
import { ChatGPTService } from '../services/chatgpt.service';
import { Observable } from 'rxjs';
import { ChatCompletionMessage } from 'openai/resources/index.mjs';

@Injectable()
export class ChatGPTResolver implements Resolve<Promise<string | null>> {
  constructor(private chatGPTService: ChatGPTService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string | null> {
    return this.chatGPTService.gpt();
  }
}