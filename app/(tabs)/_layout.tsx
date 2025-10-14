import { Tabs } from 'expo-router';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ProfileTabIcon } from '@/components/profile-tab-icon';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path 
                d="M20.8598 8.37L13.9298 2.83C12.8598 1.97 11.1298 1.97 10.0698 2.82L3.13978 8.37C2.35978 8.99 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.99 20.8598 8.37ZM11.9998 15.5C10.6198 15.5 9.49978 14.38 9.49978 13C9.49978 11.62 10.6198 10.5 11.9998 10.5C13.3798 10.5 14.4998 11.62 14.4998 13C14.4998 14.38 13.3798 15.5 11.9998 15.5Z" 
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab3"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab4"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ProfileTabIcon color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
