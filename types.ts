export enum CommissionStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  WAITLIST = 'WAITLIST'
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  iconName: string; // We will map string names to icons
  color?: string; // Optional override color
}

export interface AppConfig {
  artistName: string;
  tagline: string;
  profileImage: string;
  status: CommissionStatus;
  links: LinkItem[];
}
