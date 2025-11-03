import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeIcon, BookIcon, AddIcon, ChartIcon, ProfileIcon } from './tab-icons';

export function FloatingTabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  
  // On iOS, use original 20px padding. On Android, add safe area inset to avoid nav bar overlap
  const bottomPadding = Platform.OS === 'ios' ? 20 : 20 + insets.bottom;

  const tabs = [
    {
      name: 'index',
      route: '/',
      icon: HomeIcon,
      label: 'Home',
      active: pathname === '/' || pathname === '/index',
    },
    {
      name: 'explore',
      route: '/explore',
      icon: BookIcon,
      label: 'Lessons',
      active: pathname === '/explore',
    },
    {
      name: 'add',
      route: '/add',
      icon: AddIcon,
      active: pathname === '/add',
      isAddButton: true,
    },
    {
      name: 'tab3',
      route: '/tab3',
      icon: ChartIcon,
      label: 'Insights',
      active: pathname === '/tab3',
    },
    {
      name: 'profile',
      route: '/profile',
      icon: ProfileIcon,
      label: 'Profile',
      active: pathname === '/profile',
    },
  ];

  const handleTabPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View style={[styles.container, { paddingBottom: bottomPadding }]}>
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          
          if (tab.isAddButton) {
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.addButton}
                onPress={() => handleTabPress(tab.route)}
                activeOpacity={0.8}
              >
                <IconComponent size={30} color="#FFFFFF" />
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={tab.name}
              style={[
                styles.tabItem,
                tab.active && styles.activeTabItem,
              ]}
              onPress={() => handleTabPress(tab.route)}
              activeOpacity={0.8}
            >
              <IconComponent 
                size={24} 
                color={tab.active ? '#23D5A5' : '#737373'} 
              />
              <Text style={[
                styles.tabLabel,
                tab.active && styles.activeTabLabel
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    // paddingBottom is now set dynamically in component based on safe area insets
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 0,
    gap: 8,
    width: 375,
    height: 72,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    marginTop: -8,
  },
  tabItem: {
    width: 54,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingBottom: 8,
    gap: 6,
  },
  activeTabItem: {
    borderTopWidth: 2,
    borderTopColor: '#23D5A5',
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#737373',
    letterSpacing: -0.02,
    textAlign: 'center',
  },
  activeTabLabel: {
    color: '#263574',
  },
  addButton: {
    width: 54,
    height: 54,
    borderRadius: 48,
    backgroundColor: '#2F4291',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    shadowColor: '#0E091A',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 28,
    elevation: 12,
  },
});
