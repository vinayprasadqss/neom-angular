import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { InteryCardComponent } from './components/intery-card/intery-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MyFavoritesComponent,
    UpcomingEventsComponent,
    SettingComponent,
    ProfileComponent,
    FeedbackComponent,
    EventDetailComponent,
    HomeComponent,
    FooterComponent,
    InteryCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
