import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { colors } from '../theme';

export default function Button({
  title,
  onPress,
  variant = 'primary', // primary, secondary, outline, coral
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}) {
  const getBackgroundColor = () => {
    if (disabled) return colors.border;
    switch (variant) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.heading;
      case 'coral':
        return colors.coral;
      case 'outline':
        return 'transparent';
      default:
        return colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return colors.textMuted;
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'coral':
        return colors.white;
      case 'outline':
        return colors.heading;
      default:
        return colors.white;
    }
  };

  const getHeight = () => {
    switch (size) {
      case 'small':
        return 42;
      case 'large':
        return 58;
      default:
        return 52;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          height: getHeight(),
          borderWidth: variant === 'outline' ? 1.5 : 0,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  iconContainer: {
    marginRight: 8,
  },
});
