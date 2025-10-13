import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Rect, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';

export default function EditProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Svg width={42} height={42} viewBox="0 0 42 42" fill="none">
            <Rect x="42" y="42" width="42" height="42" rx="21" transform="rotate(180 42 42)" fill="white"/>
            <Path d="M18.9748 15.9416L13.9165 21L18.9748 26.0583" stroke="#012629" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M28.0831 21L14.0581 21" stroke="#012629" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('@/assets/images/zander-van-gogh.png')}
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.editButton}>
            <Svg width={44} height={45} viewBox="0 0 44 45" fill="none">
              <Rect x="1" y="1.5" width="42" height="42" rx="21" fill="url(#paint0_linear_6066_2449)"/>
              <Rect x="1" y="1.5" width="42" height="42" rx="21" stroke="white" strokeWidth="2"/>
              <Path d="M23.05 15.5L16.2083 22.7417C15.95 23.0167 15.7 23.5584 15.65 23.9334L15.3416 26.6334C15.2333 27.6084 15.9333 28.275 16.9 28.1084L19.5833 27.65C19.9583 27.5834 20.4833 27.3084 20.7416 27.025L27.5833 19.7834C28.7666 18.5334 29.3 17.1084 27.4583 15.3667C25.625 13.6417 24.2333 14.25 23.05 15.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M21.9082 16.7083C22.2665 19.0083 24.1332 20.7666 26.4499 20.9999" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M14.5 30.8333H29.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <Defs>
                <SvgLinearGradient id="paint0_linear_6066_2449" x1="1.81482" y1="2.66699" x2="46.4617" y2="8.79139" gradientUnits="userSpaceOnUse">
                  <Stop stopColor="#42646C"/>
                  <Stop offset="1" stopColor="#012629"/>
                </SvgLinearGradient>
              </Defs>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formSection}>
      {/* First Name Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#64748B"
        />
      </View>

      {/* Last Name Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#64748B"
        />
      </View>

      {/* Email Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#64748B"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Phone Number Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#64748B"
          keyboardType="phone-pad"
        />
      </View>
      </View>

      {/* Save Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#42646C', '#012629']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#012629',
    letterSpacing: -0.32,
  },
  placeholder: {
    width: 42,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  imageWrapper: {
    position: 'relative',
  },
  formSection: {
    marginTop: 32,
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  editButton: {
    position: 'absolute',
    right: -2,
    top: 0,
  },
  fieldContainer: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#012629',
    marginBottom: 6,
    letterSpacing: -0.32,
  },
  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 1000,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#012629',
    letterSpacing: -0.32,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 16,
  },
  saveButton: {
    height: 52,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.32,
  },
});

