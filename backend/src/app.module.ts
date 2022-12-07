import { Module } from '@nestjs/common';
import { AppController } from './chat/app.controller';
import { AppService } from './chat/app.service';
import { EventsModule } from './events/events.module'

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
