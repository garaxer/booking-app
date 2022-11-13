import { Injectable, Scope, Inject } from '@nestjs/common';
import { Booking, CreateBookingDto } from './dto/booking.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
@Injectable()
export class BookingService {
  constructor(@Inject(REQUEST) private request: Request) {}
  create(createBooking: CreateBookingDto) {
    console.log({ request: this.request });
    // Record the logged in user's id and then only allow deleting by that user.
    return new CreateBookingDto(createBooking);
  }

  getAllBookings(): Booking[] {
    return [
      { id: '1', title: 'foo', users: [] },
      { id: '2', title: 'bar', users: [] },
    ];
  }
}
