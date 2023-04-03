import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  num: number[] = [];

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.updateEducation();
  }


  updateEducation() {

    let index: number = -1;
    this.commonService.educationCounts.subscribe(
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
    // this.commonService.educationCounts.subscribe(
    //   data => {
    //     this.num.push(data)
    //     console.log(`num ${this.num.length}`);
    //   }
    // );

  }
  
}
