import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private urlService: any = environment;

  constructor(private afsAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private http: Http) { }
  
    private headersREST(): Headers {
      const myHeaders = new Headers();
      myHeaders.append('Access-Control-Allow-Origin', '*');
      myHeaders.append('Content-Type', 'application/json');
      return myHeaders;
    }
  
  
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  public getListBoard() {
    return new Promise((resolve) => {
      this.http.get(this.urlService.getListBoard, { headers: this.headersREST() })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public searchBoard(params) {
    return new Promise((resolve) => {
      this.http.get(this.urlService.searchBoard + params, { headers: this.headersREST() })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }
}
