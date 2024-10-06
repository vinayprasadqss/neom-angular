import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-favorites', component: MyFavoritesComponent },
  { path: 'upcoming-events', component: UpcomingEventsComponent },
  { path: 'settings', component: SettingComponent },
  { path: 'edit-profile', component: ProfileComponent },
  { path: 'feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
