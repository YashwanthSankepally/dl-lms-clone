import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularVideosComponent } from './angular-videos/angular-videos.component';
import { FundamentalsComponent } from './fundamentals/fundamentals.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'angular-videos', component: AngularVideosComponent},
  {path: 'fundamentals', component: FundamentalsComponent},
  {path: 'update-profile', component: UpdateProfileComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
