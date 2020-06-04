import { Injectable } from '@angular/core';
import {  HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  PHP_API_SERVER = "http://168.194.75.13";
  candidate:{
    first_name:string;
    middle_name:string;
    first_lastname:string;
    second_lastname:string;
    phone_number:string;
    email_address:string;
  } = {
    first_name:null,
    middle_name:null,
    first_lastname:null,
    second_lastname:null,
    phone_number:null,
    email_address:null,
  };

  insertCandidate(  candidates:{
    first_name:string;
    middle_name:string;
    first_lastname:string;
    second_lastname:string;
    phone_number:string;
    email_address:string;
  }){
    return this.httpClient.post<number>(`${this.PHP_API_SERVER}/phpscripts/insertCandidateShort.php`, candidates);
  }
  constructor(private httpClient:HttpClient) { }
}
