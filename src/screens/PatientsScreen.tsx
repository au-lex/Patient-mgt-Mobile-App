import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, ScrollView, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
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
  const {
    searchQuery,
    setSearchQuery,
    activeFilter,
    setActiveFilter,
    getFilteredPatients,
    fetchPatients,
    isLoading,
    error
  } = usePatientStore();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [expandedPatientId, setExpandedPatientId] = useState<string | null>(null);

  const patients = getFilteredPatients();

  const listAnimRef = useRef<any>(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleTogglePatient = (patientId: string) => {
    setExpandedPatientId(prev => prev === patientId ? null : patientId);
  };

  const handleFilterChange = (filter: string) => {
    setExpandedPatientId(null);
    if (listAnimRef.current) {
      listAnimRef.current.fadeOutDown(200).then(() => {
        setActiveFilter(filter);
        listAnimRef.current?.fadeInUp(300);
      });
    } else {
      setActiveFilter(filter);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.safeArea}>
        <View style={[styles.container, styles.centerContent]}>
          <ActivityIndicator size="large" color={COLORS.primary} />
          <Text style={styles.loadingText}>Loading patients...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.safeArea}>
        <View style={[styles.container, styles.centerContent]}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => fetchPatients()}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Patients</Text>

        {/* Tab Filter */}
        <View style={styles.tabs}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleFilterChange(tab)}
              style={[styles.tabItem, activeFilter === tab && styles.activeTab]}
            >
              <Text style={[styles.tabText, activeFilter === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

        <Animatable.View
          ref={listAnimRef}
          animation="fadeIn"
          duration={300}
          style={{ flex: 1 }}
        >
          <FlatList
            data={patients}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PatientCard
                patient={item}
                onOpenNotes={setSelectedPatient}
                isExpanded={expandedPatientId === item.id}
                onToggle={handleTogglePatient}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No patients found.</Text>
            }
          />
        </Animatable.View>

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
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center'
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
  loadingText: {
    marginTop: SPACING.m,
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary
  },
  errorText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: '#FF3B30',
    textAlign: 'center',
    marginBottom: SPACING.m,
    paddingHorizontal: SPACING.l
  },
  retryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: SPACING.m
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FONTS.semibold
  },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: COLORS.background,
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
    fontSize: 16,
    fontFamily: FONTS.medium,
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