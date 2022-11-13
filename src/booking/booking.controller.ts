import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOkResponse } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { Booking, CreateBookingDto, BookingDto } from './dto/booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: BookingDto })
  @Post()
  async create(@Body() booking: CreateBookingDto): Promise<Booking> {
    return this.bookingService.create(booking);
  }

  @Get()
  @ApiOkResponse({ type: [BookingDto] })
  async get(): Promise<Booking[]> {
    return this.bookingService.getAllBookings();
  }
}
