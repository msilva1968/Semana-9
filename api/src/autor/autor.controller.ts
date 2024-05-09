import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AtualizaAutorDTO } from './dto/AtualizaAutor.dto';
import { CriaAutorDTO } from './dto/CriaAutor.dto';
import { AutorEntity } from './autor.entity';
import { AutorService } from './autor.service';

@Controller('autor')
export class AutorController {
  constructor(private readonly autorService: AutorService) {}

  @Post()
  async criaNovo(@Body() dadosAutor: CriaAutorDTO) {
    const autor = new AutorEntity();

    autor.id = randomUUID();
    autor.nome = dadosAutor.nome;
    autor.email = dadosAutor.email;
    autor.biografia = dadosAutor.biografia;

    const autorCadastrado = this.autorService.criaAutor(autor);
    return autorCadastrado;
  }

  @Get()
  async listaTodos() {
    return this.autorService.listaAutor();
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: string,
    @Body() dadosAutor: AtualizaAutorDTO,
  ) {
    const autorAlterado = await this.autorService.atualizaAutor(id, dadosAutor);

    return {
      mensagem: 'Autor atualizado com sucesso',
      autor: autorAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const autorRemovido = await this.autorService.deletaAutor(id);

    return {
      mensagem: 'Altor excluido com sucesso',
      autor: autorRemovido,
    };
  }
}
