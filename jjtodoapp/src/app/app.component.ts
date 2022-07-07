import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jjtodoapp';

  message = 'nenacteno';

  constructor(private http: HttpClient) {
    this.http.get('/api/getmessage')
      .subscribe((resp: any) => this.message = resp.text);
  }
}
