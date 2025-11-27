export interface Note {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  avatarUrl: string;
  status: 'Active' | 'Pending' | 'Past';
  lastAppointment: string;
  upcomingAppointment: string;
  phone: string;
  email: string;
  notes: Note[];
}