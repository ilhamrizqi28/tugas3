import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detilartikel',
  templateUrl: './detilartikel.page.html',
  styleUrls: ['./detilartikel.page.scss'],
})
export class DetilartikelPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit()
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1', {

    })
    .subscribe(
      res => {
        document.getElementById("judulpost1").innerHTML = res['title'];
        document.getElementById("kontenpost1").innerHTML = res['body'];
      },
      err=>
      {
        console.log("Error occured");
      }
    );
  }

}
