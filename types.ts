import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string; // Tailwind bg class for the card
}

export interface PriceItem {
  title: string;
  price: string;
  description: string;
  colorClass: string;
}

export const APPOINTMENT_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Eg92Ya3cO1fI1suNxGh6RUDoJ2PlfzaUbAtPNQl40MDeWp-griy6G__H8vX3nFLx7EQAhM3NG";