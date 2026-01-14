import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const tintColor = useThemeColor({}, 'tint');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={null}>
      <ThemedView style={styles.container}>
        {/* Header */}
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.appName}>LendBorrow</ThemedText>
          <ThemedText style={styles.tagline}>Instant Loans, Trusted Lenders</ThemedText>
          <TouchableOpacity style={[styles.ctaButton, { backgroundColor: tintColor }]}>
            <ThemedText style={styles.ctaText}>Get Started</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Hero */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Borrow & Lend with Ease</ThemedText>
          <ThemedText style={styles.heroText}>
            Access instant loans or lend money securely. Minimal documentation, OTP verification, and bank/UPI linkage for a seamless experience.
          </ThemedText>
        </ThemedView>

        {/* How It Works */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>How It Works</ThemedText>
          <ThemedView style={styles.stepsContainer}>
            <ThemedView style={styles.step}>
              <Ionicons name="person-add" size={40} color={tintColor} />
              <ThemedText style={styles.stepTitle}>Sign Up</ThemedText>
              <ThemedText style={styles.stepText}>Quick registration with OTP verification</ThemedText>
            </ThemedView>
            <ThemedView style={styles.step}>
              <Ionicons name="card" size={40} color={tintColor} />
              <ThemedText style={styles.stepTitle}>Link Bank/UPI</ThemedText>
              <ThemedText style={styles.stepText}>Securely connect your bank account</ThemedText>
            </ThemedView>
            <ThemedView style={styles.step}>
              <Ionicons name="search" size={40} color={tintColor} />
              <ThemedText style={styles.stepTitle}>Choose Lender</ThemedText>
              <ThemedText style={styles.stepText}>Select from banks or individuals</ThemedText>
            </ThemedView>
            <ThemedView style={styles.step}>
              <Ionicons name="checkmark-circle" size={40} color={tintColor} />
              <ThemedText style={styles.stepTitle}>Borrow & Repay</ThemedText>
              <ThemedText style={styles.stepText}>Get funds instantly, repay within 1 month 5 days</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Features */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Key Features</ThemedText>
          <ThemedView style={styles.featuresContainer}>
            <ThemedView style={styles.featureCard}>
              <Ionicons name="shield-checkmark" size={30} color={tintColor} />
              <ThemedText style={styles.featureTitle}>OTP Verification</ThemedText>
              <ThemedText style={styles.featureText}>Secure and instant verification</ThemedText>
            </ThemedView>
            <ThemedView style={styles.featureCard}>
              <Ionicons name="document-text" size={30} color={tintColor} />
              <ThemedText style={styles.featureTitle}>Minimal KYC</ThemedText>
              <ThemedText style={styles.featureText}>Quick approval with basic details</ThemedText>
            </ThemedView>
            <ThemedView style={styles.featureCard}>
              <Ionicons name="lock-closed" size={30} color={tintColor} />
              <ThemedText style={styles.featureTitle}>Bank Integration</ThemedText>
              <ThemedText style={styles.featureText}>Safe and encrypted transactions</ThemedText>
            </ThemedView>
            <ThemedView style={styles.featureCard}>
              <Ionicons name="people" size={30} color={tintColor} />
              <ThemedText style={styles.featureTitle}>Choose Your Lender</ThemedText>
              <ThemedText style={styles.featureText}>Flexible options for borrowing</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* AI Benefits */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>AI-Powered Benefits</ThemedText>
          <ThemedView style={styles.benefitsContainer}>
            <ThemedView style={styles.benefit}>
              <Ionicons name="bulb" size={30} color={tintColor} />
              <ThemedText style={styles.benefitTitle}>Smart Credit Limits</ThemedText>
              <ThemedText style={styles.benefitText}>AI determines personalized borrowing limits</ThemedText>
            </ThemedView>
            <ThemedView style={styles.benefit}>
              <Ionicons name="shield" size={30} color={tintColor} />
              <ThemedText style={styles.benefitTitle}>Fraud Protection</ThemedText>
              <ThemedText style={styles.benefitText}>Advanced AI detects and prevents fraud</ThemedText>
            </ThemedView>
            <ThemedView style={styles.benefit}>
              <Ionicons name="link" size={30} color={tintColor} />
              <ThemedText style={styles.benefitTitle}>Intelligent Matching</ThemedText>
              <ThemedText style={styles.benefitText}>AI matches borrowers with suitable lenders</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {/* Security & Trust */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Security & Trust</ThemedText>
          <ThemedText style={styles.trustText}>
            Your data is protected with bank-level encryption. We prioritize transparency and build trust through verified lenders and secure transactions.
          </ThemedText>
        </ThemedView>

        {/* Partners */}
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Trusted Partners</ThemedText>
          <ThemedText style={styles.partnersText}>Partnered with leading banks and financial institutions for secure lending.</ThemedText>
        </ThemedView>

        {/* Footer */}
        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>© 2024 LendBorrow. All rights reserved.</ThemedText>
          <ThemedView style={styles.footerLinks}>
            <TouchableOpacity><ThemedText style={styles.link}>Privacy Policy</ThemedText></TouchableOpacity>
            <TouchableOpacity><ThemedText style={styles.link}>Terms of Service</ThemedText></TouchableOpacity>
            <TouchableOpacity><ThemedText style={styles.link}>Contact Us</ThemedText></TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  ctaText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  heroText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  stepsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  step: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  stepText: {
    textAlign: 'center',
    fontSize: 14,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  featureText: {
    textAlign: 'center',
    fontSize: 14,
  },
  benefitsContainer: {
    flexDirection: 'column',
  },
  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  benefitText: {
    fontSize: 14,
    marginLeft: 15,
    flex: 1,
  },
  trustText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  partnersText: {
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  footerText: {
    fontSize: 14,
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  link: {
    fontSize: 14,
    color: '#0a7ea4',
  },
});
