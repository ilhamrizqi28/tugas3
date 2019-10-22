import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftarartikel',
  templateUrl: './daftarartikel.page.html',
  styleUrls: ['./daftarartikel.page.scss'],
})
export class DaftarartikelPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/', {

    })
    .subscribe(
      res => {
        document.getElementById("judulpost1").innerHTML = res[0]['title'];
        document.getElementById("judulpost2").innerHTML = res[1]['title'];
        document.getElementById("judulpost3").innerHTML = res[2]['title'];
      },
      err=>
      {
        console.log("Error occured");
      }
    );
  }

}
