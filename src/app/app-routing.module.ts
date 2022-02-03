import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { KanbanComponent } from './kanban/kanban.component';
import { BacklogComponent } from './backlog/backlog.component';
import { GitComponent } from './git/git.component';
import { ProjetComponent } from './projet/projet.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'backlog',component:BacklogComponent,canActivate: [AuthGuard]},
  {path:'git',component:GitComponent,canActivate: [AuthGuard]},
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path:'projects',component:ProjetComponent,canActivate: [AuthGuard]},
  {path:'kanban',component:KanbanComponent ,canActivate: [AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
