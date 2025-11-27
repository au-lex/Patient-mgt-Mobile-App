import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Patient } from '../../types';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';

interface Props {
  patient: Patient;
  onOpenNotes: () => void;
}

export const PatientDetailCard: React.FC<Props> = ({ patient, onOpenNotes }) => {
  return (
    <View style={styles.container}>
      {/* Appointments */}
      <View style={styles.appointmentRow}>
        <View style={styles.apptItem}>
          <Ionicons name="calendar-outline" size={14} color={COLORS.primary} style={{ marginBottom: 4 }} />
          <Text style={styles.label}>Last appointment</Text>
          <Text style={styles.value}>{patient.lastAppointment}</Text>
        </View>
        <View style={styles.apptItem}>
          <Ionicons name="calendar-outline" size={14} color={COLORS.primary} style={{ marginBottom: 4 }} />
          <Text style={styles.label}>Upcoming</Text>
          <Text style={styles.value}>{patient.upcomingAppointment}</Text>
        </View>
      </View>

      {/* Contact */}
      <Text style={styles.sectionHeader}>Contact Information</Text>
      <View style={styles.contactRow}>
        <Ionicons name="call-outline" size={14} color={COLORS.textSecondary} />
        <Text style={styles.contactText}>{patient.phone}</Text>
      </View>
      <View style={styles.contactRow}>
        <Ionicons name="mail-outline" size={14} color={COLORS.textSecondary} />
        <Text style={styles.contactText}>{patient.email}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.outlineBtn}>
          <Text style={styles.outlineText}>View profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn} onPress={onOpenNotes}>
          <Text style={styles.primaryText}>Consultation Notes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.m,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: SPACING.m,
  },
  appointmentRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    borderRadius: 8,
    padding: SPACING.s,
    marginBottom: SPACING.m,
  },
  apptItem: { flex: 1, alignItems: 'center' },
  label: { fontSize: 11, color: COLORS.textSecondary },
  value: { fontSize: 13, fontWeight: '600', color: COLORS.text, marginTop: 2 },
  sectionHeader: { fontSize: 14, fontWeight: '500', marginBottom: SPACING.s },
  contactRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  contactText: { fontSize: 14, color: COLORS.textSecondary },
  buttonRow: { flexDirection: 'row', gap: SPACING.m, marginTop: SPACING.m },
  outlineBtn: {
    flex: 1, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: COLORS.primary, alignItems: 'center'
  },
  outlineText: { color: COLORS.primary, fontWeight: '600', fontSize: 13 },
  primaryBtn: {
    flex: 1, padding: 10, borderRadius: 20, backgroundColor: COLORS.primary, alignItems: 'center'
  },
  primaryText: { color: COLORS.white, fontWeight: '600', fontSize: 13 },
});