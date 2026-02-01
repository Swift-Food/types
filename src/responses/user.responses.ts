export interface BaseUserResponse {
  id: string;
  email: string;
  username: string;
  profilePicture: string;
  role: string;
  verified: boolean;
}

export type FollowStatusType = 'following' | 'pending' | 'not_following';

export interface EventUserResponse {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  stripeAccountId: string | null;
  stripeOnboardingComplete: boolean;
  organizationName: string | null;
  bio: string | null;
  profileBannerImageUrl: string | null;
  website: string | null;
  twitterHandle: string | null;
  linkedinUrl: string | null;
  instagramUrl: string | null;
  totalEventsCreated: number;
  totalEventsAttended: number;
  totalRevenue: string;
  allowEmailNotifications: boolean;
  allowTicketReminders: boolean;
  followerCount: number;
  followingCount: number;
  isProfilePublic?: boolean;
  autoAcceptFollowers?: boolean;
  showEventAttendance?: boolean;
  notifyFollowedUserEvents?: boolean;
  followStatus?: FollowStatusType | null;
  createdAt: string;
  updatedAt: string;
  user?: BaseUserResponse;
}

export interface EventUserStatsResponse {
  totalEventsCreated: number;
  totalEventsAttended: number;
  totalRevenue: string;
  upcomingEventsCount: number;
  pastEventsCount: number;
  totalTicketsSold: number;
  stripeConnected: boolean;
}

export interface EventUserProfileResponse {
  eventUser: EventUserResponse;
  stats: EventUserStatsResponse;
  recentEvents?: any[];
}

export interface StripeConnectStatusResponse {
  hasAccount: boolean;
  accountId: string | null;
  onboardingComplete: boolean;
  chargesEnabled: boolean;
  payoutsEnabled: boolean;
  detailsSubmitted: boolean;
  accountType: 'express' | 'standard' | 'custom' | null;
  dashboardUrl: string | null;
  requiresVerification: boolean;
  verificationPending: boolean;
  currentlyDue: string[];
  eventuallyDue: string[];
  pastDue: string[];
  disabledReason: string | null;
  pendingVerification: string[];
  currentDeadline: string | null;
}

export interface StripeConnectOnboardingResponse {
  success: boolean;
  onboardingUrl?: string;
  message: string;
}

export interface StripeConnectDashboardResponse {
  success: boolean;
  url?: string;
  error?: string;
}
