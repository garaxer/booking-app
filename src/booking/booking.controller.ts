import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookingService } from './booking.service';
import { Booking, CreateBookingDto } from './dtos/booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() booking: CreateBookingDto): Promise<Booking> {
    return this.bookingService.create(booking);
  }

  @Get()
  async get(): Promise<Booking[]> {
    return this.bookingService.getAllBookings();
  }
}
