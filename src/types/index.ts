export interface Speaker {
  id: number;
  name: string;
  title: string;
  description: string;
  initials: string;
  image?: string;
}

export interface ConferenceInfo {
  name: string;
  theme: string;
  tagline: string;
  dates: string;
  time: string;
  location: string;
  cpdPoints: number;
  ticketUrl: string;
  galaDinner: {
    date: string;
    time: string;
    details: string;
  };
}

export interface Statistic {
  number: string;
  label: string;
  icon: string;
}

export interface FocusArea {
  title: string;
  icon: string;
  description: string;
}