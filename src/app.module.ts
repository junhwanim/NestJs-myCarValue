import { Module } from '@nestjs/common';
// import TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  // import TypeOrmModule.forRoot({}): connection to SQLite DB
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // SQLite is a file based database: store all the inforamtion
      // related to your database inside of one single file.
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
