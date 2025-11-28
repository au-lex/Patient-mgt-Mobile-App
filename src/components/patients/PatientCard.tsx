import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '../common/Avatar';
import { PatientDetailCard } from './PatientDetailCard';
import { Patient } from '../../types';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';
import { FONTS } from '../../utils/font';

interface Props {
  patient: Patient;
  onOpenNotes: (patient: Patient) => void;
}

export const PatientCard: React.FC<Props> = ({ patient, onOpenNotes }) => {
  const [expanded, setExpanded] = useState(false);
  const animationRef = useRef<any>(null);

  const toggle = async () => {
    if (expanded) {
      // Animate out before closing
      await animationRef.current?.fadeOutUp(200);
      setExpanded(false);
    } else {
      // Open and animate in
      setExpanded(true);
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity 
        onPress={toggle} 
        style={styles.header} 
        activeOpacity={0.7}
      >
        <Avatar url={patient.avatarUrl} />
        <View style={styles.info}>
          <Text style={styles.name}>{patient.name}</Text>
          <Text style={styles.meta}>{patient.gender} • Age: {patient.age}</Text>
        </View>
        <Ionicons 
          name={expanded ? "chevron-down" : "chevron-forward"} 
          size={24} 
          color={COLORS.textSecondary} 
        />
      </TouchableOpacity>

      {expanded && (
        <Animatable.View
          ref={animationRef}
          animation="fadeInDown"
          duration={300}
          easing="ease-out"
        >
          <PatientDetailCard 
            patient={patient} 
            onOpenNotes={() => onOpenNotes(patient)} 
          />
        </Animatable.View>
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
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  info: { 
    flex: 1, 
    marginLeft: SPACING.m 
  },
  name: { 
    fontSize: 16, 
    fontFamily: FONTS.bold,
    color: COLORS.text 
  },
  meta: { 
    fontSize: 14, 
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary, 
    marginTop: 2 
  },
});