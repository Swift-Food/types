import { HighlightMediaType } from '../enums';

export interface HighlightOwnerResponse {
  id: string;
  organizationName: string;
  profilePicture?: string;
}

// Media item within a highlight (supports multiple images/videos)
export interface HighlightMediaItem {
  url: string;
  type: 'image' | 'video';
  duration?: number; // seconds, for videos
  thumbnailUrl?: string; // for videos
}

export interface HighlightResponse {
  id: string;
  mediaItems: HighlightMediaItem[];
  mediaType: HighlightMediaType;
  caption?: string;
  calendarId?: string;
  expiresAt: string | null;
  createdAt: string;
  owner?: HighlightOwnerResponse;
}

export interface HighlightListResponse {
  highlights: HighlightResponse[];
  total: number;
  skip: number;
  take: number;
}
