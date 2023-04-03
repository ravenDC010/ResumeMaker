import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {

  linkedin: boolean = false;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.toggleLinkedin();
  }

  toggleLinkedin() {
    this.commonService.linkedins.subscribe(
      data => {
        this.linkedin = data;
      }
    );

  }

}
