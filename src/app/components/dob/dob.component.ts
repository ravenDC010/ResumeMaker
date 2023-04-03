import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css']
})
export class DobComponent implements OnInit {

  dob: boolean = false;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.toggleDob();
  }

  toggleDob() {
    this.commonService.dobs.subscribe(
      data => {
        this.dob = data;
      }
    );

  }

}
