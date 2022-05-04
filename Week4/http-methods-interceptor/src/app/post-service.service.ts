import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Post } from './post/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  fetchPost() {
    return this.http.get<{ [key: string]: Post }>('https://http-methods-interceptor-default-rtdb.firebaseio.com/posts.json', {
      headers: new HttpHeaders({
        'custom-header': 'Niteesh'//we will be sending api key , authorisation key and all through headers. you can check your custom headers in 
        //Request Headers section of network tab
      }),

      params: new HttpParams().set('custom', 'hi')
    }).pipe(map((res) => {
      let data: Post[] = []

      for (let key in res) {
        data.push({
          ...res[key], key
        })
      }

      return data;
    }))
  }

  createPost(postData: Post) {
    //it will return you body by default
    return this.http.post('https://http-methods-interceptor-default-rtdb.firebaseio.com/posts.json', postData, {
      headers: new HttpHeaders({
        'custom-headers': 'post-niteesh'
      }),
      observe: 'response'
      //if you want complete response object you have to add this observe:'response' 
    })

  }

  //rxjs tap operator do nothing it just take the data and pass same data to subscribe but if you want to perform some operation before subscribe without manipulating the incoming data for ex 

  clearPost() {
    return this.http.delete('https://http-methods-interceptor-default-rtdb.firebaseio.com/posts.json', { observe: 'events' }).pipe(tap(res => {
      console.log(res)

    })).subscribe((res) => {
      // console.log(res)
    })

  }
}
