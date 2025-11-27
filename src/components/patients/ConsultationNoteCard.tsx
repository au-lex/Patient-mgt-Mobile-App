import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Note } from '../../types';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';

export const ConsultationNoteCard: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.desc}>{note.description}</Text>
      <View style={styles.dateRow}>
        <Ionicons name="calendar-outline" size={14} color={COLORS.primary} />
        <Text style={styles.date}>{note.date}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>View Full Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: SPACING.m,
    marginBottom: SPACING.l,
  },
  title: { fontSize: 14, fontWeight: '700', color: COLORS.text, marginBottom: 4 },
  desc: { fontSize: 13, color: COLORS.textSecondary, lineHeight: 20, marginBottom: SPACING.s },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: SPACING.s },
  date: { fontSize: 12, color: COLORS.textSecondary },
  btn: { borderWidth: 1, borderColor: COLORS.primary, borderRadius: 20, paddingVertical: 8, alignItems: 'center' },
  btnText: { color: COLORS.primary, fontSize: 12, fontWeight: '600' },
});