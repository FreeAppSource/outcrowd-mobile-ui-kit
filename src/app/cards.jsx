import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';
import { paymentCards } from '../data';

export default function PaymentCardsScreen() {
  const router = useRouter();
  const [selectedCardId, setSelectedCardId] = useState('card-1');

  // Input states (Sketch: Card Number, Exp. Month, Exp. Year, CVV)
  const [cardNumber, setCardNumber] = useState('4829 3920 1849 3872');
  const [expMonth, setExpMonth] = useState('17');
  const [expYear, setExpYear] = useState('2020');
  const [cvv, setCvv] = useState('287');
  const [saving, setSaving] = useState(false);

  const handlePayNow = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      Alert.alert(
        'Payment Successful! 🎉',
        'Your payment for services has been completed and insured for $500.',
        [
          {
            text: 'View Orders',
            onPress: () => router.replace('/(tabs)/orders'),
          },
        ]
      );
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Payment cards"
        subtitle="Manage Digital Wallet"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Virtual Cards Horizontal Carousel (Sketch: $ 25,388, 3872, 17/20) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
          {paymentCards.map(card => {
            const isSelected = selectedCardId === card.id;

            return (
              <TouchableOpacity
                key={card.id}
                activeOpacity={0.85}
                onPress={() => setSelectedCardId(card.id)}
                style={[
                  styles.cardGraphic,
                  { backgroundColor: card.color },
                  isSelected && styles.cardGraphicActive,
                ]}
              >
                <View style={styles.cardTop}>
                  <Text style={styles.cardBalanceLabel}>Available Balance</Text>
                  <Image source={card.logo} style={styles.cardLogo} resizeMode="contain" />
                </View>

                <Text style={styles.cardBalanceAmount}>{card.balance}</Text>

                <View style={styles.cardBottom}>
                  <View>
                    <Text style={styles.cardDigits}>{card.fullMask}</Text>
                    <Text style={styles.cardHolder}>JEREMÍAS DEL POZO</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.cardExpLabel}>EXPIRES</Text>
                    <Text style={styles.cardExpVal}>{card.exp}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Card Details Form (Sketch: Payment cards_2 inputs) */}
        <View style={styles.formContainer}>
          <Text style={styles.formHeading}>CARD DETAILS</Text>

          {/* Card Number Input */}
          <Text style={styles.inputLabel}>Card Number</Text>
          <View style={styles.inputBox}>
            <Ionicons name="card-outline" size={20} color={colors.textSecondary} style={{ marginRight: 10 }} />
            <TextInput
              style={styles.textInput}
              value={cardNumber}
              onChangeText={setCardNumber}
              keyboardType="numeric"
              placeholder="Card Number"
            />
            <Image
              source={require('../assets/images/visa_logo.png')}
              style={{ width: 32, height: 20 }}
              resizeMode="contain"
            />
          </View>

          {/* Exp Month & Exp Year & CVV Row (Sketch: Exp. Month, Exp.Year, CVV) */}
          <View style={styles.tripletRow}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.inputLabel}>Exp. Month</Text>
              <View style={styles.inputBoxSmall}>
                <TextInput
                  style={styles.textInput}
                  value={expMonth}
                  onChangeText={setExpMonth}
                  keyboardType="numeric"
                  placeholder="MM"
                  maxLength={2}
                />
              </View>
            </View>

            <View style={{ flex: 1, marginHorizontal: 4 }}>
              <Text style={styles.inputLabel}>Exp. Year</Text>
              <View style={styles.inputBoxSmall}>
                <TextInput
                  style={styles.textInput}
                  value={expYear}
                  onChangeText={setExpYear}
                  keyboardType="numeric"
                  placeholder="YYYY"
                  maxLength={4}
                />
              </View>
            </View>

            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.inputLabel}>CVV</Text>
              <View style={styles.inputBoxSmall}>
                <TextInput
                  style={styles.textInput}
                  value={cvv}
                  onChangeText={setCvv}
                  keyboardType="numeric"
                  placeholder="CVV"
                  secureTextEntry
                  maxLength={4}
                />
              </View>
            </View>
          </View>

          {/* Action Button */}
          <Button
            title="Confirm Payment ($105)"
            onPress={handlePayNow}
            loading={saving}
            variant="primary"
            style={{ marginTop: 28 }}
          />
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
    paddingBottom: 40,
  },
  cardsScroll: {
    paddingLeft: 20,
    marginTop: 12,
    marginBottom: 20,
  },
  cardGraphic: {
    width: 290,
    height: 180,
    borderRadius: 22,
    padding: 20,
    marginRight: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  cardGraphicActive: {
    borderWidth: 2,
    borderColor: colors.coral,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBalanceLabel: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
    fontWeight: '600',
  },
  cardLogo: {
    width: 44,
    height: 24,
  },
  cardBalanceAmount: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardDigits: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  cardHolder: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  cardExpLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 9,
    fontWeight: '700',
  },
  cardExpVal: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
    marginTop: 2,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  formHeading: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.heading,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  tripletRow: {
    flexDirection: 'row',
  },
  inputBoxSmall: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  textInput: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.heading,
    flex: 1,
  },
});
