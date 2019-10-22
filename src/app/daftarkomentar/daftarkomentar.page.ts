import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftarkomentar',
  templateUrl: './daftarkomentar.page.html',
  styleUrls: ['./daftarkomentar.page.scss'],
})
export class DaftarkomentarPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void
  {
    this.http.get('https://jsonplaceholder.typicode.com/comments/', {

    })
    .subscribe(
      res => {
        document.getElementById("komentar1").innerHTML = res[0]['name'] + ' Memberi Komentar';
        document.getElementById("komentar2").innerHTML = res[1]['name'] + ' Memberi Komentar';
        document.getElementById("komentar3").innerHTML = res[2]['name'] + ' Memberi Komentar';
      },
      err=>
      {
        console.log("Error occured");
      }
    );
  }

}
