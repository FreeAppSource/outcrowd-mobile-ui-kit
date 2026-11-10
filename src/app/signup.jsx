import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../theme';
import Button from '../components/Button';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={colors.heading} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign Up</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Outcrowd Sign Up Hero */}
        <View style={styles.heroBox}>
          <Image
            source={require('../assets/images/signup_hero.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.inputLabel}>Enter email</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={[styles.inputLabel, { marginTop: 14 }]}>Enter password</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Create strong password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
            />
          </View>

          <Text style={[styles.inputLabel, { marginTop: 14 }]}>Confirm password</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Repeat your password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
            />
          </View>

          <Button
            title="Sign Up"
            onPress={handleSignUp}
            variant="primary"
            style={{ marginTop: 22 }}
          />

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialRow}>
            <TouchableOpacity style={[styles.socialBtn, { backgroundColor: colors.socialFacebook }]}>
              <Ionicons name="logo-facebook" size={20} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialBtn, { backgroundColor: colors.socialTwitter }]}>
              <Ionicons name="logo-twitter" size={20} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialBtn, { backgroundColor: colors.socialLinkedIn }]}>
              <Ionicons name="logo-linkedin" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push('/login')} style={styles.switchAuth}>
            <Text style={styles.switchPrompt}>
              Already have an account? <Text style={styles.switchHighlight}>Sign In</Text>
            </Text>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.heading,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  heroBox: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  form: {
    marginTop: 6,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.heading,
    marginBottom: 6,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 50,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.heading,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '600',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchAuth: {
    alignItems: 'center',
    marginTop: 22,
  },
  switchPrompt: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  switchHighlight: {
    fontWeight: '800',
    color: colors.primary,
  },
});
