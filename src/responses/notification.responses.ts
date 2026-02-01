import { EventNotificationType, NotificationActionType } from '../enums';

// Related data for display
export interface RelatedUserDto {
  id: string;
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
  username: string;
}

export interface RelatedEventDto {
  id: string;
  name: string;
  eventImage: string | null;
}

export interface RelatedCalendarDto {
  id: string;
  name: string;
  calendarImage: string | null;
}

// Note: Event notifications use readAt timestamp (Date | null), NOT NotificationStatus enum
// NotificationStatus is for push notification delivery tracking only
export interface EventNotificationResponse {
  id: string;
  type: EventNotificationType;
  title: string;
  body: string | null;
  availableActions: NotificationActionType[];
  relatedEventId: string | null;
  relatedUserId: string | null;
  relatedTicketId: string | null;
  relatedCollaboratorId: string | null;
  relatedCalendarId: string | null;
  relatedUser?: RelatedUserDto;
  relatedEvent?: RelatedEventDto;
  relatedCalendar?: RelatedCalendarDto;
  readAt: string | null;
  createdAt: string;
}

export interface NotificationListResponse {
  notifications: EventNotificationResponse[];
  total: number;
  skip: number;
  take: number;
  unreadCount: number;
}

export interface UnreadCountResponse {
  count: number;
}

export interface MarkAsReadResponse {
  success: boolean;
  readAt: string;
}

export interface MarkAllAsReadResponse {
  success: boolean;
  markedCount: number;
}
