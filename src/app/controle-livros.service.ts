import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {

  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'O Programador Pragmático', resumo: 'Um guia seminal sobre as melhores práticas e armadilhas do desenvolvimento de software.', autores: ['Andrew Hunt', 'David Thomas'] },
    { codigo: 2, codEditora: 2, titulo: 'Refactoring', resumo: 'Um guia para transformar bases de código existentes, melhorando sua manutenibilidade e legibilidade.', autores: ['Martin Fowler'] },
    { codigo: 3, codEditora: 3, titulo: 'Entendendo Algoritmos', resumo: 'Um guia ilustrado e acessível para programadores que visam desmistificar conceitos complexos de ciência da computação sem exigir matemática avançada.', autores: ['Aditya Y. Bhargava'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.reduce((max, l) => l.codigo > max ? l.codigo : max, 0);
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
