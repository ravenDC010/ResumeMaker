import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  addPhoneToggle: boolean = true;
  addEmailToggle: boolean = true;
  addDobToggle: boolean = true;
  addCityToggle: boolean = true;
  addLinkedinToggle: boolean = true;
  addGithubToggle: boolean = true;

  addSummaryToggle: boolean = true;
  addWorkToggle: boolean = true;
  addEducationToggle: boolean = true;
  addProjectToggle: boolean = true;
  addCertificationToggle: boolean = true;
  addSkillToggle: boolean = true;

  workNum: number[] = [];
  educationNum: number[] = [];
  projectNum: number[] = [];
  certificationNum: number[] = [];


  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.updateWorkExperience();
    this.updateEducation();
    this.updateProject();
    this.updateCertification();
  }

  addPhone() {
    this.addPhoneToggle = false;
    this.commonService.addPhone();
  }

  removePhone() {
    this.addPhoneToggle = true;
    this.commonService.removePhone();
  }

  addEmail() {
    this.addEmailToggle = false;
    this.commonService.addEmail();
  }

  removeEmail() {
    this.addEmailToggle = true;
    this.commonService.removeEmail();
  }

  addDob() {
    this.addDobToggle = false;
    this.commonService.addDob();
  }

  removeDob() {
    this.addDobToggle = true;
    this.commonService.removeDob();
  }
  addLinkedin() {
    this.addLinkedinToggle = false;
    this.commonService.addLinkedin();
  }

  removeLinkedin() {
    this.addLinkedinToggle = true;
    this.commonService.removeLinedin();
  }

  addGithub() {
    this.addGithubToggle = false;
    this.commonService.addGithub();
  }

  removeGithub() {
    this.addGithubToggle = true;
    this.commonService.removeGithub();
  }

  addCity() {
    this.addCityToggle = false;
    this.commonService.addCity();
  }

  removeCity() {
    this.addCityToggle = true;
    this.commonService.removeCity();

  }

  addSummary() {
    this.addSummaryToggle = false;
    this.commonService.addSummary();
  }

  removeSummary() {
    this.addSummaryToggle = true;
    this.commonService.removeSummary();
  }

  addOverallWork() {
    this.addWorkToggle = false;
    this.commonService.addOverallWork();
  }

  removeOverallWork() {
    this.addWorkToggle = true;
    this.commonService.removeOverallWork();
  }

  addOverallEducation() {
    this.addEducationToggle = false;
    this.commonService.addOverallEducation();
  }

  removeOverallEducation() {
    this.addEducationToggle = true;
    this.commonService.removeOverallEducation();
  }
  addOverallProject() {
    this.addProjectToggle = false;
    this.commonService.addOverallProject();
  }

  removeOverallProject() {
    this.addProjectToggle = true;
    this.commonService.removeOverallProject();
  }
  addOverallCertification() {
    this.addCertificationToggle = false;
    this.commonService.addOverallCertification();
  }

  removeOverallCertification() {
    this.addCertificationToggle = true;
    this.commonService.removeOverallCertification();
  }

  addEducation() {
    this.addEducationToggle = false;
  }

  // removeEducation() {
  //   this.addEducationToggle = true;
  // }

  addProject() {
    this.addProjectToggle = false;
  }

  // removeProject() {
  //   this.addProjectToggle = true;
  // }

  addCertification() {
    this.addCertificationToggle = false;
  }

  // removeCertification() {
  //   this.addCertificationToggle = true;
  // }

  addSkill() {
    this.addSkillToggle = false;
    this.commonService.addSkill();
  }

  removeSkill() {
    this.addSkillToggle = true;
    this.commonService.removeSkill();
  }




  addNewWorkExperience() {
    this.commonService.addWorkExperience();
  }

  removeWorkExperience(num: number){
    this.commonService.removeWorkExperience(num);
  }

  updateWorkExperience() {

    let index: number = -1;
    this.commonService.workExperienceCounts.subscribe(
      data => {
        if(data === 0){
          this.workNum = [];
        } else if(this.workNum.includes(data)){
          index = this.workNum.indexOf(data);
          this.workNum.splice(index,1);
        } else {
          this.workNum.push(data)
        }
        console.log(`WorkNum ${this.workNum}`);
      }
    );
  }

  addNewEducation() {
    this.commonService.addEducation();
  }

  removeEducation(num: number){
    this.commonService.removeEducation(num);
  }

  updateEducation() {

    let index: number = -1;
    this.commonService.educationCounts.subscribe(
      data => {
        if(data === 0){
          this.educationNum = [];
        } else if(this.educationNum.includes(data)){
          index = this.educationNum.indexOf(data);
          this.educationNum.splice(index,1);
        } else {
          this.educationNum.push(data)
        }
        console.log(`educationNum ${this.educationNum}`);
      }
    );
  }



  addNewProject() {
    this.commonService.addProject();
  }

  removeProject(num: number){
    this.commonService.removeProject(num);
  }

  updateProject() {

    let index: number = -1;
    this.commonService.projectCounts.subscribe(
      data => {
        if(data === 0){
          this.projectNum = [];
        } else if(this.projectNum.includes(data)){
          index = this.projectNum.indexOf(data);
          this.projectNum.splice(index,1);
        } else {
          this.projectNum.push(data)
        }
        console.log(`projectNum ${this.projectNum}`);
      }
    );
  }



  addNewCertification() {
    this.commonService.addCertification();
  }

  removeCertification(num: number){
    this.commonService.removeCertification(num);
  }

  updateCertification() {

    let index: number = -1;
    this.commonService.cerificationCounts.subscribe(
      data => {
        if(data === 0){
          this.certificationNum = [];
        } else if(this.certificationNum.includes(data)){
          index = this.certificationNum.indexOf(data);
          this.certificationNum.splice(index,1);
        } else {
          this.certificationNum.push(data)
        }
        console.log(`certificationNum ${this.certificationNum}`);
      }
    );
  }


}
