import { EventStatus, EventFormat, GuestTicketStatus } from '../enums';
import { AddressResponse } from '../common';
import { CollaboratorResponse } from './collaborator.responses';

export interface EventOwnerResponse {
  id: string;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  organizationName: string | null;
  user?: {
    id: string;
    email: string;
    username: string;
    profilePicture: string | null;
  };
}

export interface EventCategoryResponse {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: string;
  eventCount?: number;
}

export interface EventSubcategoryResponse {
  id: string;
  name: string;
  description: string;
  iconName: string;
  categoryId: string;
  displayOrder: number;
  category?: EventCategoryResponse;
}

export interface EventTicketResponse {
  id: string;
  name: string;
  description: string | null;
  price: string;
  quantityTotal?: number;
  quantitySold?: number;
  quantityLeft?: number;
  isPrivate: boolean;
  salesStartDate: string | null;
  salesEndDate: string | null;
  isAvailable: boolean;
  isSoldOut: boolean;
  isNearlySoldOut: boolean;
  questionForm: QuestionBlock[] | null;
}

export interface QuestionBlock {
  question: string;
  type: 'shortText' | 'longText' | 'singleSelect' | 'multiSelect';
  options?: string[];
  required: boolean;
}

export interface UserTicketResponse {
  id: string;
  status: GuestTicketStatus;
  ticketName: string;
  ticketId: string;
  checkInCode: string | null;
  qrCodeImageUrl: string | null;
  purchaseDateTime: string | null;
  checkInDateTime: string | null;
}

export interface EventResponse {
  id: string;
  name: string;
  description: string | null;
  eventImage: string | null;
  eventColor: string;
  eventTheme: string | null;
  startDateTime: string;
  endDateTime: string;
  status: EventStatus;
  isPrivate: boolean;
  requiresApproval: boolean;
  format: EventFormat;
  virtualMeetingUrl: string | null;
  isTrustedMeetingUrl: boolean;
  virtualCapacity: number | null;
  virtualLinkAvailableMins?: number;
  eventUrl: string | null;
  externalEventUrl: string | null;
  viewCount: number;
  acceptingNewTickets: boolean;
  stopAcceptingOnStart: boolean;
  hideFullAddress: boolean;
  createdAt: string;
  updatedAt: string;
  owner: EventOwnerResponse;
  address: AddressResponse | null;
  categories: EventCategoryResponse[];
  subcategories: EventSubcategoryResponse[];
  eventTickets?: EventTicketResponse[];
  collaborators?: CollaboratorResponse[];
  ticketsSoldCount?: number;
  attendeesCount?: number;
  userTicket?: UserTicketResponse | null;
}

export interface EventListResponse {
  events: EventResponse[];
  total: number;
  skip: number;
  take: number;
}

export interface CreateEventResponse {
  success: boolean;
  message: string;
  event: EventResponse;
}

export interface UpdateEventResponse {
  success: boolean;
  message: string;
  event: EventResponse;
}
