import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'issueDetails', component: IssueDetailsComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
