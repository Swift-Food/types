import { EventStatus, EventFormat } from '../enums';
import { CreateAddressRequest } from '../common';
import { CreateEventTicketRequest } from './ticket.requests';

export interface CreateEventRequest {
  name: string;
  description?: string;
  eventImage?: string;
  eventColor?: string;
  eventTheme?: string;
  startDateTime: string;
  endDateTime: string;
  isPrivate?: boolean;
  requiresApproval?: boolean;
  hideFullAddress?: boolean;
  format?: EventFormat;
  virtualMeetingUrl?: string;
  virtualCapacity?: number;
  virtualLinkAvailableMins?: number;
  status?: EventStatus;
  ownerEventUserId: string;
  addressData?: CreateAddressRequest;
  categoryIds: string[];
  subcategoryIds?: string[];
  tickets?: CreateEventTicketRequest[];
  acceptingNewTickets?: boolean;
  stopAcceptingOnStart?: boolean;
}

export interface UpdateEventRequest {
  name?: string;
  description?: string;
  eventImage?: string;
  eventColor?: string;
  eventTheme?: string;
  startDateTime?: string;
  endDateTime?: string;
  isPrivate?: boolean;
  requiresApproval?: boolean;
  hideFullAddress?: boolean;
  format?: EventFormat;
  virtualMeetingUrl?: string;
  virtualCapacity?: number;
  virtualLinkAvailableMins?: number;
  status?: EventStatus;
  addressData?: CreateAddressRequest;
  categoryIds?: string[];
  subcategoryIds?: string[];
  acceptingNewTickets?: boolean;
  stopAcceptingOnStart?: boolean;
}

export interface EventsQueryParams {
  skip?: number;
  take?: number;
  search?: string;
  status?: EventStatus;
  isPrivate?: boolean;
  startDate?: string;
  endDate?: string;
  today?: boolean;
  currentMonth?: boolean;
  category?: string;
  subcategoryId?: string;
  subcategory?: string;
  sortBy?: 'startDateTime' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  ownerId?: string;
  includePast?: boolean;
}
