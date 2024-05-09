import { Module } from '@nestjs/common';
import { AutorController } from './autor.controller';
import { AutorEntity } from './autor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorService } from './autor.service';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
