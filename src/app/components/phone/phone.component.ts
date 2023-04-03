import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phone: boolean = false;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.togglePhone();
  }

  togglePhone() {
    this.commonService.phones.subscribe(
      data => {
        this.phone = data;
        console.log("phone: ",this.phone);
      }
    );

  }

}
