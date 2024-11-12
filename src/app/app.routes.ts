import { Routes } from '@angular/router';
import { WebtoonComponent } from './components/webtoon/webtoon.component';
import { UserComponent } from './components/user/user.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },  
    {
      path:'dashboard',
      component:DashboardComponent  
    }
];
