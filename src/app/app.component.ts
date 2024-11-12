import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddWebtoonComponent } from './components/add-webtoon/add-webtoon.component';
import { CommonModule } from '@angular/common';
import { WebtoonListComponent } from './components/webtoon-list/webtoon-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddChapterComponent } from './components/add-chapter/add-chapter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule,
    DashboardComponent,
    AddWebtoonComponent, WebtoonListComponent, AddChapterComponent,
    AddUserComponent, ProfileComponent, UserListComponent,
    ContactComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  currentTab: string = "dashboard";

  changeTab(tabName: string){
    this.currentTab = tabName;
  }
}
