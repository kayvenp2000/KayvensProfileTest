import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'blog/:id', component: BlogComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
],
    exports: [ RouterModule ]
  
})

export class AppRoutingModule { }
