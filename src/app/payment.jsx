import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';
import { paymentServices } from '../data';

export default function PaymentForServicesScreen() {
  const router = useRouter();
  const [services, setServices] = useState(paymentServices);

  const toggleItem = (id) => {
    setServices(prev =>
      prev.map(s => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  const total = services
    .filter(s => s.selected)
    .reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    router.push('/cards');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Payment for services"
        subtitle="Verify Order Items"
        showBack={true}
        rightAction={
          <TouchableOpacity onPress={() => router.push('/cards')} style={styles.cardIconBtn}>
            <Ionicons name="card-outline" size={22} color={colors.heading} />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Services Cart List (Sketch: Welding $40, Foundation $55, Waterproofing $20, Total $105) */}
        <Text style={styles.sectionTitle}>ORDERED SERVICES</Text>

        <View style={styles.servicesList}>
          {services.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => toggleItem(item.id)}
              style={[
                styles.serviceCard,
                item.selected && styles.serviceCardActive,
              ]}
            >
              <Image source={item.image} style={styles.serviceImage} resizeMode="cover" />

              <View style={styles.serviceDetails}>
                <Text style={styles.serviceName}>{item.name}</Text>
                <Text style={styles.serviceUnit}>{item.unit}</Text>
                <Text style={styles.servicePrice}>${item.price}</Text>
              </View>

              <View style={[styles.checkbox, item.selected && styles.checkboxActive]}>
                {item.selected && <Ionicons name="checkmark" size={16} color={colors.white} />}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Total Summary Card (Sketch: Total $105) */}
        <View style={styles.totalCard}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalAmount}>${total}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Service Guarantee ($500 Insured)</Text>
            <Text style={[styles.totalAmount, { color: colors.primary }]}>FREE</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.grandTotalLabel}>Total</Text>
            <Text style={styles.grandTotalAmount}>${total}</Text>
          </View>
        </View>

        {/* Checkout CTA */}
        <Button
          title={`Checkout • $${total}`}
          onPress={handleCheckout}
          variant="primary"
          style={styles.checkoutBtn}
          icon={<Ionicons name="lock-closed" size={18} color={colors.white} />}
        />
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
  },
  cardIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.textSecondary,
    marginTop: 14,
    marginBottom: 12,
    marginLeft: 4,
  },
  servicesList: {
    gap: 12,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  serviceCardActive: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  serviceDetails: {
    flex: 1,
    marginLeft: 14,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.heading,
  },
  serviceUnit: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary,
    marginTop: 4,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  totalCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    marginTop: 24,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  totalLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  totalAmount: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.heading,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
  grandTotalLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.heading,
  },
  grandTotalAmount: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.primary,
  },
  checkoutBtn: {
    marginTop: 24,
  },
});
