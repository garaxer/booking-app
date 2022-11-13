import { Injectable } from '@nestjs/common';
import { Booking, CreateBookingDto } from './dto/booking.dto';

@Injectable()
export class BookingService {
  create(createBooking: CreateBookingDto) {
    return new CreateBookingDto(createBooking);
  }

  getAllBookings(): Booking[] {
    return [
      { id: '1', title: 'foo', users: [] },
      { id: '2', title: 'bar', users: [] },
    ];
  }
}
