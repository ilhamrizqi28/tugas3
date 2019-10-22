import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detilkomentar',
  templateUrl: './detilkomentar.page.html',
  styleUrls: ['./detilkomentar.page.scss'],
})
export class DetilkomentarPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void
  {
    this.http.get('https://jsonplaceholder.typicode.com/comments/1', {

    })
    .subscribe(
      res => {
        document.getElementById("komentar1").innerHTML = res['name'];
        document.getElementById("detilkomentar1").innerHTML = '""' + res['body'] + '""';
      },
      err=>
      {
        console.log("Error occured");
      }
    );

    //
    this.http.get('https://jsonplaceholder.typicode.com/comments/2', {

    })
    .subscribe(
      res => {
        document.getElementById("komentar2").innerHTML = res['name'];
        document.getElementById("detilkomentar2").innerHTML = '""' + res['body'] + '""';
      },
      err=>
      {
        console.log("Error occured");
      }
    );

    //
    this.http.get('https://jsonplaceholder.typicode.com/comments/3', {

    })
    .subscribe(
      res => {
        document.getElementById("komentar3").innerHTML = res['name'];
        document.getElementById("detilkomentar3").innerHTML = '""' + res['body'] + '""';
      },
      err=>
      {
        console.log("Error occured");
      }
    );
  }

}
