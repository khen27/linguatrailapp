import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface PlanToggleProps {
  selectedPeriod: 'monthly' | 'yearly';
  onPeriodChange: (period: 'monthly' | 'yearly') => void;
}

export function PlanToggle({ selectedPeriod, onPeriodChange }: PlanToggleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.toggleBackground}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedPeriod === 'monthly' && styles.toggleButtonActive
          ]}
          onPress={() => onPeriodChange('monthly')}
        >
          <Text style={[
            styles.toggleButtonText,
            selectedPeriod === 'monthly' && styles.toggleButtonTextActive
          ]}>
            Monthly
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedPeriod === 'yearly' && styles.toggleButtonActive
          ]}
          onPress={() => onPeriodChange('yearly')}
        >
          <Text style={[
            styles.toggleButtonText,
            selectedPeriod === 'yearly' && styles.toggleButtonTextActive
          ]}>
            Yearly (Save 20%)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  toggleBackground: {
    flexDirection: 'row',
    backgroundColor: '#2F4291',
    borderRadius: 1000,
    padding: 6,
    borderWidth: 1,
    borderColor: '#2F4291',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 5,
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -0.28,
  },
  toggleButtonTextActive: {
    color: '#2F4291',
  },
});
