import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BoardService } from './board.service';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public name;
  public usuario;
  public listboardUser;
  public listFav = [];
  public query;

  constructor(
    private boardService: BoardService,
    private router: Router,
    public toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.listBoard();
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

  public listBoard() {
    this.boardService.getListBoard().then(dataService => {
      const dataFinal = this.interpretedResponse(dataService)
      if (dataFinal.length > 0) {
        this.listboardUser = dataFinal;
      } else {
        this.toasterService.pop('warning', '', 'No hay tableros disponibles');
      }
    }).catch(error => { console.log(error); });
  }

  public interpretedResponse(response) {
    const answerStringify = JSON.stringify(response);
    const resData = JSON.parse(answerStringify)._body;
    const dataFinal = JSON.parse(resData);
    return dataFinal;
  }
  public goToBoard(item) {
    window.open(item.url, "_blank");
  }

  public favoriteBoard(item, event: CdkDragDrop<string[]>) {
    this.listFav.push(item);
    let sinRepetidos = this.listFav.filter((valorActual, indiceActual, arreglo) => {
      //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
      return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
    });
    this.listboardUser.splice(item, 0)
    transferArrayItem(this.listboardUser,
      sinRepetidos,
      event.previousIndex,
      event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public search(){   
    this.boardService.searchBoard(this.query).then(dataService => {
      const dataFinal = this.interpretedResponse(dataService)
      if (dataFinal.boards.length > 0) {
        this.listboardUser = dataFinal.boards;
      } else {
        this.toasterService.pop('warning', '', 'No hay tableros disponibles');
      }
    }).catch(error => {
      this.listBoard()
      console.log(error); });
  }
}
