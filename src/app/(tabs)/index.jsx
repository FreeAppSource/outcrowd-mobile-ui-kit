import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../../theme';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { categoriesList } from '../../data';

const { width } = Dimensions.get('window');

export default function CategoriesScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Construction works');

  const filteredCategories = categoriesList.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (category) => {
    setSelectedCategory(category.name);
    if (category.name === 'Construction works') {
      router.push('/construction');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Categories"
        subtitle="Find Verified Specialists"
        showBack={false}
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search Bar (Sketch: Search by category) */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search by category"
            placeholderTextColor={colors.textMuted}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={18} color={colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>

        {/* Quick Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoTexts}>
            <Text style={styles.promoTag}>500$ INSURANCE</Text>
            <Text style={styles.promoTitle}>Orders Protected</Text>
            <Text style={styles.promoDesc}>Every contract is backed with 100% guarantee.</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/payment')} style={styles.promoBtn}>
            <Text style={styles.promoBtnText}>View Cart</Text>
          </TouchableOpacity>
        </View>

        {/* Categories Grid (Sketch: Courier, Furniture, Cleaning, Equipment, Interior, Construction) */}
        <Text style={styles.sectionTitle}>ALL SERVICES</Text>

        <View style={styles.grid}>
          {filteredCategories.map((cat) => {
            const isSelected = selectedCategory === cat.name;

            return (
              <TouchableOpacity
                key={cat.id}
                activeOpacity={0.8}
                onPress={() => handleSelect(cat)}
                style={[
                  styles.categoryCard,
                  isSelected && styles.categoryCardSelected,
                ]}
              >
                <View style={[styles.iconWrap, isSelected && { backgroundColor: colors.primary }]}>
                  <Ionicons
                    name={cat.icon}
                    size={28}
                    color={isSelected ? colors.white : colors.heading}
                  />
                </View>

                <Text style={[styles.categoryName, isSelected && { color: colors.primary }]}>
                  {cat.name}
                </Text>

                <Text style={styles.categoryCount}>{cat.count}</Text>

                {cat.isHot && (
                  <View style={styles.hotBadge}>
                    <Text style={styles.hotText}>POPULAR</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Bottom Actions (Sketch: Back & Next) */}
        <View style={styles.actionsRow}>
          <Button
            title="Contractor Info"
            variant="outline"
            onPress={() => router.push('/contractor')}
            style={{ flex: 1, marginRight: 8 }}
          />

          <Button
            title="Next Step"
            variant="primary"
            onPress={() => router.push('/construction')}
            style={{ flex: 1, marginLeft: 8 }}
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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.heading,
    marginLeft: 10,
  },
  promoBanner: {
    backgroundColor: colors.primarySoft,
    borderRadius: 20,
    padding: 18,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  promoTexts: {
    flex: 1,
    marginRight: 10,
  },
  promoTag: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.primaryDark,
    letterSpacing: 0.5,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.heading,
    marginTop: 2,
  },
  promoDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  promoBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  promoBtnText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.textSecondary,
    marginTop: 16,
    marginBottom: 12,
    marginLeft: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 40 - 12) / 2,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: 'transparent',
    position: 'relative',
  },
  categoryCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.white,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.heading,
    lineHeight: 20,
  },
  categoryCount: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
    fontWeight: '600',
  },
  hotBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: colors.coralSoft,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
  },
  hotText: {
    fontSize: 9,
    fontWeight: '800',
    color: colors.coral,
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
