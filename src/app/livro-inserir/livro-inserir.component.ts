import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';



import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';


@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent implements OnInit {

  onAdicionarLivro(Form: NgForm) {
    if(Form.invalid) return;
    this.livroService.adicionarLivro(
      Form.value.id,
      Form.value.titulo,
      Form.value.autor,
      Form.value.paginas
    )
  };

  constructor(public livroService: LivroService) {}

  ngOnInit(): void {
  }

}
