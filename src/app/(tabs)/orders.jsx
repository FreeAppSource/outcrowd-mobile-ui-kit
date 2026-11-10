import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme';
import Header from '../../components/Header';
import { ordersInProgress } from '../../data';

const { width } = Dimensions.get('window');

export default function OrdersInProgressScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Orders in progress"
        subtitle="Track active contracts"
        showBack={false}
        rightAction={
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => router.push('/payment')}
          >
            <Ionicons name="add" size={24} color={colors.white} />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Filter Pills */}
        <View style={styles.filterRow}>
          {['All', 'Active', 'Reviewing', 'Completed'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.filterPill, filter === tab && styles.filterPillActive]}
              onPress={() => setFilter(tab)}
            >
              <Text style={[styles.filterText, filter === tab && styles.filterTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Orders Grid (Sketch: Balcony repair $24, Redecorating $60, Painting $42, Interior $54) */}
        <View style={styles.ordersGrid}>
          {ordersInProgress.map(order => (
            <TouchableOpacity
              key={order.id}
              activeOpacity={0.8}
              onPress={() => router.push('/contractor')}
              style={styles.orderCard}
            >
              <View style={styles.imageBox}>
                <Image source={order.image} style={styles.orderImage} resizeMode="cover" />
                <View style={styles.priceBadge}>
                  <Text style={styles.priceText}>{order.price}</Text>
                </View>
              </View>

              <View style={styles.cardDetails}>
                <Text style={styles.categoryTag}>{order.category.toUpperCase()}</Text>
                <Text style={styles.orderTitle} numberOfLines={1}>{order.title}</Text>
                <Text style={styles.contractorName}>Specialist: {order.contractor}</Text>

                {/* Progress bar */}
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${order.progress * 100}%` }]} />
                </View>

                <View style={styles.cardFooter}>
                  <Text style={styles.statusLabel}>{order.status}</Text>
                  <Text style={styles.percentText}>{Math.round(order.progress * 100)}%</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  plusButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterRow: {
    flexDirection: 'row',
    marginVertical: 12,
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: colors.surface,
  },
  filterPillActive: {
    backgroundColor: colors.heading,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  filterTextActive: {
    color: colors.white,
  },
  ordersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  orderCard: {
    width: (width - 32 - 12) / 2,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.borderLight,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  imageBox: {
    height: 120,
    width: '100%',
    position: 'relative',
  },
  orderImage: {
    width: '100%',
    height: '100%',
  },
  priceBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  priceText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },
  cardDetails: {
    padding: 12,
  },
  categoryTag: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.coral,
    letterSpacing: 0.5,
  },
  orderTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.heading,
    marginTop: 2,
  },
  contractorName: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.surface,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  statusLabel: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '600',
  },
  percentText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.heading,
  },
});
