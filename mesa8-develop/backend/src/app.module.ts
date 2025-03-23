import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './module/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'teste',
      autoLoadEntities: true,
      synchronize: true, // Em produção, defina como false
    }),
    UsersModule,
  ],
})
export class AppModule {}


/*

jeito difente de fazer a conexao com o postgre, mas usando um .env, achei interessante

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/      /*<<--     *.entity{.ts,.js}'],
        synchronize: true,  Apenas para desenvolvimento
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}*/