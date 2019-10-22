import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahkomentar',
  templateUrl: './tambahkomentar.page.html',
  styleUrls: ['./tambahkomentar.page.scss'],
})
export class TambahkomentarPage implements OnInit {

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit():void
  {

  }

  valueNama: string = "";
  valueEmail: string = "";
  valueKomentar: string = "";

    getNama(value)
    {
      this.valueNama = value;
    }

    getEmail(value)
    {
      this.valueEmail = value;
    }

    getKomentar(value)
    {
      this.valueKomentar = value;
    }

    submitKomentar()
    {
      this.http.post('https://jsonplaceholder.typicode.com/comments', {name: this.valueNama, email: this.valueEmail, body: this.valueKomentar}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err=>{
        console.log(err)
        }
      );
    }
}