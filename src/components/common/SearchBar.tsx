import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';
import { COLORS } from '../../utils/colors';
import { SPACING } from '../../utils/spacing';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Search size={20} color={COLORS.textSecondary} style={styles.icon} />
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
    borderRadius: 12, // More rounded as per figma
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