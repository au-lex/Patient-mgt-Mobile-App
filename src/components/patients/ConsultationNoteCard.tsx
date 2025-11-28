import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Note } from '../../types';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';
import { FONTS } from '../../utils/font';

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

    paddingBottom: SPACING.m,
    marginBottom: SPACING.l,
    padding: SPACING.m,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  title: { 
    fontSize: 14, 
    fontFamily: FONTS.medium,
    color: COLORS.text, 
    marginBottom: 4 
  },
  desc: { 
    fontSize: 13, 
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary, 
    lineHeight: 20, 
    marginBottom: SPACING.s 
  },
  dateRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: SPACING.s 
  },
  date: { 
    fontSize: 12, 
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    marginLeft: 6
  },
  btn: { 
    borderWidth: 1, 
    borderColor: COLORS.primary, 
    borderRadius: 20, 
    paddingVertical: 8, 
    alignItems: 'center' 
  },
  btnText: { 
    color: COLORS.primary, 
    fontSize: 12, 
    fontFamily: FONTS.semibold
  },
});