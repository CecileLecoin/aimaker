import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatgptmakerComponent } from './components/chatgptmaker/chatgptmaker.component';
import { ChatGPTResolver } from './resolvers/chatgpt.resolver';

const routes: Routes = [
  { path: '', component: ChatgptmakerComponent, resolve: { chats: ChatGPTResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatgptRoutingModule { }
