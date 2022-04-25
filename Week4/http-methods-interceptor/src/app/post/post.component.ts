import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postForm: FormGroup
  FormData: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    })
  }

  onCreatePost() {
    const postData = this.postForm.value;
    this.http.post('https://http-methods-interceptor-default-rtdb.firebaseio.com/posts.json', postData).subscribe(response => {
      console.log(response)
      this.getData();

    })

  }

  getData() {
    this.http.get('https://http-methods-interceptor-default-rtdb.firebaseio.com/posts.json').pipe(map((res) => {
      let data = []

      for (let key in res) {
        data.push({
          ...res[key], key
        })
      }

      return data;
    })).subscribe(res => {
      this.FormData = res;
    })

  }

}
