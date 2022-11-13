export type Booking = {
  id: string;
  title: string;
  users: string[];
};

export class CreateBookingDto {
  id: string;
  title: string;
  users: string[];
  constructor(partial: Partial<CreateBookingDto>) {
    Object.assign(this, partial);
  }
}
