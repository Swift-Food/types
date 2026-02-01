import { GuestTicketStatus, ReservationMode } from '../enums';
import { EventUserResponse } from './user.responses';

export interface GuestTicketResponse {
  id: string;
  eventId: string;
  eventName: string;
  guestEventUserId: string;
  eventTicketId: string;
  ticketName: string;
  status: GuestTicketStatus;
  guest: EventUserResponse;
  questionAnswers: Record<string, any> | null;
  qrCode: string | null;
  qrCodeImageUrl: string | null;
  /** Short 8-character check-in code for manual entry (raw, no hyphen) */
  checkInCode: string | null;
  /** Formatted check-in code with hyphen for display (e.g., "ABCD-1234") */
  checkInCodeFormatted: string | null;
  purchaseDateTime: string | null;
  checkInDateTime: string | null;
  /** Deadline for claiming a promoted waitlist ticket (paid tickets only) */
  claimDeadline: string | null;
  /** Whether this ticket was originally on the waitlist */
  wasWaitlisted: boolean;
  /** Reason for cancellation/rejection (provided by organizer) */
  cancelledReason: string | null;
  /** Who cancelled/rejected this ticket */
  cancelledByEventUserId: string | null;
  /** Who initiated the refund (userId) */
  refundedByUserId: string | null;
  /** When the ticket was refunded */
  refundedAt: string | null;
  /** Reason for refund */
  refundReason: string | null;
  // Group purchase fields
  /** Group purchase ID - links all tickets bought in the same transaction */
  groupPurchaseId: string | null;
  /** Guest's first name (for group purchases) */
  guestFirstName: string | null;
  /** Guest's last name (for group purchases) */
  guestLastName: string | null;
  /** Guest's email (for group purchases) */
  guestEmail: string | null;
  /** Whether this is the primary ticket in a group purchase */
  isPrimaryTicket: boolean;
  /** Reference to the buyer's ticket in a group purchase */
  primaryTicketId: string | null;
  createdAt: string;
  updatedAt: string;
}

// Extended DTO with full event details for profile/dashboard pages
export interface GuestTicketWithEventResponse extends GuestTicketResponse {
  eventStartDateTime: string;
  eventEndDateTime: string;
  eventImage: string | null;
  eventStatus: string;
  ticketPrice: number; // Price of the ticket (0 for free tickets)
  eventFormat: string | null;
  virtualMeetingUrl: string | null;
  /** Minutes before event start when virtual link becomes visible. 0 = always visible. */
  virtualLinkAvailableMins: number;
}

export interface MyTicketsResponse {
  tickets: GuestTicketWithEventResponse[];
  total: number;
}

export interface RegisterTicketResponse {
  success: boolean;
  message: string;
  guestTicket: GuestTicketResponse;
  requiresPayment: boolean;
  paymentUrl?: string;
  /** Whether the user was added to the waitlist (ticket was sold out) */
  isWaitlisted?: boolean;
  /** User's position in the waitlist (1-indexed) */
  waitlistPosition?: number;
  /** Total number of people in the waitlist */
  waitlistTotal?: number;
}

export interface AcceptTicketInviteResponse {
  success: boolean;
  message: string;
  event: {
    id: string;
    name: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    eventImage?: string;
  };
  ticket: {
    id: string;
    name: string;
    isPaid: boolean;
    bypassPayment: boolean;
  };
  requiresLogin: boolean;
  requiresPayment: boolean;
  paymentUrl?: string;
}

// Admin-only ticket response with additional fields
export interface AdminTicketResponse {
  id: string;
  eventId: string;
  eventName: string;
  guestEmail: string;
  guestName: string;
  guest: EventUserResponse;
  ticketName: string;
  status: GuestTicketStatus;
  questionAnswers: Record<string, any> | null;
  registeredAt: string;
  approvedRejectedAt?: string;
  approvedRejectedBy?: string;
}

export interface PendingTicketsResponse {
  pending: AdminTicketResponse[];
  waitlist: AdminTicketResponse[];
  total: number;
}

export interface GenerateTicketInviteLinkResponse {
  success: boolean;
  inviteLink: string;
  token: string;
  eventTicketName: string;
  bypassPayment: boolean;
  bypassApproval: boolean;
  reservationMode: ReservationMode;
  maxUses: number;
  usedCount: number;
}

export interface TicketInviteLinkListResponse {
  id: string;
  eventTicketName: string;
  inviteToken: string;
  inviteLink: string;
  bypassPayment: boolean;
  bypassApproval: boolean;
  reservationMode?: ReservationMode;
  maxUses: number;
  usedCount: number;
  createdAt: string;
  createdBy: {
    id: string;
    firstName: string;
    lastName: string;
  };
}
