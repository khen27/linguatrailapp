import { StyleSheet, ScrollView, View, Image, Text, TouchableOpacity, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProfileScreen() {
  const router = useRouter();
  const [darkTheme, setDarkTheme] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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
        <Text style={styles.name}>Zander Van Gogh</Text>
        
        {/* Email */}
        <Text style={styles.email}>zanvangogh@gmail.com</Text>
        
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editProfileButton} onPress={() => router.push('/edit-profile')}>
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
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M28.3335 15.4167H23.3335" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M14.9998 15.4167H11.6665" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M18.3332 18.3333C19.944 18.3333 21.2498 17.0275 21.2498 15.4167C21.2498 13.8058 19.944 12.5 18.3332 12.5C16.7223 12.5 15.4165 13.8058 15.4165 15.4167C15.4165 17.0275 16.7223 18.3333 18.3332 18.3333Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M28.3333 24.5833H25" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.6665 24.5833H11.6665" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21.6667 27.5001C23.2775 27.5001 24.5833 26.1942 24.5833 24.5834C24.5833 22.9726 23.2775 21.6667 21.6667 21.6667C20.0558 21.6667 18.75 22.9726 18.75 24.5834C18.75 26.1942 20.0558 27.5001 21.6667 27.5001Z" stroke="#1DB289" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <Text style={styles.menuItemText}>Learning Configurations</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#2F4291" />
        </TouchableOpacity>
        
        {/* Subscription & Plans Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M15.6082 26.4167C16.2915 25.6834 17.3332 25.7417 17.9332 26.5417L18.7748 27.6667C19.4498 28.5584 20.5415 28.5584 21.2165 27.6667L22.0582 26.5417C22.6582 25.7417 23.6998 25.6834 24.3832 26.4167C25.8665 28.0001 27.0748 27.4751 27.0748 25.2584V15.8667C27.0832 12.5084 26.2998 11.6667 23.1498 11.6667H16.8498C13.6998 11.6667 12.9165 12.5084 12.9165 15.8667V25.2501C12.9165 27.4751 14.1332 27.9917 15.6082 26.4167Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M16.6665 15.8333H23.3332" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M17.5 19.1667H22.5" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <Text style={styles.menuItemText}>Subscription & Plans</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#2F4291" />
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
            <Text style={styles.menuItemText}>Support</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#2F4291" />
        </TouchableOpacity>
        
        {/* Privacy Policy Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M28.4248 16.625C30.4582 18.6583 30.4582 21.9583 28.4248 23.9917C26.3915 26.025 23.0915 26.025 21.0582 23.9917C19.0248 21.9583 19.0248 18.6583 21.0582 16.625C23.0915 14.5917 26.3915 14.5917 28.4248 16.625Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M21.6165 28.0333C19.9498 27.3667 18.4915 26.1583 17.5248 24.4833C16.5748 22.8417 16.2582 21.0167 16.4832 19.275" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M19.6165 13.7333C21.0332 12.625 22.8082 11.9667 24.7415 11.9667C26.6332 11.9667 28.3748 12.6083 29.7748 13.675" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M27.8665 28.0333C29.5332 27.3667 30.9915 26.1583 31.9582 24.4833C32.9082 22.8417 33.2248 21.0167 32.9998 19.275" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <Text style={styles.menuItemText}>Privacy Policy</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#2F4291" />
        </TouchableOpacity>
        
        {/* Terms & Conditions Menu Item */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <View style={styles.menuIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M15.4 17.3555L12.2266 20L15.4 22.6445C15.4649 22.6965 15.5188 22.7608 15.5585 22.8338C15.5982 22.9068 15.6229 22.987 15.6313 23.0697C15.6396 23.1524 15.6314 23.2359 15.607 23.3154C15.5827 23.3949 15.5428 23.4687 15.4896 23.5325C15.4364 23.5964 15.371 23.649 15.2972 23.6872C15.2234 23.7255 15.1428 23.7487 15.0599 23.7554C14.9771 23.7621 14.8938 23.7523 14.8148 23.7264C14.7358 23.7005 14.6628 23.6591 14.6 23.6047L10.85 20.4797C10.7796 20.421 10.723 20.3476 10.6842 20.2647C10.6453 20.1817 10.6252 20.0912 10.6252 19.9996C10.6252 19.908 10.6453 19.8175 10.6842 19.7346C10.723 19.6516 10.7796 19.5782 10.85 19.5195L14.6 16.3945C14.7274 16.2884 14.8918 16.2373 15.0569 16.2524C15.222 16.2675 15.3744 16.3476 15.4805 16.475C15.5866 16.6024 15.6377 16.7668 15.6226 16.9319C15.6075 17.097 15.5274 17.2494 15.4 17.3555ZM29.15 19.5195L25.4 16.3945C25.3369 16.342 25.2641 16.3024 25.1857 16.278C25.1073 16.2536 25.0249 16.2449 24.9431 16.2524C24.8613 16.2599 24.7819 16.2834 24.7092 16.3216C24.6365 16.3598 24.5721 16.4119 24.5195 16.475C24.4134 16.6024 24.3623 16.7668 24.3774 16.9319C24.3925 17.097 24.4726 17.2494 24.6 17.3555L27.7734 20L24.6 22.6445C24.5351 22.6965 24.4813 22.7608 24.4415 22.8338C24.4018 22.9068 24.3771 22.987 24.3688 23.0697C24.3604 23.1524 24.3686 23.2359 24.393 23.3154C24.4173 23.3949 24.4572 23.4687 24.5104 23.5325C24.5636 23.5964 24.629 23.649 24.7028 23.6872C24.7766 23.7255 24.8572 23.7487 24.9401 23.7554C25.0229 23.7621 25.1062 23.7523 25.1852 23.7264C25.2642 23.7005 25.3372 23.6591 25.4 23.6047L29.15 20.4797C29.2204 20.421 29.277 20.3476 29.3158 20.2647C29.3547 20.1817 29.3748 20.0912 29.3748 19.9996C29.3748 19.908 29.3547 19.8175 29.3158 19.7346C29.277 19.6516 29.2204 19.5782 29.15 19.5195ZM22.7133 12.5375C22.6361 12.5095 22.5542 12.497 22.4722 12.5006C22.3902 12.5042 22.3097 12.524 22.2354 12.5588C22.161 12.5935 22.0942 12.6426 22.0388 12.7031C21.9834 12.7637 21.9405 12.8346 21.9125 12.9117L16.9125 26.6617C16.8844 26.7389 16.8717 26.8209 16.8753 26.903C16.8789 26.9851 16.8987 27.0656 16.9334 27.1401C16.9682 27.2145 17.0173 27.2814 17.0779 27.3369C17.1385 27.3923 17.2095 27.4353 17.2867 27.4633C17.3552 27.4876 17.4273 27.5 17.5 27.5C17.6284 27.5 17.7536 27.4605 17.8587 27.3868C17.9638 27.3132 18.0437 27.2089 18.0875 27.0883L23.0875 13.3383C23.1155 13.2611 23.1281 13.1792 23.1244 13.0972C23.1208 13.0152 23.101 12.9347 23.0662 12.8604C23.0315 12.786 22.9824 12.7192 22.9219 12.6638C22.8613 12.6084 22.7904 12.5655 22.7133 12.5375Z" stroke="#1DB289" strokeWidth="1.5"/>
              </Svg>
            </View>
            <Text style={styles.menuItemText}>Terms & Conditions</Text>
          </View>
          <MaterialIcons name="chevron-right" size={20} color="#2F4291" />
        </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.preferencesSection}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        
        {/* Dark Theme Preference */}
        <View style={styles.preferenceItem}>
          <View style={styles.preferenceItemLeft}>
            <View style={styles.preferenceIconContainer}>
              <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
                <Path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E9FDF8"/>
                <Path d="M11.6916 20.35C11.9916 24.6416 15.6332 28.1333 19.9916 28.325C23.0666 28.4583 25.8166 27.025 27.4666 24.7666C28.1499 23.8416 27.7832 23.225 26.6416 23.4333C26.0832 23.5333 25.5082 23.575 24.9082 23.55C20.8332 23.3833 17.4999 19.975 17.4832 15.95C17.4749 14.8666 17.6999 13.8416 18.1082 12.9083C18.5582 11.875 18.0166 11.3833 16.9749 11.825C13.6749 13.2166 11.4166 16.5416 11.6916 20.35Z" stroke="#1DB289" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </View>
            <Text style={styles.preferenceItemText}>Dark theme</Text>
          </View>
          <Switch
            value={darkTheme}
            onValueChange={setDarkTheme}
            trackColor={{ false: '#F6F7FA', true: '#27EDB7' }}
            thumbColor={darkTheme ? '#263574' : '#5C5C5C'}
          />
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
            <Text style={styles.preferenceItemText}>Push notifications</Text>
          </View>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: '#F6F7FA', true: '#27EDB7' }}
            thumbColor={pushNotifications ? '#263574' : '#5C5C5C'}
          />
        </View>
        
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
        <Text style={styles.versionText}>Version - 1.0.1</Text>
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
    color: '#263574',
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: -0.44,
  },
  email: {
    fontSize: 14,
    fontWeight: '500',
    color: '#263574',
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
    color: '#263574',
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
    color: '#263574',
    flex: 1,
  },
  preferencesSection: {
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
    color: '#263574',
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
