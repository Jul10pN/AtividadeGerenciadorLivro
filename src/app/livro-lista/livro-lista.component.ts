import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent
  implements OnInit, OnDestroy {

  livros: Livro[] = []
  private livroSubscription: Subscription;

  constructor(public livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getLivros();
    this.livroSubscription = this.livroService
    .getListaDeLivrosAtualizadaObservable()
    .subscribe(
      (livros: Livro[]) => {
        this.livros = livros;
      }
    );
  }

  ngOnDestroy(): void {
    this.livroSubscription.unsubscribe();
  }

}
