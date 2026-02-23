import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme, useSetColorScheme } from '@/hooks/use-color-scheme';
import { useFeatureFlags } from '@/contexts/FeatureFlagContext';

export default function ProfileScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const setColorScheme = useSetColorScheme();
  const darkTheme = colorScheme === 'dark';
  const [pushNotifications, setPushNotifications] = useState(false);
  const { setFlag, isOn } = useFeatureFlags();

  // Note: do not auto-mark seen on mount; handled by explicit actions

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* Profile Header Section */}
      <View style={styles.profileHeader}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={require('@/assets/images/zander-van-gogh.png')}
            style={styles.profilePicture}
          />
        </View>
        
        {/* Name */}
        <ThemedText type="title" style={styles.name}>
          Zander Van Gogh
        </ThemedText>
        
        {/* Email */}
        <ThemedText style={styles.email}>
          zanvangogh@gmail.com
        </ThemedText>
        
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton} onPress={() => router.push('/edit-profile')}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Main Container Card - Menu + Preferences */}
      <ThemedView lightColor="#FFFFFF" darkColor="#151718" style={styles.mainContainer}>
        {/* Menu Section */}
        <View style={styles.menuSection}>
        <ThemedText style={styles.sectionHeader}>Menu</ThemedText>
        
        {/* Learning Configurations Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M28.3335 15.4167H23.3335" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M14.9998 15.4167H11.6665" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M18.3332 18.3333C19.944 18.3333 21.2498 17.0275 21.2498 15.4167C21.2498 13.8058 19.944 12.5 18.3332 12.5C16.7223 12.5 15.4165 13.8058 15.4165 15.4167C15.4165 17.0275 16.7223 18.3333 18.3332 18.3333Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M28.3333 24.5833H25" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.6665 24.5833H11.6665" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21.6667 27.5001C23.2775 27.5001 24.5833 26.1942 24.5833 24.5834C24.5833 22.9726 23.2775 21.6667 21.6667 21.6667C20.0558 21.6667 18.75 22.9726 18.75 24.5834C18.75 26.1942 20.0558 27.5001 21.6667 27.5001Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.menuItemText}>Learning Configurations</ThemedText>
          </View>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path d="M12.0247 15.0584L17.083 10L12.0247 4.94168" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M2.91641 10L16.9414 10" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        
        {/* Subscription & Plans Menu Item */}
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/subscription')}
        >
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M15.6082 26.4167C16.2915 25.6834 17.3332 25.7417 17.9332 26.5417L18.7748 27.6667C19.4498 28.5584 20.5415 28.5584 21.2165 27.6667L22.0582 26.5417C22.6582 25.7417 23.6998 25.6834 24.3832 26.4167C25.8665 28.0001 27.0748 27.4751 27.0748 25.2584V15.8667C27.0832 12.5084 26.2998 11.6667 23.1498 11.6667H16.8498C13.6998 11.6667 12.9165 12.5084 12.9165 15.8667V25.2501C12.9165 27.4751 14.1332 27.9917 15.6082 26.4167Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.6665 15.8333H23.3332" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M17.5 19.1667H22.5" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.menuItemText}>Subscription & Plans</ThemedText>
          </View>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path d="M12.0247 15.0584L17.083 10L12.0247 4.94168" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M2.91641 10L16.9414 10" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        
        {/* Support Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M23.6832 16.6249C25.7165 18.6582 25.7165 21.9582 23.6832 23.9915C21.6499 26.0248 18.3498 26.0248 16.3165 23.9915C14.2832 21.9582 14.2832 18.6582 16.3165 16.6249C18.3498 14.5915 21.6499 14.5915 23.6832 16.6249Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.875 28.0332C15.2083 27.3666 13.75 26.1582 12.7833 24.4832C11.8333 22.8416 11.5167 21.0166 11.7417 19.2749" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M14.875 13.7332C16.2917 12.6249 18.0667 11.9666 20 11.9666C21.8917 11.9666 23.6333 12.6082 25.0333 13.6749" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M23.125 28.0332C24.7917 27.3666 26.25 26.1582 27.2167 24.4832C28.1667 22.8416 28.4833 21.0166 28.2583 19.2749" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.menuItemText}>Support</ThemedText>
          </View>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path d="M12.0247 15.0584L17.083 10L12.0247 4.94168" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M2.91641 10L16.9414 10" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        
        {/* Privacy Policy Menu Item */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/privacy-policy')}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M18.7418 11.8583L14.5835 13.425C13.6251 13.7833 12.8418 14.9166 12.8418 15.9333V22.125C12.8418 23.1083 13.4918 24.4 14.2835 24.9916L17.8668 27.6666C19.0418 28.55 20.9751 28.55 22.1501 27.6666L25.7335 24.9916C26.5251 24.4 27.1751 23.1083 27.1751 22.125V15.9333C27.1751 14.9083 26.3918 13.775 25.4335 13.4166L21.2751 11.8583C20.5668 11.6 19.4335 11.6 18.7418 11.8583Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M20.0002 20.4166C20.9206 20.4166 21.6668 19.6704 21.6668 18.7499C21.6668 17.8294 20.9206 17.0833 20.0002 17.0833C19.0797 17.0833 18.3335 17.8294 18.3335 18.7499C18.3335 19.6704 19.0797 20.4166 20.0002 20.4166Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M20 20.4167V22.9167" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.menuItemText}>Privacy Policy</ThemedText>
          </View>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path d="M12.0247 15.0584L17.083 10L12.0247 4.94168" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M2.91641 10L16.9414 10" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        
        {/* Terms & Conditions Menu Item */}
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/terms-and-conditions')}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M28.3332 18.3334V22.5001C28.3332 26.6667 26.6665 28.3334 22.4998 28.3334H17.4998C13.3332 28.3334 11.6665 26.6667 11.6665 22.5001V17.5001C11.6665 13.3334 13.3332 11.6667 17.4998 11.6667H21.6665" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M28.3332 18.3334H24.9998C22.4998 18.3334 21.6665 17.5001 21.6665 15.0001V11.6667L28.3332 18.3334Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M15.8335 20.8333H20.8335" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M15.8335 24.1667H19.1668" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.menuItemText}>Terms & Conditions</ThemedText>
          </View>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path d="M12.0247 15.0584L17.083 10L12.0247 4.94168" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M2.91641 10L16.9414 10" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.preferencesSection}>
        <ThemedText style={styles.sectionHeader}>Preferences</ThemedText>
        
        {/* Dark Theme Preference */}
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceItemLeft}>
            <View style={styles.preferenceIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M11.6916 20.35C11.9916 24.6416 15.6332 28.1333 19.9916 28.325C23.0666 28.4583 25.8166 27.025 27.4666 24.7666C28.1499 23.8416 27.7832 23.225 26.6416 23.4333C26.0832 23.5333 25.5082 23.575 24.9082 23.55C20.8332 23.3833 17.4999 19.975 17.4832 15.95C17.4749 14.8666 17.6999 13.8416 18.1082 12.9083C18.5582 11.875 18.0166 11.3833 16.9749 11.825C13.6749 13.2166 11.4166 16.5416 11.6916 20.35Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.preferenceItemText}>Dark theme</ThemedText>
          </View>
          <TouchableOpacity
            onPress={() => setColorScheme(darkTheme ? 'light' : 'dark')}
          >
            <Svg width={40} height={24} viewBox="0 0 40 24" fill="none">
              <Path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12C40 18.6274 34.6274 24 28 24H12C5.37258 24 0 18.6274 0 12Z" fill={darkTheme ? "#27EDB7" : "#F6F7FA"}/>
              <Path d={darkTheme ? "M18 12C18 6.47715 22.4772 2 28 2C33.5228 2 38 6.47715 38 12C38 17.5228 33.5228 22 28 22C22.4772 22 18 17.5228 18 12Z" : "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"} fill={darkTheme ? "#263574" : "#5C5C5C"}/>
            </Svg>
          </TouchableOpacity>
        </View>
        
        {/* Push Notifications Preference */}
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceItemLeft}>
            <View style={styles.preferenceIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M20.0165 12.425C17.2582 12.425 15.0165 14.6667 15.0165 17.425V19.8334C15.0165 20.3417 14.7998 21.1167 14.5415 21.55L13.5832 23.1417C12.9915 24.125 13.3998 25.2167 14.4832 25.5834C18.0748 26.7834 21.9498 26.7834 25.5415 25.5834C26.5498 25.25 26.9915 24.0584 26.4415 23.1417L25.4832 21.55C25.2332 21.1167 25.0165 20.3417 25.0165 19.8334V17.425C25.0165 14.675 22.7665 12.425 20.0165 12.425Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                <Path d="M21.5584 12.6667C21.3001 12.5917 21.0334 12.5334 20.7584 12.5C19.9584 12.4 19.1918 12.4584 18.4751 12.6667C18.7168 12.05 19.3168 11.6167 20.0168 11.6167C20.7168 11.6167 21.3168 12.05 21.5584 12.6667Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M22.5166 25.8833C22.5166 27.2583 21.3916 28.3833 20.0166 28.3833C19.3333 28.3833 18.6999 28.1 18.2499 27.65C17.7999 27.2 17.5166 26.5666 17.5166 25.8833" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10"/>
              </Svg>
            </View>
            <ThemedText style={styles.preferenceItemText}>Push notifications</ThemedText>
          </View>
          <TouchableOpacity onPress={() => setPushNotifications(!pushNotifications)}>
            <Svg width={40} height={24} viewBox="0 0 40 24" fill="none">
              <Path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12C40 18.6274 34.6274 24 28 24H12C5.37258 24 0 18.6274 0 12Z" fill={pushNotifications ? "#27EDB7" : "#F6F7FA"}/>
              <Path d={pushNotifications ? "M18 12C18 6.47715 22.4772 2 28 2C33.5228 2 38 6.47715 38 12C38 17.5228 33.5228 22 28 22C22.4772 22 18 17.5228 18 12Z" : "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"} fill={pushNotifications ? "#263574" : "#5C5C5C"}/>
            </Svg>
          </TouchableOpacity>
        </View>
        
        </View>

        {/* Feature Testing Flags Section */}
        <View style={styles.featureFlagsSection}>
        <ThemedText style={styles.sectionHeader}>Feature Testing Flags</ThemedText>
        
        {/* Extended First Run Feature Flag */}
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceItemLeft}>
            <View style={styles.preferenceIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M16 18L14 20L16 22" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M24 18L26 20L24 22" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4771 25.5228 10 20 10C14.4771 10 10 14.4771 10 20C10 25.5228 14.4771 30 20 30Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21 17.6699L19 22.33" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.preferenceItemText}>Extended First Run</ThemedText>
          </View>
          <TouchableOpacity onPress={() => {
            const next = !isOn('extendedFirstRun');
            setFlag('extendedFirstRun', next);
            if (next) {
              // Reset seen state whenever flag is enabled
              setFlag('hasSeenExtendedFirstRun', false);
            }
          }}>
            <Svg width={40} height={24} viewBox="0 0 40 24" fill="none">
              <Path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12C40 18.6274 34.6274 24 28 24H12C5.37258 24 0 18.6274 0 12Z" fill={isOn('extendedFirstRun') ? "#27EDB7" : "#F6F7FA"}/>
              <Path d={isOn('extendedFirstRun') ? "M18 12C18 6.47715 22.4772 2 28 2C33.5228 2 38 6.47715 38 12C38 17.5228 33.5228 22 28 22C22.4772 22 18 17.5228 18 12Z" : "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"} fill={isOn('extendedFirstRun') ? "#263574" : "#5C5C5C"}/>
            </Svg>
          </TouchableOpacity>
        </View>
        
        {/* Onboarding Screens Feature Flag */}
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => router.push('/onboarding')}
        >
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M16 18L14 20L16 22" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M24 18L26 20L24 22" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4771 25.5228 10 20 10C14.4771 10 10 14.4771 10 20C10 25.5228 14.4771 30 20 30Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21 17.6699L19 22.33" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <ThemedText style={styles.menuItemText}>Onboarding Screens</ThemedText>
          </View>
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path d="M12.0247 15.0584L17.083 10L12.0247 4.94168" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M2.91641 10L16.9414 10" stroke="#2F4291" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        
        </View>

        {/* Log Out Section */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutItem}>
            <View style={styles.logoutItemLeft}>
              <View style={styles.logoutIconContainer}>
                <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                  <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#FEEDEF"/>
                  <Path d="M24.5332 22.1834L26.6665 20.0501L24.5332 17.9167" stroke="#F84E5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M18.1333 20.05H26.6083" stroke="#F84E5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <Path d="M19.8 26.6666C16.1166 26.6666 13.1333 24.1666 13.1333 19.9999C13.1333 15.8333 16.1166 13.3333 19.8 13.3333" stroke="#F84E5B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
              </View>
              <Text style={styles.logoutItemText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Version Text */}
        <ThemedText style={styles.versionText}>Version - 1.0.1</ThemedText>
      </ThemedView>
    </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: -0.44,
  },
  email: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.7,
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: -0.28,
  },
  editProfileButton: {
    backgroundColor: '#27EDB7',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 1000,
    minWidth: 121,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileButtonText: {
    color: '#2F4291',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.32,
  },
  menuSection: {
    marginBottom: 40,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '500',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  preferencesSection: {
    marginBottom: 40,
  },
  featureFlagsSection: {
    marginBottom: 40,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  preferenceItemText: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  logoutSection: {
    marginTop: 0,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logoutItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logoutIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoutItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F84E5B',
    flex: 1,
  },
  versionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#595959',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
});
