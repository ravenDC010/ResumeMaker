import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  workExperienceCount: number = 0;
  educationCount: number = 0;
  projectCount: number = 0;
  certificationCount: number = 0;

  phone: boolean = false;
  email: boolean = false;
  dob: boolean = false;
  city: boolean = false;
  linkedin: boolean = false;
  github: boolean = false;
  summary: boolean = false;
  skill: boolean = false;
  overallWork: boolean = false;
  overallEducation: boolean = false;
  overallProject: boolean = false;
  overallCertification: boolean = false;




  workExperienceCounts: Subject<number> = new Subject<number>();
  educationCounts: Subject<number> = new Subject<number>();
  projectCounts: Subject<number> = new Subject<number>();
  cerificationCounts: Subject<number> = new Subject<number>();

  emails: Subject<boolean> = new Subject<boolean>();
  phones: Subject<boolean> = new Subject<boolean>();
  dobs: Subject<boolean> = new Subject<boolean>();
  cities: Subject<boolean> = new Subject<boolean>();
  linkedins: Subject<boolean> = new Subject<boolean>();
  githubs: Subject<boolean> = new Subject<boolean>();
  summaries: Subject<boolean> = new Subject<boolean>();
  skills: Subject<boolean> = new Subject<boolean>();
  overallWorks: Subject<boolean> = new Subject<boolean>();
  overallEducations: Subject<boolean> = new Subject<boolean>();
  overallProjects: Subject<boolean> = new Subject<boolean>();
  overallCertifications: Subject<boolean> = new Subject<boolean>();


  constructor() { }

  addWorkExperience() {
    this.workExperienceCount += 1;
    this.workExperienceCounts.next(this.workExperienceCount);
    console.log(`common service ${this.workExperienceCounts}`);
    console.log(`common services ${this.workExperienceCount}`);
  }

  removeWorkExperience(num: number) {
    // this.workExperienceCount -= 1;
    this.workExperienceCounts.next(num);
    console.log(`remove common service ${this.workExperienceCounts}`);
    console.log(`remove common services ${num}`);
  }


  addEducation() {
    this.educationCount += 1;
    this.educationCounts.next(this.educationCount);
    console.log(`common service ${this.educationCount}`);
    console.log(`common services ${this.educationCounts}`);
  }

  removeEducation(num: number) {
    this.educationCounts.next(num);
    console.log(`remove common service ${this.educationCounts}`);
    console.log(`remove common services ${num}`);
  }

  addProject() {
    this.projectCount += 1;
    this.projectCounts.next(this.projectCount);
    console.log(`common service ${this.projectCount}`);
    console.log(`common services ${this.projectCounts}`);
  }

  removeProject(num: number) {
    this.projectCounts.next(num);
    console.log(`remove common service ${this.projectCounts}`);
    console.log(`remove common services ${num}`);
  }

  addCertification() {
    this.certificationCount += 1;
    this.cerificationCounts.next(this.certificationCount);
    console.log(`common service ${this.certificationCount}`);
    console.log(`common services ${this.cerificationCounts}`);
  }

  removeCertification(num: number) {
    this.cerificationCounts.next(num);
    console.log(`remove common service ${this.cerificationCounts}`);
    console.log(`remove common services ${num}`);
  }


  addSummary() {
    this.summary = true;
    this.summaries.next(this.summary);
    console.log(`common service ${this.summary}`);
    console.log(`common services ${this.summaries}`);
  }
  removeSummary(){
    this.summary = false;    
    this.summaries.next(this.summary);
    console.log(`common service ${this.summary}`);
    console.log(`common services ${this.summaries}`);
  }

  addOverallWork() {
    this.overallWork = true;    
    this.overallWorks.next(this.overallWork);
    console.log(`overallWork: ${this.overallWork}`);
  }

  ///////////////////////////
  removeOverallWork() {
    this.overallWork = false;
    this.workExperienceCount = 0;
    this.workExperienceCounts.next(this.workExperienceCount);
    this.overallWorks.next(this.overallWork);
  }
///////////////////////////////////////////////

  addOverallEducation() {
    this.overallEducation = true;    
    this.overallEducations.next(this.overallEducation);
  }

  removeOverallEducation() {
    this.overallEducation = false;    
    this.educationCount = 0;
    this.educationCounts.next(this.educationCount);
    this.overallEducations.next(this.overallEducation);
  }
  addOverallProject() {
    this.overallProject = true;    
    this.overallProjects.next(this.overallProject);
  }

  removeOverallProject() {
    this.overallProject = false;    
    this.projectCount = 0;
    this.projectCounts.next(this.projectCount);
    this.overallProjects.next(this.overallProject);
  }
  addOverallCertification() {
    this.overallCertification = true;    
    this.overallCertifications.next(this.overallCertification);
  }

  removeOverallCertification() {
    this.overallCertification = false;    
    this.certificationCount = 0;
    this.cerificationCounts.next(this.certificationCount);
    this.overallCertifications.next(this.overallCertification);
  }






  addSkill() {
    this.skill = true;
    this.skills.next(this.skill);
    console.log(`common service ${this.skill}`);
    console.log(`common services ${this.skills}`);
  }

  removeSkill() {
    this.skill = false;    
    this.skills.next(this.skill);
    console.log(`common service ${this.skill}`);
    console.log(`common services ${this.skills}`);
  }

  addEmail() {
    this.email = true;
    this.emails.next(this.email);
    console.log(`common service ${this.email}`);
    console.log(`common services ${this.emails}`);
  }

  removeEmail() {
    this.email = false;    
    this.emails.next(this.email);
    console.log(`common service ${this.email}`);
    console.log(`common services ${this.emails}`);
  }
  addPhone() {
    this.phone = true;
    this.phones.next(this.phone);
    console.log(`common service phone: ${this.phone}`);
    console.log(`common services phones: ${this.phones}`);
  }

  removePhone() {
    this.phone = false;    
    this.phones.next(this.phone);
    console.log(`common service phone: ${this.phone}`);
    console.log(`common services phones: ${this.phones}`);
  }
  addDob() {
    this.dob = true;
    this.dobs.next(this.dob);
    console.log(`common service ${this.dob}`);
    console.log(`common services ${this.dobs}`);
  }

  removeDob() {
    this.dob = false;    
    this.dobs.next(this.dob);
    console.log(`common service ${this.dob}`);
    console.log(`common services ${this.dobs}`);
  }
  addCity() {
    this.city = true;
    this.cities.next(this.city);
    console.log(`common service ${this.city}`);
    console.log(`common services ${this.cities}`);
  }

  removeCity() {
    this.city = false;    
    this.cities.next(this.city);
    console.log(`common service ${this.city}`);
    console.log(`common services ${this.cities}`);
  }
  addLinkedin() {
    this.linkedin = true;
    this.linkedins.next(this.linkedin);
  }

  removeLinedin() {
    this.linkedin = false;    
    this.linkedins.next(this.linkedin);
  }
  addGithub() {
    this.github = true;
    this.githubs.next(this.github);
  }

  removeGithub() {
    this.github = false;    
    this.githubs.next(this.github);
  }










}
