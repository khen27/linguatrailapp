import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, Alert, Image } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as DocumentPicker from 'expo-document-picker';
// NOTE: Avoid static import of expo-image-picker to prevent runtime crash
// when the dev client doesn't include the native module. We'll dynamically
// import it inside handlers.

export default function AddStep3Screen() {
  const router = useRouter();
  const [selectedTextType, setSelectedTextType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const textTypeOptions = [
    'Text Document',
    'PDF',
    'Image',
    'Voice Note'
  ];

  const handleUploadDocument = async () => {
    try {
      const ImagePickerLib = await import('expo-image-picker');
      if (!ImagePickerLib || !ImagePickerLib.launchImageLibraryAsync) {
        Alert.alert('Unavailable', 'Image Picker is not available in this build.');
        return;
      }

      const permission = await ImagePickerLib.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert('Permission Required', 'Photo library access is required to select images');
        return;
      }

      const result = await ImagePickerLib.launchImageLibraryAsync({
        mediaTypes: ImagePickerLib.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.9,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        const newFile = {
          id: Date.now().toString(),
          name: asset.fileName || `Image_${Date.now()}.jpg`,
          uri: asset.uri,
          type: 'image',
          size: asset.fileSize,
        };
        setUploadedFiles(prev => [...prev, newFile]);
        Alert.alert('Success', 'Image added successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image');
      console.error('Image pick error:', error);
    }
  };

  const handleTakePhoto = async () => {
    try {
      // Check if running on simulator/emulator (with fallback if expo-device isn't available)
      let isSimulator = false;
      try {
        const Device = await import('expo-device');
        isSimulator = !Device.default.isDevice;
      } catch (deviceError) {
        // If expo-device isn't available, assume it might be a simulator
        // This is a safe fallback since simulators don't have cameras anyway
        isSimulator = true;
      }

      if (isSimulator) {
        Alert.alert('Simulator Detected', 'Camera is not available on simulators. Please use a physical device to take photos.');
        return;
      }

      const ImagePickerLib = await import('expo-image-picker');
      if (!ImagePickerLib || !ImagePickerLib.launchCameraAsync) {
        Alert.alert('Unavailable', 'Camera is not available in this build.');
        return;
      }

      const permissionResult = await ImagePickerLib.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert('Permission Required', 'Camera permission is required to take photos');
        return;
      }

      const result = await ImagePickerLib.launchCameraAsync({
        mediaTypes: ImagePickerLib.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const newFile = {
          id: Date.now().toString(),
          name: `Photo_${Date.now()}.jpg`,
          uri: result.assets[0].uri,
          type: 'image',
          size: result.assets[0].fileSize,
        };
        setUploadedFiles(prev => [...prev, newFile]);
        Alert.alert('Success', 'Photo taken successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo');
      console.error('Camera error:', error);
    }
  };

  const handleDeleteFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        {/* Header Navigation */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M7.5 15L2.5 10L7.5 5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M2.5 10H17.5" stroke="#263574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.headerTitle}>Create New Learning</Text>

          {/* Close Button */}
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M15 5L5 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M5 5L15 15" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Main Content Card */}
      <View style={styles.contentCard}>
        {/* Bottom Gradient Overlay */}
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', '#FFFFFF']}
          style={styles.gradientOverlay}
          pointerEvents="none"
        />

        {/* Content Container (keyboard-aware) */}
        <KeyboardAvoidingView
          style={styles.contentContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={0}
        >
          {/* Progress Bar Section */}
          <View style={styles.progressSection}>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
            </View>
          </View>

          {/* Title and Subtitle */}
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>Give Insights</Text>
            <Text style={styles.subtitle}>Upload the document, take photo or paste text of the language task you want to get help with.</Text>
          </View>

          {/* Dropdown Area */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Choose Textbook</Text>
            <TouchableOpacity 
              style={styles.dropdownButton}
              activeOpacity={0.8}
              onPress={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Text style={styles.dropdownText}>
                {selectedTextType || 'Choose common textbook'}
              </Text>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M5 7.5L10 12.5L15 7.5" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <View style={styles.dropdownMenu}>
                {textTypeOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dropdownOption,
                      selectedTextType === option && styles.dropdownOptionSelected,
                    ]}
                    onPress={() => {
                      setSelectedTextType(option);
                      setIsDropdownOpen(false);
                    }}
                    activeOpacity={0.8}
                  >
                    <Text style={[
                      styles.dropdownOptionText,
                      selectedTextType === option && styles.dropdownOptionTextSelected,
                    ]}>
                      {option}
                    </Text>
                    {selectedTextType === option && (
                      <View style={styles.dropdownRadioButton}>
                        <View style={styles.dropdownRadioButtonInner} />
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* "or" Separator */}
          <View style={styles.separatorSection}>
            <View style={styles.separatorLine} />
            <Text style={styles.separatorText}>or</Text>
            <View style={styles.separatorLine} />
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtonsSection}>
            <TouchableOpacity 
              style={styles.actionButton} 
              activeOpacity={0.8}
              onPress={handleUploadDocument}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M12 5V19" stroke="#1FBE92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M5 12H19" stroke="#1FBE92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
              <Text style={styles.actionButtonText}>Upload Textbook</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionButton} 
              activeOpacity={0.8}
              onPress={handleTakePhoto}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 4H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#1FBE92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <Path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#1FBE92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
              <Text style={styles.actionButtonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>

          {/* Thumbnails Grid */}
          {uploadedFiles.filter(f => f.type === 'image').length > 0 && (
            <View style={styles.thumbnailGrid}>
              {uploadedFiles.filter(f => f.type === 'image').map(file => (
                <View key={file.id} style={styles.thumbnailItem}>
                  <Image source={{ uri: file.uri }} style={styles.thumbnailImage} />
                  <TouchableOpacity
                    style={styles.deleteBadge}
                    onPress={() => handleDeleteFile(file.id)}
                    activeOpacity={0.8}
                  >
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <Path d="M6 7H14M8 7V5H12V7M7 7V15H13V7" stroke="#F84E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </Svg>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          {/* Skip Button */}
          <TouchableOpacity style={styles.skipButton} activeOpacity={0.8}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6F7FA',
  },
  safeArea: {
    zIndex: 10,
  },
  // Header Navigation
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 8,
    gap: 8,
    width: '100%',
    height: 42,
  },
  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 1036.36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
    textAlign: 'center',
  },
  // Main Content Card
  contentCard: {
    position: 'absolute',
    top: 122, // 52px (back button top) + 42px (back button height) + 28px gap (14px + 14px more)
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 16,
    paddingBottom: 32,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 109,
    pointerEvents: 'none',
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    gap: 24,
    zIndex: 2,
    paddingHorizontal: 0,
  },
  // Progress Bar
  progressSection: {
    paddingHorizontal: 24,
  },
  progressTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  progressFill: {
    width: 327,
    height: 10,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
  },
  // Title Section
  titleSection: {
    paddingHorizontal: 24,
    gap: 8,
  },
  mainTitle: {
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.44,
    color: '#263574',
    textAlign: 'left',
    width: '100%',
  },
  subtitle: {
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#5C5C5C',
    textAlign: 'left',
    opacity: 0.7,
    width: '100%',
  },
  // Text Input Section
  inputSection: {
    paddingHorizontal: 24,
    gap: 12,
  },
  inputLabel: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F7FA',
    borderWidth: 1.25,
    borderColor: '#F6F7FA',
    borderRadius: 1000,
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 48,
    gap: 8,
  },
  dropdownText: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.02,
    color: '#5C5C5C',
    textAlign: 'left',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E3EF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 4,
    zIndex: 10,
  },
  dropdownOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F7FA',
  },
  dropdownOptionSelected: {
    backgroundColor: '#E9FDF8',
  },
  dropdownOptionText: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
  },
  dropdownOptionTextSelected: {
    fontWeight: '600',
    color: '#1FBE92',
  },
  dropdownRadioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#1FBE92',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownRadioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1FBE92',
  },
  // Separator Section
  separatorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 8,
    marginTop: 8,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#F6F7FA',
  },
  separatorText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
    opacity: 0.7,
  },
  // Action Buttons Section
  actionButtonsSection: {
    paddingHorizontal: 24,
    gap: 8,
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9FDF8',
    borderRadius: 1000,
    padding: 14,
    gap: 6,
    height: 52,
  },
  actionButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#1FBE92',
  },
  thumbnailGrid: {
    paddingHorizontal: 24,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  thumbnailItem: {
    width: 101,
    height: 101,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1.25,
    borderColor: '#F6F7FA',
    position: 'relative',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  deleteBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 36,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Skip Button
  skipButton: {
    marginHorizontal: 24,
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    zIndex: 3,
  },
  skipButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#2F4291',
    textAlign: 'center',
  },
});
