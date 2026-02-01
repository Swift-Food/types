import { QuestionBlock } from './event.responses';

export interface TicketResponse {
  id: string;
  eventId: string;
  name: string;
  description: string | null;
  price: string;
  isSingleUse: boolean;
  quantityTotal: number;
  quantitySold: number;
  quantityLeft: number;
  questionForm: QuestionBlock[] | null;
  isPrivate: boolean;
  autoApprovalGuestEmailsCount: number;
  salesStartDate: string | null;
  salesEndDate: string | null;
  isAvailable: boolean;
  isSoldOut: boolean;
  isNearlySoldOut: boolean;
  /** Maximum group size for group ticket purchases */
  maxGroupSize: number;
  createdAt: string;
  updatedAt: string;
}

export interface PublicTicketResponse {
  id: string;
  eventId: string;
  name: string;
  description: string | null;
  price: string;
  isPrivate: boolean;
  salesStartDate: string | null;
  salesEndDate: string | null;
  isAvailable: boolean;
  isSoldOut: boolean;
  isNearlySoldOut: boolean;
  questionForm: QuestionBlock[] | null;
  /** Maximum group size for group ticket purchases */
  maxGroupSize: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTicketResponse {
  success: boolean;
  message: string;
  ticket: TicketResponse;
}

export interface UpdateTicketResponse {
  success: boolean;
  message: string;
  ticket: TicketResponse;
}
