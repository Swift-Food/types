import { QuestionType } from '../enums';

export interface CreateEventTicketRequest {
  id?: string;
  eventId?: string;
  name: string;
  description?: string;
  price?: number;
  isPaid: boolean;
  isSingleUse?: boolean;
  quantityTotal: number;
  questionForm?: QuestionBlockRequest[];
  isPrivate?: boolean;
  autoApprovalGuestEmails?: string[];
  salesStartDate?: string;
  salesEndDate?: string;
  maxGroupSize?: number;
}

export interface UpdateEventTicketRequest {
  name?: string;
  description?: string;
  price?: number;
  isPaid?: boolean;
  isSingleUse?: boolean;
  quantityTotal?: number;
  questionForm?: QuestionBlockRequest[];
  isPrivate?: boolean;
  autoApprovalGuestEmails?: string[];
  salesStartDate?: string;
  salesEndDate?: string;
  maxGroupSize?: number;
}

export interface QuestionBlockRequest {
  question: string;
  type: QuestionType;
  options?: string[];
  required: boolean;
}

export interface RegisterTicketRequest {
  ticketId: string;
  guestFirstName: string;
  guestLastName: string;
  guestEmail: string;
  questionFormResponses?: Record<string, string>;
  quantity?: number;
}
