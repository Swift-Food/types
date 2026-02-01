import { CalendarType, CalendarRole } from '../enums';
import { EventResponse } from './event.responses';

export interface CalendarOwnerResponse {
  id: string;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  organizationName: string | null;
  user?: {
    id: string;
    email: string;
    username: string;
    profilePicture: string;
  };
}

export interface CalendarAddressResponse {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  flat?: string;
  city: string;
  zipcode: string;
  placeId?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface CalendarCollaboratorResponse {
  id: string;
  calendarId: string;
  eventUserId: string | null;
  role: CalendarRole;
  inviteAccepted: boolean;
  pendingEmail: string | null;
  createdAt: string;
  eventUser?: CalendarOwnerResponse;
}

export interface CalendarResponse {
  id: string;
  name: string;
  description: string | null;
  calendarImage: string | null;
  calendarColor: string;
  ownerEventUserId: string;
  calendarUrl: string;
  calendarType: CalendarType;
  isPublic: boolean;
  addressId: string | null;
  subscriberCount: number;
  showSubscriberCount: boolean;
  eventCount?: number;
  autoDeletePastEventsAfterDays: number | null;
  createdAt: string;
  updatedAt: string;
  owner?: CalendarOwnerResponse;
  address?: CalendarAddressResponse;
  collaborators?: CalendarCollaboratorResponse[];
}

export interface CalendarListResponse {
  calendars: CalendarResponse[];
  total: number;
  skip: number;
  take: number;
}

export interface CalendarEventsResponse {
  events: EventResponse[];
  upcomingCount: number;
  pastCount: number;
}
