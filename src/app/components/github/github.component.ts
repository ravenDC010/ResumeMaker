import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  github: boolean = false;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.toggleGithub();
  }

  toggleGithub() {
    this.commonService.githubs.subscribe(
      data => {
        this.github = data;
      }
    );

  }

}
