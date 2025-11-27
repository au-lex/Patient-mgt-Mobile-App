import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronRight, ChevronDown } from 'lucide-react-native';
import { Avatar } from '../common/Avatar';
import { PatientDetailCard } from './PatientDetailCard';
import { Patient } from '../../types';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {
  patient: Patient;
  onOpenNotes: (patient: Patient) => void;
}

export const PatientCard: React.FC<Props> = ({ patient, onOpenNotes }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggle} style={styles.header} activeOpacity={0.7}>
        <Avatar url={patient.avatarUrl} />
        <View style={styles.info}>
          <Text style={styles.name}>{patient.name}</Text>
          <Text style={styles.meta}>{patient.gender} • Age: {patient.age}</Text>
        </View>
        {expanded ? <ChevronDown color={COLORS.textSecondary} /> : <ChevronRight color={COLORS.textSecondary} />}
      </TouchableOpacity>

      {expanded && (
        <PatientDetailCard 
          patient={patient} 
          onOpenNotes={() => onOpenNotes(patient)} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: SPACING.m,
    padding: SPACING.m,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  info: { flex: 1, marginLeft: SPACING.m },
  name: { fontSize: 16, fontWeight: '700', color: COLORS.text },
  meta: { fontSize: 14, color: COLORS.textSecondary, marginTop: 2 },
});