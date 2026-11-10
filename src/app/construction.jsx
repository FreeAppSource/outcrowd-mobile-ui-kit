import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors } from '../theme';
import Header from '../components/Header';
import Button from '../components/Button';
import { constructionSubcategories } from '../data';

export default function ConstructionWorksScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState(['sub-1', 'sub-2', 'sub-4']);

  const toggleSelect = (id) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filtered = constructionSubcategories.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Construction works"
        subtitle="Select subcategories"
        showBack={true}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Search */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search by category"
            placeholderTextColor={colors.textMuted}
          />
        </View>

        {/* Subcategories (Sketch: Welding, Foundation, Roofing, Waterproofing, Architecture, Design) */}
        <Text style={styles.sectionTitle}>SPECIALIZATION</Text>

        <View style={styles.list}>
          {filtered.map(item => {
            const isChecked = selectedItems.includes(item.id);

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                onPress={() => toggleSelect(item.id)}
                style={[
                  styles.itemCard,
                  isChecked && styles.itemCardSelected,
                ]}
              >
                <View style={styles.itemLeft}>
                  <View style={[styles.iconWrap, isChecked && { backgroundColor: colors.primary }]}>
                    <Ionicons
                      name={item.icon}
                      size={22}
                      color={isChecked ? colors.white : colors.heading}
                    />
                  </View>
                  <View>
                    <Text style={[styles.itemName, isChecked && { color: colors.primary }]}>
                      {item.name}
                    </Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </View>

                <View style={[styles.checkCircle, isChecked && { backgroundColor: colors.primary, borderColor: colors.primary }]}>
                  {isChecked && <Ionicons name="checkmark" size={16} color={colors.white} />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Action Buttons (Sketch: Skip & Done) */}
        <View style={styles.actionsRow}>
          <Button
            title="Skip"
            variant="outline"
            onPress={() => router.push('/(tabs)/orders')}
            style={{ flex: 1, marginRight: 8 }}
          />
          <Button
            title="Done"
            variant="primary"
            onPress={() => router.push('/payment')}
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
    marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: colors.heading,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: colors.textSecondary,
    marginTop: 10,
    marginBottom: 12,
    marginLeft: 4,
  },
  list: {
    gap: 10,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  itemCardSelected: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.heading,
  },
  itemPrice: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
    fontWeight: '600',
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    marginTop: 24,
  },
});
