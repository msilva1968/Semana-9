import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { AutorModule } from './autor/autor.module';
import { LivroModule } from './livros/livro.module';
import { CategoriaModule } from './categoria/categoria.module';
@Module({
  imports: [
    AutorModule,
    LivroModule,
    CategoriaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
