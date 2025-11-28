import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../utils/colors';
import { SPACING } from '../utils/spacing';
import { FONTS } from '../utils/font';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Animatable.View 
          animation="fadeInDown" 
          duration={800}
          style={styles.content}
        >
          <Text style={styles.welcomeText}>Welcome Back! 👋</Text>
          <Text style={styles.subtitleText}>
            Your patient management system is ready
          </Text>
          
          <Animatable.View 
            animation="fadeInUp" 
            delay={300}
            duration={800}
            style={styles.buttonContainer}
          >
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Patients' as never)}
            >
              <Text style={styles.primaryButtonText}>Go to Patients</Text>
            </TouchableOpacity>

 
          </Animatable.View>
        </Animatable.View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: COLORS.background 
  },
  container: { 
    flex: 1, 
    paddingHorizontal: SPACING.m,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: FONTS.semibold,
    color: COLORS.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 32,
    width: '100%',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FONTS.semibold,
  },

  bulletText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    marginTop: 4,
    lineHeight: 20,
  },
});