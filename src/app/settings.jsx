import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../theme';
import Header from '../components/Header';

export default function SettingsScreen() {
  const router = useRouter();

  // Settings items from Sketch artboard 14:
  // Payment cards, Write to us, Rate us on app store, About Us, Log Out
  const items = [
    { title: 'Payment cards', icon: 'card-outline', route: '/cards' },
    {
      title: 'Write to us',
      icon: 'mail-outline',
      action: () => Alert.alert('Contact Support', 'Email: support@outcrowd.com'),
    },
    {
      title: 'Rate us on app store',
      icon: 'star-outline',
      action: () => Alert.alert('Rate Outcrowd', 'Thank you for your rating! ⭐⭐⭐⭐⭐'),
    },
    {
      title: 'About Us',
      icon: 'information-circle-outline',
      action: () =>
        Alert.alert(
          'About Outcrowd Mobile UI Kit',
          'Crafted with passion by Outcrowd Design Agency. Fully implemented with React Native and Expo Router.'
        ),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Settings"
        subtitle="App Preferences"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.menuCard}>
          {items.map((item, idx) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.itemRow,
                idx > 0 && { borderTopWidth: 1, borderTopColor: colors.borderLight },
              ]}
              onPress={() => {
                if (item.route) {
                  router.push(item.route);
                } else if (item.action) {
                  item.action();
                }
              }}
            >
              <View style={styles.itemLeft}>
                <View style={styles.iconBox}>
                  <Ionicons name={item.icon} size={20} color={colors.heading} />
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Log Out Button (Sketch: Log Out) */}
        <TouchableOpacity
          style={styles.logoutCard}
          onPress={() => router.replace('/login')}
        >
          <Ionicons name="log-out-outline" size={22} color={colors.coral} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  menuCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    overflow: 'hidden',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.heading,
  },
  logoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.coralSoft,
    borderRadius: 18,
    paddingVertical: 16,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.coral,
  },
});
