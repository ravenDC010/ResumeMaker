import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  summary: boolean = false;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.toggleSummary();
  }

  toggleSummary() {
    this.commonService.summaries.subscribe(
      data => {
        this.summary = data;
        console.log(`summary ${this.summary}`);
      }
    );

  }

}
