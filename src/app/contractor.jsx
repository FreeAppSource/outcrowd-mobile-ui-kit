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
import { colors } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';
import { userProfile } from '../data';

const { width } = Dimensions.get('window');

export default function ContractorCustomerInfoScreen() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Customer info"
        subtitle="Contractor Overview"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Card Header */}
        <View style={styles.profileHeader}>
          <Image source={userProfile.avatar} style={styles.avatar} />
          <View style={styles.headerTexts}>
            <Text style={styles.contractorName}>{userProfile.name}</Text>
            <Text style={styles.location}>{userProfile.location} · {userProfile.id}</Text>
            <View style={styles.ratingBadge}>
              <Ionicons name="star" size={14} color="#FFD166" />
              <Text style={styles.ratingText}>{userProfile.rating} ({userProfile.reviewsCount} reviews)</Text>
            </View>
          </View>
        </View>

        {/* Portfolio Section (Sketch: Portfolio - The last completed works of the contractor are shown below) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>PORTFOLIO</Text>
          <Text style={styles.sectionDesc}>
            The last completed works of the contractor are shown below.
          </Text>
        </View>

        {/* Portfolio Gallery Grid */}
        <View style={styles.portfolioGrid}>
          {userProfile.portfolio.map((img, idx) => (
            <TouchableOpacity key={idx} activeOpacity={0.85} style={styles.portfolioItem}>
              <Image source={img} style={styles.portfolioImage} resizeMode="cover" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Details / Bio Section (Sketch: Details - I have been working in this position for over 10 years...) */}
        <View style={styles.detailsBox}>
          <Text style={styles.detailsHeading}>DETAILS</Text>
          <Text style={styles.bioText} numberOfLines={expanded ? undefined : 3}>
            {userProfile.bio}
          </Text>
          <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.readMoreBtn}>
            <Text style={styles.readMoreText}>{expanded ? 'Show less' : 'Read more'}</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Strip */}
        <View style={styles.contactCard}>
          <View style={styles.contactItem}>
            <Ionicons name="call-outline" size={20} color={colors.primary} />
            <Text style={styles.contactVal}>{userProfile.phone}</Text>
          </View>
          <View style={styles.contactDivider} />
          <View style={styles.contactItem}>
            <Ionicons name="mail-outline" size={20} color={colors.primary} />
            <Text style={styles.contactVal}>{userProfile.email}</Text>
          </View>
        </View>

        {/* CTA */}
        <Button
          title="Book This Specialist"
          onPress={() => router.push('/payment')}
          variant="primary"
          style={{ marginTop: 24 }}
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  headerTexts: {
    marginLeft: 16,
    flex: 1,
  },
  contractorName: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.heading,
  },
  location: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.heading,
    marginLeft: 4,
  },
  sectionHeader: {
    marginTop: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.heading,
  },
  sectionDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  portfolioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  portfolioItem: {
    width: (width - 40 - 10) / 2,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 10,
  },
  portfolioImage: {
    width: '100%',
    height: '100%',
  },
  detailsBox: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    marginTop: 10,
  },
  detailsHeading: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  bioText: {
    fontSize: 14,
    color: colors.heading,
    lineHeight: 21,
  },
  readMoreBtn: {
    marginTop: 8,
  },
  readMoreText: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.primary,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 14,
  },
  contactItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactVal: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.heading,
    marginLeft: 8,
  },
  contactDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.border,
    marginHorizontal: 8,
  },
});
