import { IsOptional, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class AtualizaLivroDTO {
  @IsNotEmpty({ message: 'O título não pode ser vazio!' })
  @IsOptional()
  titulo: string;

  @IsNotEmpty({ message: 'A sinopse não pode ser vazia!' })
  @MinLength(100, {
    message: 'A sinopse precisa ter pelo menos 100 caracteres!',
  })
  @MaxLength(500, {
    message: 'A sinopse precisa ter no máximo 500 caracteres!',
  })
  @IsOptional()
  sinopse: string;

  @IsNotEmpty({ message: 'O sumario não pode ser vazio!' })
  @MinLength(100, {
    message: 'O sumario precisa ter pelo menos 100 caracteres!',
  })
  @MaxLength(500, {
    message: 'O sumario precisa ter no máximo 500 caracteres!',
  })
  @IsOptional()
  sumario: string;

  @IsNotEmpty({ message: 'O preço não pode ser vazio!' })
  @IsOptional()
  preco: number;

  @IsNotEmpty({ message: 'A data de publicação não pode ser vazia!' })
  @IsOptional()
  publicacao: Date;

  @IsNotEmpty({ message: 'A categoria não pode ser vazio!' })
  @IsOptional()
  idcategoria: string;

  @IsNotEmpty({ message: 'O autor não pode ser vazio!' })
  @IsOptional()
  idautor: string;
}
