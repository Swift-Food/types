export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterEventUserRequest {
  email: string;
  password: string;
  username: string;
  firstName?: string;
  lastName?: string;
  inviteToken?: string;
  inviteType?: 'collaborator' | 'ticket' | 'calendar';
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
  inviteToken?: string;
  inviteType?: 'collaborator' | 'ticket' | 'calendar';
}

export interface GoogleAuthRequest {
  idToken: string;
  inviteToken?: string;
  inviteType?: 'collaborator' | 'ticket' | 'calendar';
}

export interface AppleAuthRequest {
  idToken: string;
  firstName?: string;
  lastName?: string;
  inviteToken?: string;
  inviteType?: 'collaborator' | 'ticket' | 'calendar';
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}
