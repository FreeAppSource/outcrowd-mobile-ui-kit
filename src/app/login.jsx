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

export default function SignInScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('Jeremias');
  const [password, setPassword] = useState('••••••••');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color={colors.heading} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign In</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Outcrowd Illustration */}
        <View style={styles.heroBox}>
          <Image
            source={require('../assets/images/signin_hero.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Inputs */}
        <View style={styles.form}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
              placeholderTextColor={colors.textMuted}
            />
          </View>

          <Text style={[styles.inputLabel, { marginTop: 16 }]}>Password</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={colors.textMuted}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              <Ionicons
                name={showPass ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.textMuted}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>

          <Button
            title="Login"
            onPress={handleLogin}
            variant="primary"
            style={{ marginTop: 20 }}
          />

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Social Logins */}
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

          {/* Sign Up Redirect */}
          <TouchableOpacity onPress={() => router.push('/signup')} style={styles.switchAuth}>
            <Text style={styles.switchPrompt}>
              Don’t have an account? <Text style={styles.switchHighlight}>Sign Up</Text>
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
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  form: {
    marginTop: 10,
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
    height: 52,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.heading,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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
    marginTop: 24,
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
