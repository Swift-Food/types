export enum EventNotificationType {
  // Follower notifications
  FOLLOW_REQUEST = 'follow_request',
  NEW_FOLLOWER = 'new_follower',
  FOLLOW_ACCEPTED = 'follow_accepted',
  FOLLOWED_USER_ATTENDING = 'followed_user_attending',
  FOLLOWED_USER_NEW_EVENT = 'followed_user_new_event',
  // Attendee notifications
  WAITLIST_PROMOTED = 'waitlist_promoted',
  EVENT_CANCELLED = 'event_cancelled',
  EVENT_DETAILS_CHANGED = 'event_details_changed',
  TICKET_CONFIRMED = 'ticket_confirmed',
  PENDING_PAYMENT_REMINDER = 'pending_payment_reminder',
  // Organizer notifications
  NEW_REGISTRATION = 'new_registration',
  REGISTRATION_SUMMARY = 'registration_summary',
  COLLABORATOR_INVITE = 'collaborator_invite',
  COLLABORATOR_ACCEPTED = 'collaborator_accepted',
  COLLABORATOR_MAJOR_CHANGE = 'collaborator_major_change',
  WAITLIST_PRESSURE_ALERT = 'waitlist_pressure_alert',
  // Group purchase notifications
  GROUP_TICKET_INVITE = 'group_ticket_invite',
  GROUP_INVITE_ACCEPTED = 'group_invite_accepted',
  GROUP_INVITE_DECLINED = 'group_invite_declined',
  GROUP_KICKED = 'group_kicked',
  GROUP_DISSOLVED = 'group_dissolved',
  GROUP_EXPIRED = 'group_expired',
  GROUP_PURCHASE_COMPLETE = 'group_purchase_complete',
  // Calendar subscription notifications
  CALENDAR_NEW_EVENT = 'calendar_new_event',
}

export enum NotificationActionType {
  VIEW_PROFILE = 'view_profile',
  VIEW_EVENT = 'view_event',
  VIEW_TICKET = 'view_ticket',
  VIEW_DASHBOARD = 'view_dashboard',
  VIEW_ATTENDEE = 'view_attendee',
  VIEW_COLLABORATORS = 'view_collaborators',
  VIEW_CALENDAR = 'view_calendar',
  ACCEPT_FOLLOW = 'accept_follow',
  REJECT_FOLLOW = 'reject_follow',
  ACCEPT_COLLAB = 'accept_collab',
  REJECT_COLLAB = 'reject_collab',
  COMPLETE_PAYMENT = 'complete_payment',
  // Group purchase actions
  ACCEPT_GROUP_INVITE = 'accept_group_invite',
  DECLINE_GROUP_INVITE = 'decline_group_invite',
  VIEW_GROUP = 'view_group',
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENT = 'sent',
  FAILED = 'failed',
  DELIVERED = 'delivered',
  PARTIALLY_SENT = 'partially_sent',
}

export enum Platform {
  IOS = 'ios',
  ANDROID = 'android',
}
