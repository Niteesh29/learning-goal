import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'git-basics-advance';

  ngOnInit(): void {
    const obsevable = new Observable((sub) => {
      setTimeout(() => {
        sub.next('observable is working')
      }, 1000)
    }).subscribe((res) => {
      console.log(res)
    })
  }
}
