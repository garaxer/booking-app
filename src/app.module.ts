import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [UserModule, BookingModule, AuthzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
