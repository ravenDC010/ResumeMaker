import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from '../../services/common-service.service';
// import jsPDF from 'jspdf';
import { CellConfig, jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  phone: boolean = false;
  email: boolean = false;
  dob: boolean = false;
  city: boolean = false;
  linkedin: boolean = false;
  github: boolean = false;

  work: boolean = false;
  education: boolean = false;
  project: boolean = false;
  certification: boolean = false;

  constructor(private route: ActivatedRoute, private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.toggleWorkExperience();
    this.toggleEducation();
    this.toggleProject();
    this.toggleCertification();
    this.togglePhone();
    this.toggleEmail();
    this.toggleDob();
    this.toggleCity();
    this.toggleLinkedin();
    this.toggleGithub();
  }

  togglePhone() {
    this.commonService.phones.subscribe(
      data => {
        this.phone = data;
        console.log("phone: ",this.phone);
      }
    );
  }

  toggleEmail() {
    this.commonService.emails.subscribe(
      data => {
        this.email = data;
      }
    );
  }

  toggleDob() {
    this.commonService.dobs.subscribe(
      data => {
        this.dob = data;
      }
    );
  }

  toggleCity() {
    this.commonService.cities.subscribe(
      data => {
        this.city = data;
      }
    );
  }

  toggleLinkedin() {
    this.commonService.linkedins.subscribe(
      data => {
        this.linkedin = data;
      }
    );
  }

  toggleGithub() {
    this.commonService.githubs.subscribe(
      data => {
        this.github = data;
      }
    );
  }

  toggleWorkExperience() {
    this.commonService.overallWorks.subscribe(
      data => {
        this.work = data;
      }
    );
  }

  toggleEducation() {
    this.commonService.overallEducations.subscribe(
      data => {
        this.education = data;
      }
    );
  }

  toggleProject() {
    this.commonService.overallProjects.subscribe(
      data => {
        this.project = data;
      }
    );
  }
  toggleCertification() {
    this.commonService.overallCertifications.subscribe(
      data => {
        this.certification = data;
      }
    );
  }





  download() {

    // const { jsPDF } = window.jspdf;
 
    // var doc = new jsPDF('l', 'mm', [1500, 1400]);
    // var pdfjs = document.querySelector('#resume');

    // doc.html(pdfjs, {
    //     callback: function(doc) {
    //         doc.save("newpdf.pdf");
    //     },
    //     x: 12,
    //     y: 12
    // });  
    
    

    // // Creating a unique file name for my PDF
    // const fileName = 'resume_' + Math.floor((Math.random() * 1000000) + 1) + '.pdf';
    // // Default export is a4 paper, portrait, using millimeters for units
    // const doc = new jsPDF();
    // doc.setFontSize(20);
    // doc.setFont('helvetica', 'bold');
    // const titleXPos = (doc.internal.pageSize.getWidth() / 2) - (doc.getTextWidth(fileName) / 2);
    // doc.text(fileName, titleXPos, 20);
    // doc.setFont('helvetica', 'normal');
    // doc.setFontSize(14);
    // doc.table(10, 35, this._getDataForPdfTable(), this._createHeadersForPdfTable([
    //   'uid', 'first', 'last', 'handle'
    // ]), { autoSize: false });
    // doc.save(fileName);

    let DATA: any = document.getElementById('resume');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

}
