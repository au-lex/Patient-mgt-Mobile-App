import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, ScrollView,  } from 'react-native';
import { usePatientStore } from '../store/patientStore';
import { PatientCard } from '../components/patients/PatientCard';
import { SearchBar } from '../components/common/SearchBar';
import { ConsultationNoteCard } from '../components/patients/ConsultationNoteCard';
import { Patient } from '../types';
import { COLORS } from '../utils/colors';
import { SPACING } from '../utils/spacing';
import { FONTS } from '../utils/font';

const TABS = ['All patients', 'Active', 'Pending', 'Past'];

export const PatientsScreen = () => {
  const { searchQuery, setSearchQuery, activeFilter, setActiveFilter, getFilteredPatients } = usePatientStore();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  
  const patients = getFilteredPatients();

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Patients</Text>

        {/* Tab Filter */}
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <TouchableOpacity 
              key={tab} 
              onPress={() => setActiveFilter(tab)}
              style={[styles.tabItem, activeFilter === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeFilter === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

        <FlatList
          data={patients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PatientCard patient={item} onOpenNotes={setSelectedPatient} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        {/* Modal */}
        <Modal
          visible={!!selectedPatient}
          transparent
          animationType="slide"
          onRequestClose={() => setSelectedPatient(null)}
        >
          <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1} 
            onPress={() => setSelectedPatient(null)}
          >
            <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
              <View style={styles.modalHandle} />
              <Text style={styles.modalTitle}>Consultation notes</Text>
              <ScrollView style={styles.scrollView}>
                {selectedPatient?.notes.map((note) => (
                  <ConsultationNoteCard key={note.id} note={note} />
                ))}
                {selectedPatient?.notes.length === 0 && (
                  <Text style={styles.emptyText}>No notes available.</Text>
                )}
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  container: { 
    flex: 1, 
    paddingHorizontal: SPACING.m 
  },
  headerTitle: { 
    fontSize: 18, 
    fontFamily: FONTS.semibold,
    color: COLORS.text, 
    textAlign: 'center', 
    marginVertical: SPACING.l
  },
  tabs: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: SPACING.m, 
    borderBottomWidth: 1, 
    borderColor: COLORS.border 
  },
  tabItem: { 
    paddingBottom: 8, 
    borderBottomWidth: 2, 
    borderBottomColor: 'transparent' 
  },
  activeTab: { 
    borderBottomColor: COLORS.primary 
  },
  tabText: { 
    color: COLORS.textSecondary, 
    fontSize: 14,
    fontFamily: FONTS.regular
  },
  activeTabText: { 
    color: COLORS.primary, 
    fontFamily: FONTS.semibold
  },
  listContent: {
    paddingBottom: 100
  },
  
  // Modal
  modalOverlay: { 
    flex: 1, 
    backgroundColor: COLORS.overlay, 
    justifyContent: 'flex-end' 
  },
  modalContent: { 
    backgroundColor: COLORS.white, 
    borderTopLeftRadius: 24, 
    borderTopRightRadius: 24, 
    height: '65%', 
    padding: SPACING.l 
  },
  modalHandle: { 
    width: 40, 
    height: 4, 
    backgroundColor: COLORS.border, 
    borderRadius: 2, 
    alignSelf: 'center', 
    marginBottom: SPACING.m 
  },
  modalTitle: { 
    fontSize: 18, 
    fontFamily: FONTS.bold,
    textAlign: 'center', 
    color: COLORS.text 
  },
  scrollView: {
    marginTop: SPACING.m
  },
  emptyText: { 
    textAlign: 'center', 
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary, 
    marginTop: 20 
  },
});