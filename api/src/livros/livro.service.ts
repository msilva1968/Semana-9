import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaLivroDTO } from './dto/Listalivro.dto';
import { LivroEntity } from './livro.entity';
import { Repository } from 'typeorm';
import { AtualizaLivroDTO } from './dto/AtualizaLivro.dto';

@Injectable()
export class LivroService {
  constructor(
    @InjectRepository(LivroEntity)
    private readonly livroRepository: Repository<LivroEntity>,
  ) {}

  async criaLivro(livroEntity: LivroEntity) {
    await this.livroRepository.save(livroEntity);
  }

  async listaLivro() {
    const livroSalvo = await this.livroRepository.find();

    const livroLista = livroSalvo.map(
      (livro) => new ListaLivroDTO(livro.titulo, livro.sinopse),
    );
    return livroLista;
  }

  async atualizaLivro(isbn: string, novosDados: AtualizaLivroDTO) {
    const entityName = await this.livroRepository.findOneBy({ isbn });
    Object.assign(entityName, novosDados);
    await this.livroRepository.save(entityName);
  }

  async deletaLivro(isbn: string) {
    await this.livroRepository.delete(isbn);
  }
}
