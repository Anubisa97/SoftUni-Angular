import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
import { Service } from './types/service-post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`/api/themes`, { themeName, postText });
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;

    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(`${url}`);
  }

  editTheme(id: string, text: string,) {
    return this.http
      .put<Theme>('/api/users/profile', { text })
    // .pipe(tap((user) => this.user$$.next(user)));
  }

  getServices() {
    const { firebaseApiUrl } = environment;
    return this.http.get<Service[]>(`${firebaseApiUrl}/articles/.json`);
  }

  getService(id: string) {
    const { firebaseApiUrl } = environment;
    return this.http.get<Service>(`${firebaseApiUrl}/articles/${id}/.json`);
  }
  // getPostText(id: string) {
  //   const { apiUrl } = environment;
  //   let url = `/api/posts/theme`;
  //   return this.http.get<any>(`${url}:${id}`);
  // }


}
