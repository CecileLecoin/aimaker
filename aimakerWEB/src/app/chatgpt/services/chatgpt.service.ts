import { Injectable } from '@angular/core';
import { ChatGPT } from '../models/chatgpt.model';
import OpenAI from 'openai';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class ChatGPTService {
    openai = new OpenAI({ apiKey: environment.OPENAI_API_KEY });
    
    async gpt() {
        
        const completion = await this.openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            { role: "system", content: "You help build a simple website."},
            { role: "user", content: "Make an html of a hello world."},
          ],
        });
        return completion.choices[0].message.content;
      }

      /* async generateResponse() { 
        const messages = []
        try { 
          const completion = await this.gpt(); 
          messages.push(completion[0].message);  
        } catch (error) { 
          console.error('Error generating response:', error); 
        }  
        return messages;
      } */
}