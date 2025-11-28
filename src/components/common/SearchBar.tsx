import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={COLORS.textSecondary} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search by patient"
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: SPACING.m,
    height: 48,
    marginBottom: SPACING.l,
  },
  icon: {
    marginRight: SPACING.s,
  },
  input: {
    flex: 1,
    height: '100%',
    color: COLORS.text,
  },
});