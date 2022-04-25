import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postForm: FormGroup
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
    })
  }

}
