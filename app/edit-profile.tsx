import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';

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

      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('@/assets/images/zander-van-gogh.png')}
          style={styles.profilePicture}
        />
      </View>
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
  },
  placeholder: {
    width: 42,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
});

