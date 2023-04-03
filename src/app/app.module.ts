import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ResumeComponent } from './components/resume/resume.component';
import { Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationComponent } from './components/certification/certification.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PhoneComponent } from './components/phone/phone.component';
import { EmailComponent } from './components/email/email.component';
import { DobComponent } from './components/dob/dob.component';
import { CityComponent } from './components/city/city.component';
import { LinkedinComponent } from './components/linkedin/linkedin.component';
import { GithubComponent } from './components/github/github.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


const routes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: '', redirectTo: '/resume', pathMatch: 'full'},
  {path: '**', redirectTo: '/resume', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    ResumeComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    CertificationComponent,
    SummaryComponent,
    PhoneComponent,
    EmailComponent,
    DobComponent,
    CityComponent,
    LinkedinComponent,
    GithubComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
