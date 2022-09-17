import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { AcademicsComponent } from './academics/academics.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
const Routs: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'academics', component: AcademicsComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routs),
    MatSlideToggleModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,

    ContactComponent,
    IntroductionComponent,
    ExperienceComponent,
    SkillsComponent,
    AcademicsComponent,
  ],
  exports: [MatSlideToggleModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
