import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit {
  num: number[] = [];

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.updateWorkExperience();
  }


  updateWorkExperience() {

    let index: number = -1;
    this.commonService.workExperienceCounts.subscribe(
      data => {
        if(this.num.includes(data)){
          index = this.num.indexOf(data);
          this.num.splice(index,1);
        } else {
          this.num.push(data)
        }
        console.log(`num ${this.num}`);
      }
    );


    // this.commonService.workExperienceCounts.subscribe(
    //   data => {
    //     this.num.push(data)
    //     console.log(`num ${this.num.length}`);
    //   }
    // );

  }

}
