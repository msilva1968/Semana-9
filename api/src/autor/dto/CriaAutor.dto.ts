import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CriaAutorDTO {
  id: string;

  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido!' })
  email: string;

  @MinLength(100, {
    message: 'A biografia precisa ter pelo menos 100 caracteres!',
  })
  @MaxLength(500, {
    message: 'A biografia precisa ter no máximo 500 caracteres!',
  })
  biografia: string;
}
