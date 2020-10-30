import { Injectable } from '@angular/core';
import { Livro } from './livro.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  constructor() { }

  private livros: Livro [] = [];

  private listaLivrosAtualizada = new Subject<Livro[]>();

  getLivros(): Livro[] {
    return [...this.livros];

  }

  adicionarLivro(id: string, titulo: string, autor: string, paginas: string): void {
    const livro: Livro = {
      id: id,
      titulo: titulo,
      autor: autor,
      paginas: paginas,
    };
    this.livros.push(livro);

    this.listaLivrosAtualizada.next([...this.livros]);
  }

  getListaDeLivrosAtualizadaObservable() {
    return this.listaLivrosAtualizada.asObservable();
  }

}
