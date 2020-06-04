import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service'
import { Router } from '@angular/router';
import { parse } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private apiservice: ApiServiceService, public router:Router){};

  end:boolean = false;

  candidate:{
    first_name:string;
    middle_name:string;
    first_lastname:string;
    second_lastname:string;
    phone_number:string;
    email_address:string;
    dpi:string;
  } = {
    first_name:null,
    middle_name:null,
    first_lastname:null,
    second_lastname:null,
    phone_number:null,
    email_address:null,
    dpi:null
  };

  title = 'Apply Now';

  ngOnInit(){

  }

  insertCandidate(){
    this.end = true;
    this.apiservice.insertCandidate(this.candidate).subscribe((st:number)=>{
      if(st != 0){
        window.location.href = "https://nearsol.us/";
        this.candidate = {
          first_name:null,
          middle_name:null,
          first_lastname:null,
          second_lastname:null,
          phone_number:null,
          email_address:null,
          dpi:null
        }
      };
    });
  }
  
}
