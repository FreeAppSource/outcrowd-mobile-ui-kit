import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme';
import Header from '../../components/Header';
import { notificationsList } from '../../data';

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Notification"
        subtitle="Contractor Updates & Alerts"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {notificationsList.map(item => (
          <View key={item.id} style={styles.notifCard}>
            <View style={styles.cardHeader}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.headerTexts}>
                <Text style={styles.senderName}>{item.sender}</Text>
                <Text style={styles.companyName}>{item.company}</Text>
              </View>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>

            <Text style={styles.bodyText}>{item.text}</Text>

            <View style={styles.actionRow}>
              <TouchableOpacity
                style={styles.detailBtn}
                onPress={() => router.push('/contractor')}
              >
                <Text style={styles.detailBtnText}>View Details</Text>
                <Ionicons name="arrow-forward" size={14} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
    paddingBottom: 40,
    paddingTop: 8,
  },
  notifCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  headerTexts: {
    marginLeft: 12,
    flex: 1,
  },
  senderName: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.heading,
  },
  companyName: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 1,
  },
  timeText: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '600',
  },
  bodyText: {
    fontSize: 14,
    color: colors.heading,
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  detailBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  detailBtnText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primary,
  },
});
