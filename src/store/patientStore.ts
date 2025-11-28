import { create } from 'zustand';
import { Patient } from '../types';

interface PatientState {
  patients: Patient[];
  searchQuery: string;
  activeFilter: string;
  isLoading: boolean;
  error: string | null;
  setSearchQuery: (query: string) => void;
  setActiveFilter: (filter: string) => void;
  getFilteredPatients: () => Patient[];
  fetchPatients: () => Promise<void>;
}

export const usePatientStore = create<PatientState>((set, get) => ({
  patients: [],
  searchQuery: '',
  activeFilter: 'All patients',
  isLoading: false,
  error: null,
  
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
  
  fetchPatients: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch('https://casalink-be.vercel.app/api/v1/mock-patients');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch patients: ${response.statusText}`);
      }
      
      const result = await response.json();
      

      if (result.success && result.data) {
        set({ patients: result.data, isLoading: false });
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch patients';
      set({ error: errorMessage, isLoading: false, patients: [] });
      console.error('Error fetching patients:', error);
    }
  },
}));