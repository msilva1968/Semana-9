import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaAutorDTO } from './dto/ListaAutor.dto';
import { AutorEntity } from './autor.entity';
import { Repository } from 'typeorm';
import { AtualizaAutorDTO } from './dto/AtualizaAutor.dto';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private readonly autorRepository: Repository<AutorEntity>,
  ) {}

  async criaAutor(autorEntity: AutorEntity) {
    await this.autorRepository.save(autorEntity);
  }

  async listaAutor() {
    const autorSalvo = await this.autorRepository.find();

    const autorLista = autorSalvo.map(
      (autor) => new ListaAutorDTO(autor.id, autor.nome),
    );
    return autorLista;
  }

  async atualizaAutor(id: string, novosDados: AtualizaAutorDTO) {
    const entityName = await this.autorRepository.findOneBy({ id });
    Object.assign(entityName, novosDados);
    await this.autorRepository.save(entityName);
  }

  async deletaAutor(id: string) {
    await this.autorRepository.delete(id);
  }
}
