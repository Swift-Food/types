export enum EventStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum EventFormat {
  IN_PERSON = 'in_person',
  VIRTUAL = 'virtual',
  BOTH = 'both',
}

export enum GuestTicketStatus {
  PENDING_APPROVAL = 'pending_approval',
  PENDING_PAYMENT = 'pending_payment',
  ACTIVE = 'active',
  CHECKED_IN = 'checked_in',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  WAITLISTED = 'waitlisted',
  EXPIRED = 'expired',
}

export enum ReservationMode {
  IMMEDIATE = 'immediate',
  ON_ACCEPTANCE = 'on_acceptance',
}

export enum CollaboratorRole {
  ADMIN = 'admin',
  SCANNER = 'scanner',
}

export enum CalendarRole {
  ADMIN = 'admin',
  CONTRIBUTOR = 'contributor',
}

export enum CalendarType {
  PERSONAL = 'personal',
  TEAM = 'team',
}

export enum HighlightMediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  MIXED = 'mixed',
}

export enum GroupPurchaseSessionStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  EXPIRED = 'expired',
  DISSOLVED = 'dissolved',
}

export enum GroupPurchaseInviteStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
  KICKED = 'kicked',
}

export enum BlacklistAppealStatus {
  NONE = 'none',
  PENDING = 'pending',
  APPROVED = 'approved',
  DENIED = 'denied',
}

export enum QuestionType {
  SHORT_TEXT = 'shortText',
  LONG_TEXT = 'longText',
  SINGLE_SELECT = 'singleSelect',
  MULTI_SELECT = 'multiSelect',
}
