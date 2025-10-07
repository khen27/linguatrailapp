import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';

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
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F6F7FA"/>
                <Path d="M28.3335 15.4167H23.3335" stroke="#356671" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M14.9998 15.4167H11.6665" stroke="#356671" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M18.3332 18.3333C19.944 18.3333 21.2498 17.0275 21.2498 15.4167C21.2498 13.8058 19.944 12.5 18.3332 12.5C16.7223 12.5 15.4165 13.8058 15.4165 15.4167C15.4165 17.0275 16.7223 18.3333 18.3332 18.3333Z" stroke="#356671" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M28.3333 24.5833H25" stroke="#356671" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.6665 24.5833H11.6665" stroke="#356671" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21.6667 27.5001C23.2775 27.5001 24.5833 26.1942 24.5833 24.5834C24.5833 22.9726 23.2775 21.6667 21.6667 21.6667C20.0558 21.6667 18.75 22.9726 18.75 24.5834C18.75 26.1942 20.0558 27.5001 21.6667 27.5001Z" stroke="#356671" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <Text style={styles.menuItemText}>Learning Configurations</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#64748B" />
        </TouchableOpacity>
        
        {/* Subscription & Plans Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F6F7FA"/>
                <Path d="M15.6082 26.4167C16.2915 25.6834 17.3332 25.7417 17.9332 26.5417L18.7748 27.6667C19.4498 28.5584 20.5415 28.5584 21.2165 27.6667L22.0582 26.5417C22.6582 25.7417 23.6998 25.6834 24.3832 26.4167C25.8665 28.0001 27.0748 27.4751 27.0748 25.2584V15.8667C27.0832 12.5084 26.2998 11.6667 23.1498 11.6667H16.8498C13.6998 11.6667 12.9165 12.5084 12.9165 15.8667V25.2501C12.9165 27.4751 14.1332 27.9917 15.6082 26.4167Z" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.6665 15.8333H23.3332" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M17.5 19.1667H22.5" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <Text style={styles.menuItemText}>Subscription & Plans</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#64748B" />
        </TouchableOpacity>
        
        {/* Support Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F6F7FA"/>
                <Path d="M23.6832 16.6249C25.7165 18.6582 25.7165 21.9582 23.6832 23.9915C21.6499 26.0248 18.3498 26.0248 16.3165 23.9915C14.2832 21.9582 14.2832 18.6582 16.3165 16.6249C18.3498 14.5915 21.6499 14.5915 23.6832 16.6249Z" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.875 28.0332C15.2083 27.3666 13.75 26.1582 12.7833 24.4832C11.8333 22.8416 11.5167 21.0166 11.7417 19.2749" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M14.875 13.7332C16.2917 12.6249 18.0667 11.9666 20 11.9666C21.8917 11.9666 23.6333 12.6082 25.0333 13.6749" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M23.125 28.0332C24.7917 27.3666 26.25 26.1582 27.2167 24.4832C28.1667 22.8416 28.4833 21.0166 28.2583 19.2749" stroke="#356671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
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
