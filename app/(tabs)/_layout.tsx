import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { FloatingTabBar } from '@/components/floating-tab-bar';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Hide default tab bar
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: '',
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: '',
          }}
        />
        <Tabs.Screen
          name="tab3"
          options={{
            title: '',
          }}
        />
        <Tabs.Screen
          name="tab4"
          options={{
            title: '',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: '',
          }}
        />
      </Tabs>
      <FloatingTabBar />
    </View>
  );
}
