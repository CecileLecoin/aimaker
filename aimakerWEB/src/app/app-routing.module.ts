import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'chatgpt', loadChildren: () => import('./chatgpt/chatgpt.module').then(m => m.ChatgptModule) },
  { path: '**', redirectTo: 'chatgpt'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
