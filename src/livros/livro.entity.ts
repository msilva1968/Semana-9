import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'livros' })
export class LivroEntity {
  @PrimaryGeneratedColumn('uuid')
  isbn: string;

  @Column({ name: 'titulo', length: 100, nullable: false })
  titulo: string;

  @Column({ name: 'sinopse', length: 500, nullable: false })
  sinopse: string;

  @Column({ name: 'sumario', length: 500, nullable: false })
  sumario: string;

  @Column({ name: 'preco', nullable: true })
  preco: number;

  @Column({ name: 'publicacao', nullable: true })
  publicacao: Date;

  @Column({ name: 'idcategoria', nullable: true })
  idcategoria: string;

  @Column({ name: 'idautor', nullable: true })
  idautor: string;
}
