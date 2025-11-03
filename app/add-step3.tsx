import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, Alert, Image, Modal, ScrollView, Dimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import * as DocumentPicker from 'expo-document-picker';
import { useToast } from '@/hooks/useToast';
import AnimatedProgressBar from '../components/AnimatedProgressBar';
// NOTE: Avoid static import of expo-image-picker to prevent runtime crash
// when the dev client doesn't include the native module. We'll dynamically
// import it inside handlers.

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Figma design dimensions: 375px screen width, 359px modal width (8px margins on each side)
// Modal height: 617px with 25px bottom margin
const MODAL_HORIZONTAL_MARGIN = (SCREEN_WIDTH * 8) / 375;
const MODAL_BOTTOM_MARGIN = 25;

interface UploadedFile {
  id: string;
  name: string;
  uri: string;
  type: string;
  size?: number;
}

interface Textbook {
  id: string;
  name: string;
}

export default function AddStep3Screen() {
  const router = useRouter();
  const toast = useToast();
  const [selectedTextbook, setSelectedTextbook] = useState('');
  const [tempSelectedTextbook, setTempSelectedTextbook] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const textbooks: Textbook[] = [
    { id: '1', name: 'Antonia Clare & JJ Wilson (Pearson)' },
    { id: '2', name: 'Betty Schrampfer Azar (Pearson)' },
    { id: '3', name: 'Clive Oxenden & Christina Latham-Koenig' },
    { id: '4', name: 'Diane Larsen-Freeman (Oxford)' },
    { id: '5', name: 'Jack C. Richards (Cambridge University Pre...' },
    { id: '6', name: 'Liz & John Soars (Oxford University Press)' },
    { id: '7', name: 'Michael Swan (Oxford)' },
    { id: '8', name: 'Raymond Murphy (Cambridge)' },
    { id: '9', name: 'Sarah Cunningham & Peter Moor (Pearson)' },
    { id: '10', name: 'Steven J. Molinsky & Bill Bliss (Pearson)' },
    { id: '11', name: 'Virginia Evans & Jenny Dooley (Express Publishing)' },
    { id: '12', name: 'William Strunk Jr. & E.B. White (Macmillan)' },
  ];

  const handleUploadDocument = async () => {
    try {
      const ImagePickerLib = await import('expo-image-picker');
      if (!ImagePickerLib || !ImagePickerLib.launchImageLibraryAsync) {
        toast.show({ message: 'Failed to open image picker', preset: 'error' });
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
      }
    } catch (error) {
      toast.show({ message: 'Failed to pick image', preset: 'error' });
      console.error('Image pick error:', error);
    }
  };

  const handleTakePhoto = async () => {
    try {
      const ImagePickerLib = await import('expo-image-picker');
      if (!ImagePickerLib || !ImagePickerLib.launchCameraAsync) {
        toast.show({ message: 'Failed to open camera', preset: 'error' });
        return;
      }

      // Request camera permissions
      const permissionResult = await ImagePickerLib.requestCameraPermissionsAsync();
      if (permissionResult.granted === false) {
        Alert.alert('Permission Required', 'Camera permission is required to take photos');
        return;
      }

      // Launch camera - will handle simulator detection automatically
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
      }
    } catch (error) {
      toast.show({ message: 'Failed to take photo', preset: 'error' });
      console.error('Camera error:', error);
    }
  };

  const handleDeleteFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleOpenModal = () => {
    setTempSelectedTextbook(selectedTextbook);
    setIsModalOpen(true);
  };

  const handleSelectTextbook = (textbookName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setTempSelectedTextbook(textbookName);
  };

  const handleConfirm = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedTextbook(tempSelectedTextbook);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setTempSelectedTextbook(selectedTextbook);
    setIsModalOpen(false);
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
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
          <AnimatedProgressBar progress={1.0} delay={200} />

          {/* Title and Subtitle */}
          <View style={styles.titleSection}>
            <Text style={styles.mainTitle}>Give Insights</Text>
            <Text style={styles.subtitle}>Upload the document, take photo or paste text of the language task you want to get help with.</Text>
          </View>

          {/* Textbook Selection Button */}
          <View style={styles.inputSection}>
            <Text style={styles.inputLabel}>Choose Textbook</Text>
            <TouchableOpacity 
              style={styles.dropdownButton}
              activeOpacity={0.8}
              onPress={handleOpenModal}
            >
              <Text style={styles.dropdownText}>
                {selectedTextbook || 'Choose common textbook'}
              </Text>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M5 7.5L10 12.5L15 7.5" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </Svg>
            </TouchableOpacity>
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
                    <Image 
                      source={require('@/assets/icons/trashcan.png')}
                      style={styles.deleteIcon}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          {/* Skip Button -> Summary */}
          <TouchableOpacity 
            style={styles.skipButton} 
            activeOpacity={0.8}
            onPress={() => router.push('/summary')}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

      {/* Textbook Selection Modal */}
      <Modal
        visible={isModalOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCancel}
      >
        <View style={styles.modalContainer}>
          {/* Blurred Background Overlay */}
          <TouchableOpacity 
            style={styles.modalBackdrop}
            activeOpacity={1}
            onPress={handleCancel}
          >
            <BlurView intensity={2.5} tint="dark" style={styles.modalBlurOverlay} />
          </TouchableOpacity>

          {/* Modal Content Card */}
          <View style={styles.modalCard}>
            <ScrollView 
              style={styles.modalScrollView}
              contentContainerStyle={styles.modalContent}
              showsVerticalScrollIndicator={false}
            >
              {textbooks.map((textbook) => (
                <TouchableOpacity
                  key={textbook.id}
                  style={[
                    styles.textbookOption,
                    tempSelectedTextbook === textbook.name && styles.textbookOptionSelected,
                  ]}
                  onPress={() => handleSelectTextbook(textbook.name)}
                  activeOpacity={0.8}
                >
                  <Text style={[
                    styles.textbookOptionText,
                    tempSelectedTextbook === textbook.name && styles.textbookOptionTextSelected,
                  ]}>
                    {textbook.name}
                  </Text>
                  {tempSelectedTextbook === textbook.name && (
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#23D5A5"/>
                      <Path d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.63C16.0099 8.34 16.4899 8.34 16.7799 8.63C17.0699 8.92 17.0699 9.4 16.7799 9.69L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z" fill="white"/>
                    </Svg>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Action Buttons */}
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
                activeOpacity={0.8}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}
                activeOpacity={0.8}
              >
                <Text style={styles.confirmButtonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalBlurOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalCard: {
    position: 'absolute',
    left: MODAL_HORIZONTAL_MARGIN,
    right: MODAL_HORIZONTAL_MARGIN,
    bottom: MODAL_BOTTOM_MARGIN,
    height: 617,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 16,
    gap: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  modalScrollView: {
    flex: 1,
  },
  modalContent: {
    gap: 6,
  },
  textbookOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F6F7FA',
    borderRadius: 1000,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.02,
    shadowRadius: 2,
    elevation: 1,
  },
  textbookOptionSelected: {
    backgroundColor: '#E9FDF8',
    borderColor: '#DFFCF4',
    shadowOpacity: 0,
    elevation: 0,
  },
  textbookOptionText: {
    flex: 1,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#263574',
  },
  textbookOptionTextSelected: {
    fontWeight: '600',
    color: '#263574',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
    height: 52,
  },
  cancelButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#F6F7FA',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  cancelButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#202020',
    textAlign: 'center',
  },
  confirmButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#27EDB7',
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  confirmButtonText: {
    fontFamily: 'Urbanist',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
    color: '#2F4291',
    textAlign: 'center',
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
  deleteIcon: {
    width: 36,
    height: 36,
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
