import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { userProfile } from '../../data';

export default function ProfileScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('About Me');
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Profile"
        subtitle={userProfile.id}
        showBack={false}
        rightAction={
          <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuBtn}>
            <Ionicons name="menu" size={24} color={colors.heading} />
          </TouchableOpacity>
        }
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Card Header (Sketch: Jeremías del Pozo, New York, ID: 1120611, Edit) */}
        <View style={styles.profileHeader}>
          <Image source={userProfile.avatar} style={styles.avatar} />
          <Text style={styles.userName}>{userProfile.name}</Text>
          <Text style={styles.location}>{userProfile.location} · {userProfile.id}</Text>

          <TouchableOpacity style={styles.editBtn}>
            <Ionicons name="pencil" size={14} color={colors.primary} />
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Switcher: About Me vs Reviews (Sketch artboard 7: About Me / Reviews) */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'About Me' && styles.tabBtnActive]}
            onPress={() => setActiveTab('About Me')}
          >
            <Text style={[styles.tabText, activeTab === 'About Me' && styles.tabTextActive]}>
              About Me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'Reviews' && styles.tabBtnActive]}
            onPress={() => setActiveTab('Reviews')}
          >
            <Text style={[styles.tabText, activeTab === 'Reviews' && styles.tabTextActive]}>
              Reviews (128)
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'About Me' ? (
          <View style={styles.tabContent}>
            {/* Phone Number (Sketch: Phone number -> +3746589923) */}
            <View style={styles.infoRow}>
              <View style={styles.infoIconWrap}>
                <Ionicons name="call-outline" size={20} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.infoLabel}>Phone number</Text>
                <Text style={styles.infoValue}>{userProfile.phone}</Text>
              </View>
            </View>

            {/* Email (Sketch: Email -> conrad@gmail.com) */}
            <View style={styles.infoRow}>
              <View style={styles.infoIconWrap}>
                <Ionicons name="mail-outline" size={20} color={colors.primary} />
              </View>
              <View>
                <Text style={styles.infoLabel}>Email</Text>
                <Text style={styles.infoValue}>{userProfile.email}</Text>
              </View>
            </View>

            {/* Bio */}
            <View style={styles.bioCard}>
              <Text style={styles.bioLabel}>BIO & WORK EXPERIENCE</Text>
              <Text style={styles.bioText}>{userProfile.bio}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.tabContent}>
            <View style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>Cole Payne</Text>
                <View style={styles.stars}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Ionicons key={s} name="star" size={14} color="#FFD166" />
                  ))}
                </View>
              </View>
              <Text style={styles.reviewText}>
                Jeremías is an extraordinary craftsman. Fixed our apartment foundation in record time!
              </Text>
            </View>
          </View>
        )}

        {/* Quick Links */}
        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.linkItem} onPress={() => router.push('/cards')}>
            <View style={styles.linkLeft}>
              <Ionicons name="card-outline" size={22} color={colors.primary} />
              <Text style={styles.linkTitle}>Payment Cards</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkItem} onPress={() => router.push('/settings')}>
            <View style={styles.linkLeft}>
              <Ionicons name="settings-outline" size={22} color={colors.primary} />
              <Text style={styles.linkTitle}>App Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menu Profile Drawer Modal (Sketch artboard 8: Menu Profile) */}
      <Modal visible={menuVisible} animationType="fade" transparent>
        <View style={styles.modalBackdrop}>
          <View style={styles.menuDrawer}>
            <View style={styles.menuHeader}>
              <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeBtn}>
                <Ionicons name="close" size={24} color={colors.heading} />
              </TouchableOpacity>
            </View>

            <View style={styles.menuUser}>
              <Image source={userProfile.avatar} style={styles.menuAvatar} />
              <Text style={styles.menuName}>{userProfile.name}</Text>
              <Text style={styles.menuLoc}>{userProfile.location}</Text>
            </View>

            {/* Menu Items: Home, Settings, Profile, Messages, Reviews */}
            <View style={styles.menuItems}>
              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => {
                  setMenuVisible(false);
                  router.push('/(tabs)');
                }}
              >
                <Ionicons name="home-outline" size={22} color={colors.heading} />
                <Text style={styles.menuText}>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => {
                  setMenuVisible(false);
                  router.push('/settings');
                }}
              >
                <Ionicons name="settings-outline" size={22} color={colors.heading} />
                <Text style={styles.menuText}>Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => setMenuVisible(false)}
              >
                <Ionicons name="person-outline" size={22} color={colors.primary} />
                <Text style={[styles.menuText, { color: colors.primary, fontWeight: '800' }]}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => {
                  setMenuVisible(false);
                  router.push('/(tabs)/notifications');
                }}
              >
                <Ionicons name="chatbubbles-outline" size={22} color={colors.heading} />
                <Text style={styles.menuText}>Messages</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => {
                  setMenuVisible(false);
                  setActiveTab('Reviews');
                }}
              >
                <Ionicons name="star-outline" size={22} color={colors.heading} />
                <Text style={styles.menuText}>Reviews</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => {
                setMenuVisible(false);
                router.replace('/login');
              }}
            >
              <Ionicons name="log-out-outline" size={20} color={colors.coral} />
              <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  menuBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.heading,
    marginTop: 12,
  },
  location: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10,
  },
  editText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.primary,
  },
  tabsRow: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 4,
    marginBottom: 20,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  tabBtnActive: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.heading,
  },
  tabContent: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 18,
  },
  infoIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  infoLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.heading,
    marginTop: 2,
  },
  bioCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
  },
  bioLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  bioText: {
    fontSize: 14,
    color: colors.heading,
    lineHeight: 20,
  },
  reviewCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.heading,
  },
  stars: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 13,
    color: colors.heading,
    lineHeight: 18,
  },
  quickLinks: {
    marginTop: 24,
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  linkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  linkLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  linkTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.heading,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
  },
  menuDrawer: {
    width: '80%',
    height: '100%',
    backgroundColor: colors.white,
    padding: 24,
    justifyContent: 'space-between',
  },
  menuHeader: {
    alignItems: 'flex-end',
  },
  closeBtn: {
    padding: 4,
  },
  menuUser: {
    alignItems: 'center',
    marginVertical: 10,
  },
  menuAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  menuName: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.heading,
    marginTop: 8,
  },
  menuLoc: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  menuItems: {
    gap: 16,
    marginVertical: 20,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.heading,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.coral,
  },
});
