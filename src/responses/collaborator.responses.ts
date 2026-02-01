import { CollaboratorRole } from '../enums';

export interface CollaboratorResponse {
  id: string;
  role: CollaboratorRole;
  inviteAccepted: boolean;
  createdAt: string;
  eventUserId?: string | null;
  eventUser?: {
    id: string;
    firstName: string;
    lastName: string;
    organizationName?: string;
  };
  pendingEmail?: string | null;
}

export interface InviteCollaboratorResponse {
  success: boolean;
  message: string;
  invitationId: string;
  inviteToken?: string;
}

export interface GenerateInviteLinkResponse {
  success: boolean;
  inviteLink: string;
  token: string;
  expiresAt?: string;
  role: CollaboratorRole;
}

export interface AcceptInviteResponse {
  success: boolean;
  message: string;
  event: {
    id: string;
    name: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
  };
  role: CollaboratorRole;
  requiresLogin: boolean;
}

export interface CollaboratorListResponse {
  success: boolean;
  collaborators: CollaboratorResponse[];
  total: number;
  accepted: number;
  pending: number;
}
