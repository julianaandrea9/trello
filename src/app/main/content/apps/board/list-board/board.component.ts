import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BoardService } from './board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public name;

  constructor(
    private boardService: BoardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  public getCurrentUser() {
    this.boardService.isAuth().subscribe(auth => {
      if (auth) {
        this.name = auth.displayName || auth.email
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
