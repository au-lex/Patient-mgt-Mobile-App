import { create } from 'zustand';
import { Patient } from '../types';
import { MOCK_PATIENTS } from '../data/mockPatients';

interface PatientState {
  patients: Patient[];
  searchQuery: string;
  activeFilter: string;
  setSearchQuery: (query: string) => void;
  setActiveFilter: (filter: string) => void;
  getFilteredPatients: () => Patient[];
}

export const usePatientStore = create<PatientState>((set, get) => ({
  patients: MOCK_PATIENTS,
  searchQuery: '',
  activeFilter: 'All patients',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  getFilteredPatients: () => {
    const { patients, searchQuery, activeFilter } = get();
    return patients.filter((p) => {
      const matchesFilter = activeFilter === 'All patients' || p.status === activeFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  },
}));