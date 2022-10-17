
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { WebImageUpload } from '../model/web-image-upload';

@Injectable({
    providedIn: 'root'
})
export class HomePageService {
    constructor(
        private httpClient: HttpClient
    ) {
    }
    getWebImageList(admin: WebImageUpload): Observable<any> {
        return this.httpClient.post<any>(ApiService.getHomePageImagesURL, admin);
    }

}
