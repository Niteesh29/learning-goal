import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators'
import { PostServiceService } from '../post-service.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postForm: FormGroup
  FormData: Post[];
  error = null
  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {

    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    })
  }

  onCreatePost() {
    const postData = this.postForm.value;
    this.postService.createPost(postData).subscribe((response) => {
      console.log(response)
      this.getData()
    })
  }

  getData() {
    this.postService.fetchPost().subscribe((res) => {
      this.FormData = res;
    }, error => {
      console.log(error)
      this.error = error.message;
    })

  }

  onClearPost(event: Event) {
    alert('clear post called')
    event.preventDefault()
    this.postService.clearPost();
    this.FormData = []
  }

}
