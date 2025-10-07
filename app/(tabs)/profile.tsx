import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Profile Header Section */}
      <View style={styles.profileHeader}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/95x95/4A90E2/FFFFFF?text=AJ' }}
            style={styles.profilePicture}
          />
        </View>
        
        {/* Name */}
        <Text style={styles.name}>Alex Jordan</Text>
        
        {/* Email */}
        <Text style={styles.email}>alexjordan@gmail.com</Text>
        
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Main Container Card - Menu + Preferences */}
      <View style={styles.mainContainer}>
        {/* Menu Section */}
        <View style={styles.menuSection}>
        <Text style={styles.sectionHeader}>Menu</Text>
        
        {/* Learning Configurations Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <MaterialIcons name="tune" size={20} color="#356671" />
            </View>
            <Text style={styles.menuItemText}>Learning Configurations</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#64748B" />
        </TouchableOpacity>
        
        {/* Subscription & Plans Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <MaterialIcons name="receipt-long" size={20} color="#356671" />
            </View>
            <Text style={styles.menuItemText}>Subscription & Plans</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#64748B" />
        </TouchableOpacity>
        
        {/* Support Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <MaterialIcons name="support-agent" size={20} color="#356671" />
            </View>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#64748B" />
        </TouchableOpacity>
      </View>

      {/* Preferences Section */}
      <View style={styles.preferencesSection}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        
        {/* Dark Theme Preference */}
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceItemLeft}>
            <View style={styles.preferenceIconContainer}>
              <MaterialIcons name="dark-mode" size={20} color="#356671" />
            </View>
            <Text style={styles.preferenceItemText}>Dark Theme</Text>
          </View>
          <Switch
            value={darkTheme}
            onValueChange={setDarkTheme}
            trackColor={{ false: '#F6F7FA', true: '#34C759' }}
            thumbColor={darkTheme ? '#FFFFFF' : '#64748B'}
          />
        </View>
        
        {/* Push Notifications Preference */}
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceItemLeft}>
            <View style={styles.preferenceIconContainer}>
              <MaterialIcons name="notifications" size={20} color="#356671" />
            </View>
            <Text style={styles.preferenceItemText}>Push Notifications</Text>
          </View>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: '#F6F7FA', true: '#34C759' }}
            thumbColor={pushNotifications ? '#FFFFFF' : '#64748B'}
          />
        </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  contentContainer: {
    paddingTop: 60,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  mainContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profilePictureContainer: {
    marginBottom: 12,
  },
  profilePicture: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    backgroundColor: '#E0E0E0',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#012629',
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: -0.44,
  },
  email: {
    fontSize: 14,
    fontWeight: '500',
    color: '#012629',
    opacity: 0.7,
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: -0.28,
  },
  editProfileButton: {
    backgroundColor: '#42646C',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 1000,
    minWidth: 121,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.32,
  },
  menuSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: '#012629',
    opacity: 0.7,
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7FA',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#012629',
    flex: 1,
  },
  preferencesSection: {
    marginBottom: 30,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7FA',
  },
  preferenceItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  preferenceIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  preferenceItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#012629',
    flex: 1,
  },
});
