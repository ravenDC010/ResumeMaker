import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  num: number[] = [];

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.updateProject();
  }


  updateProject() {

    let index: number = -1;
    this.commonService.projectCounts.subscribe(
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
    
    // this.commonService.projectCounts.subscribe(
    //   data => {
    //     this.num.push(data)
    //     console.log(`num ${this.num.length}`);
    //   }
    // );

  }

}
