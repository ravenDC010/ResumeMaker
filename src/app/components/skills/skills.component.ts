import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: boolean = false;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.toggleSkill();
  }

  toggleSkill() {
    this.commonService.skills.subscribe(
      data => {
        this.skill = data;
        console.log(`skill ${this.skill}`);
      }
    );

  }

}
