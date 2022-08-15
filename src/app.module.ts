import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import entities from './post/entities';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-mysql-nyc3-04501-do-user-7220305-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'dbkotowa',
      password: 'FtktBOEQa9UHFDPe',
      database: 'prueba_db',
      entities: entities,
      synchronize: true,
    }),
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
