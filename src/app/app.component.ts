import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hello-render';
  username: string = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const isLocalhost = window.location.hostname.includes('localhost');
    const api = isLocalhost ? 'http://localhost:3000/api/users' : 'https://render-api-8ag4.onrender.com/api/users';

      this.http.get(api).subscribe(result => {
        var brctodo = 43;
        this.username = result.toString();
      });
  }
}
