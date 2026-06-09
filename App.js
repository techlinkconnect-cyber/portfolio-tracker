import { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const currencyOptions = [
  { label: 'Afghanistan (AFN)', value: 'Afghanistan' },
  { label: 'Albania (ALL)', value: 'Albania' },
  { label: 'Algeria (DZD)', value: 'Algeria' },
  { label: 'Andorra (EUR)', value: 'Andorra' },
  { label: 'Angola (AOA)', value: 'Angola' },
  { label: 'Antigua and Barbuda (XCD)', value: 'Antigua and Barbuda' },
  { label: 'Argentina (ARS)', value: 'Argentina' },
  { label: 'Armenia (AMD)', value: 'Armenia' },
  { label: 'Australia (AUD)', value: 'Australia' },
  { label: 'Austria (EUR)', value: 'Austria' },
  { label: 'Azerbaijan (AZN)', value: 'Azerbaijan' },
  { label: 'Bahamas (BSD)', value: 'Bahamas' },
  { label: 'Bahrain (BHD)', value: 'Bahrain' },
  { label: 'Bangladesh (BDT)', value: 'Bangladesh' },
  { label: 'Barbados (BBD)', value: 'Barbados' },
  { label: 'Belarus (BYN)', value: 'Belarus' },
  { label: 'Belgium (EUR)', value: 'Belgium' },
  { label: 'Belize (BZD)', value: 'Belize' },
  { label: 'Benin (XOF)', value: 'Benin' },
  { label: 'Bhutan (BTN)', value: 'Bhutan' },
  { label: 'Bolivia (BOB)', value: 'Bolivia' },
  { label: 'Bosnia and Herzegovina (BAM)', value: 'Bosnia and Herzegovina' },
  { label: 'Botswana (BWP)', value: 'Botswana' },
  { label: 'Brazil (BRL)', value: 'Brazil' },
  { label: 'Brunei (BND)', value: 'Brunei' },
  { label: 'Bulgaria (BGN)', value: 'Bulgaria' },
  { label: 'Burkina Faso (XOF)', value: 'Burkina Faso' },
  { label: 'Burundi (BIF)', value: 'Burundi' },
  { label: 'Cabo Verde (CVE)', value: 'Cabo Verde' },
  { label: 'Cambodia (KHR)', value: 'Cambodia' },
  { label: 'Cameroon (XAF)', value: 'Cameroon' },
  { label: 'Canada (CAD)', value: 'Canada' },
  { label: 'Central African Republic (XAF)', value: 'Central African Republic' },
  { label: 'Chad (XAF)', value: 'Chad' },
  { label: 'Chile (CLP)', value: 'Chile' },
  { label: 'China (CNY)', value: 'China' },
  { label: 'Colombia (COP)', value: 'Colombia' },
  { label: 'Comoros (KMF)', value: 'Comoros' },
  { label: 'Congo (Congo-Brazzaville) (XAF)', value: 'Congo (Congo-Brazzaville)' },
  { label: 'Costa Rica (CRC)', value: 'Costa Rica' },
  { label: 'Croatia (HRK)', value: 'Croatia' },
  { label: 'Cuba (CUP)', value: 'Cuba' },
  { label: 'Cyprus (EUR)', value: 'Cyprus' },
  { label: 'Czechia (CZK)', value: 'Czechia' },
  { label: 'Democratic Republic of the Congo (CDF)', value: 'Democratic Republic of the Congo' },
  { label: 'Denmark (DKK)', value: 'Denmark' },
  { label: 'Djibouti (DJF)', value: 'Djibouti' },
  { label: 'Dominica (XCD)', value: 'Dominica' },
  { label: 'Dominican Republic (DOP)', value: 'Dominican Republic' },
  { label: 'Ecuador (USD)', value: 'Ecuador' },
  { label: 'Egypt (EGP)', value: 'Egypt' },
  { label: 'El Salvador (USD)', value: 'El Salvador' },
  { label: 'Equatorial Guinea (XAF)', value: 'Equatorial Guinea' },
  { label: 'Eritrea (ERN)', value: 'Eritrea' },
  { label: 'Estonia (EUR)', value: 'Estonia' },
  { label: 'Eswatini (SZL)', value: 'Eswatini' },
  { label: 'Ethiopia (ETB)', value: 'Ethiopia' },
  { label: 'Fiji (FJD)', value: 'Fiji' },
  { label: 'Finland (EUR)', value: 'Finland' },
  { label: 'France (EUR)', value: 'France' },
  { label: 'Gabon (XAF)', value: 'Gabon' },
  { label: 'Gambia (GMD)', value: 'Gambia' },
  { label: 'Georgia (GEL)', value: 'Georgia' },
  { label: 'Germany (EUR)', value: 'Germany' },
  { label: 'Ghana (GHS)', value: 'Ghana' },
  { label: 'Greece (EUR)', value: 'Greece' },
  { label: 'Grenada (XCD)', value: 'Grenada' },
  { label: 'Guatemala (GTQ)', value: 'Guatemala' },
  { label: 'Guinea (GNF)', value: 'Guinea' },
  { label: 'Guinea-Bissau (XOF)', value: 'Guinea-Bissau' },
  { label: 'Guyana (GYD)', value: 'Guyana' },
  { label: 'Haiti (HTG)', value: 'Haiti' },
  { label: 'Honduras (HNL)', value: 'Honduras' },
  { label: 'Hungary (HUF)', value: 'Hungary' },
  { label: 'Iceland (ISK)', value: 'Iceland' },
  { label: 'India (INR)', value: 'India' },
  { label: 'Indonesia (IDR)', value: 'Indonesia' },
  { label: 'Iran (IRR)', value: 'Iran' },
  { label: 'Iraq (IQD)', value: 'Iraq' },
  { label: 'Ireland (EUR)', value: 'Ireland' },
  { label: 'Israel (ILS)', value: 'Israel' },
  { label: 'Italy (EUR)', value: 'Italy' },
  { label: 'Jamaica (JMD)', value: 'Jamaica' },
  { label: 'Japan (JPY)', value: 'Japan' },
  { label: 'Jordan (JOD)', value: 'Jordan' },
  { label: 'Kazakhstan (KZT)', value: 'Kazakhstan' },
  { label: 'Kenya (KES)', value: 'Kenya' },
  { label: 'Kiribati (AUD)', value: 'Kiribati' },
  { label: 'Kuwait (KWD)', value: 'Kuwait' },
  { label: 'Kyrgyzstan (KGS)', value: 'Kyrgyzstan' },
  { label: 'Laos (LAK)', value: 'Laos' },
  { label: 'Latvia (EUR)', value: 'Latvia' },
  { label: 'Lebanon (LBP)', value: 'Lebanon' },
  { label: 'Lesotho (LSL)', value: 'Lesotho' },
  { label: 'Liberia (LRD)', value: 'Liberia' },
  { label: 'Libya (LYD)', value: 'Libya' },
  { label: 'Liechtenstein (CHF)', value: 'Liechtenstein' },
  { label: 'Lithuania (EUR)', value: 'Lithuania' },
  { label: 'Luxembourg (EUR)', value: 'Luxembourg' },
  { label: 'Madagascar (MGA)', value: 'Madagascar' },
  { label: 'Malawi (MWK)', value: 'Malawi' },
  { label: 'Malaysia (MYR)', value: 'Malaysia' },
  { label: 'Maldives (MVR)', value: 'Maldives' },
  { label: 'Mali (XOF)', value: 'Mali' },
  { label: 'Malta (EUR)', value: 'Malta' },
  { label: 'Marshall Islands (USD)', value: 'Marshall Islands' },
  { label: 'Mauritania (MRU)', value: 'Mauritania' },
  { label: 'Mauritius (MUR)', value: 'Mauritius' },
  { label: 'Mexico (MXN)', value: 'Mexico' },
  { label: 'Micronesia (USD)', value: 'Micronesia' },
  { label: 'Moldova (MDL)', value: 'Moldova' },
  { label: 'Monaco (EUR)', value: 'Monaco' },
  { label: 'Mongolia (MNT)', value: 'Mongolia' },
  { label: 'Montenegro (EUR)', value: 'Montenegro' },
  { label: 'Morocco (MAD)', value: 'Morocco' },
  { label: 'Mozambique (MZN)', value: 'Mozambique' },
  { label: 'Myanmar (MMK)', value: 'Myanmar' },
  { label: 'Namibia (NAD)', value: 'Namibia' },
  { label: 'Nauru (AUD)', value: 'Nauru' },
  { label: 'Nepal (NPR)', value: 'Nepal' },
  { label: 'Netherlands (EUR)', value: 'Netherlands' },
  { label: 'New Zealand (NZD)', value: 'New Zealand' },
  { label: 'Nicaragua (NIO)', value: 'Nicaragua' },
  { label: 'Niger (XOF)', value: 'Niger' },
  { label: 'Nigeria (NGN)', value: 'Nigeria' },
  { label: 'North Korea (KPW)', value: 'North Korea' },
  { label: 'North Macedonia (MKD)', value: 'North Macedonia' },
  { label: 'Norway (NOK)', value: 'Norway' },
  { label: 'Oman (OMR)', value: 'Oman' },
  { label: 'Pakistan (PKR)', value: 'Pakistan' },
  { label: 'Palau (USD)', value: 'Palau' },
  { label: 'Panama (PAB)', value: 'Panama' },
  { label: 'Papua New Guinea (PGK)', value: 'Papua New Guinea' },
  { label: 'Paraguay (PYG)', value: 'Paraguay' },
  { label: 'Peru (PEN)', value: 'Peru' },
  { label: 'Philippines (PHP)', value: 'Philippines' },
  { label: 'Poland (PLN)', value: 'Poland' },
  { label: 'Portugal (EUR)', value: 'Portugal' },
  { label: 'Qatar (QAR)', value: 'Qatar' },
  { label: 'Romania (RON)', value: 'Romania' },
  { label: 'Russia (RUB)', value: 'Russia' },
  { label: 'Rwanda (RWF)', value: 'Rwanda' },
  { label: 'Saint Kitts and Nevis (XCD)', value: 'Saint Kitts and Nevis' },
  { label: 'Saint Lucia (XCD)', value: 'Saint Lucia' },
  { label: 'Saint Vincent and the Grenadines (XCD)', value: 'Saint Vincent and the Grenadines' },
  { label: 'Samoa (WST)', value: 'Samoa' },
  { label: 'San Marino (EUR)', value: 'San Marino' },
  { label: 'Sao Tome and Principe (STN)', value: 'Sao Tome and Principe' },
  { label: 'Saudi Arabia (SAR)', value: 'Saudi Arabia' },
  { label: 'Senegal (XOF)', value: 'Senegal' },
  { label: 'Serbia (RSD)', value: 'Serbia' },
  { label: 'Seychelles (SCR)', value: 'Seychelles' },
  { label: 'Sierra Leone (SLL)', value: 'Sierra Leone' },
  { label: 'Singapore (SGD)', value: 'Singapore' },
  { label: 'Slovakia (EUR)', value: 'Slovakia' },
  { label: 'Slovenia (EUR)', value: 'Slovenia' },
  { label: 'Solomon Islands (SBD)', value: 'Solomon Islands' },
  { label: 'Somalia (SOS)', value: 'Somalia' },
  { label: 'South Africa (ZAR)', value: 'South Africa' },
  { label: 'South Korea (KRW)', value: 'South Korea' },
  { label: 'South Sudan (SSP)', value: 'South Sudan' },
  { label: 'Spain (EUR)', value: 'Spain' },
  { label: 'Sri Lanka (LKR)', value: 'Sri Lanka' },
  { label: 'Sudan (SDG)', value: 'Sudan' },
  { label: 'Suriname (SRD)', value: 'Suriname' },
  { label: 'Sweden (SEK)', value: 'Sweden' },
  { label: 'Switzerland (CHF)', value: 'Switzerland' },
  { label: 'Syria (SYP)', value: 'Syria' },
  { label: 'Tajikistan (TJS)', value: 'Tajikistan' },
  { label: 'Tanzania (TZS)', value: 'Tanzania' },
  { label: 'Thailand (THB)', value: 'Thailand' },
  { label: 'Timor-Leste (USD)', value: 'Timor-Leste' },
  { label: 'Togo (XOF)', value: 'Togo' },
  { label: 'Tonga (TOP)', value: 'Tonga' },
  { label: 'Trinidad and Tobago (TTD)', value: 'Trinidad and Tobago' },
  { label: 'Tunisia (TND)', value: 'Tunisia' },
  { label: 'Turkey (TRY)', value: 'Turkey' },
  { label: 'Turkmenistan (TMT)', value: 'Turkmenistan' },
  { label: 'Tuvalu (AUD)', value: 'Tuvalu' },
  { label: 'Uganda (UGX)', value: 'Uganda' },
  { label: 'Ukraine (UAH)', value: 'Ukraine' },
  { label: 'United Arab Emirates (AED)', value: 'United Arab Emirates' },
  { label: 'United Kingdom (GBP)', value: 'United Kingdom' },
  { label: 'United States (USD)', value: 'United States' },
  { label: 'Uruguay (UYU)', value: 'Uruguay' },
  { label: 'Uzbekistan (UZS)', value: 'Uzbekistan' },
  { label: 'Vanuatu (VUV)', value: 'Vanuatu' },
  { label: 'Vatican City (EUR)', value: 'Vatican City' },
  { label: 'Venezuela (VES)', value: 'Venezuela' },
  { label: 'Vietnam (VND)', value: 'Vietnam' },
  { label: 'Yemen (YER)', value: 'Yemen' },
  { label: 'Zambia (ZMW)', value: 'Zambia' },
  { label: 'Zimbabwe (ZWL)', value: 'Zimbabwe' }
];

const assetTypes = [
  'Stock',
  'Mutual Fund',
  'ETF',
  'Fixed Assets',
  'Real Estate',
  'Gold',
  'Silver',
  'Crypto',
  'Others'
];

const currencySymbolMap = {
  India: '₹',
  'United States': '$',
  'United Kingdom': '£',
  Japan: '¥',
  Canada: 'C$'
};

function getCurrencyPrefix(country) {
  if (currencySymbolMap[country]) {
    return `${currencySymbolMap[country]} `;
  }

  const option = currencyOptions.find((item) => item.value === country);
  if (!option) {
    return '';
  }

  const match = option.label.match(/\(([^)]+)\)$/);
  return match ? `${match[1]} ` : '';
}

function formatCurrency(value, symbol) {
  const number = Number(value) || 0;
  return `${symbol || ''}${number.toLocaleString()}`;
}

function calculateXIPR(invested, current, startDateValue) {
  const investedAmount = Number(invested);
  const currentAmount = Number(current);
  const startDate = new Date(startDateValue);
  if (!startDateValue || isNaN(startDate.getTime()) || investedAmount <= 0) {
    return null;
  }

  const now = new Date();
  const elapsedDays = (now - startDate) / (1000 * 60 * 60 * 24);
  if (elapsedDays <= 0) {
    return null;
  }

  const years = elapsedDays / 365.25;
  return Math.pow(currentAmount / investedAmount, 1 / years) - 1;
}

export default function App() {
  const [currency, setCurrency] = useState('United States');
  const [assetName, setAssetName] = useState('');
  const [assetType, setAssetType] = useState(assetTypes[0]);
  const [investedAmount, setInvestedAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [investments, setInvestments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
  const [typeMenuOpen, setTypeMenuOpen] = useState(false);

  const symbol = getCurrencyPrefix(currency);

  const totalInvested = useMemo(
    () => investments.reduce((sum, item) => sum + Number(item.invested), 0),
    [investments]
  );

  const totalCurrent = useMemo(
    () => investments.reduce((sum, item) => sum + Number(item.current), 0),
    [investments]
  );

  const gainLoss = totalCurrent - totalInvested;

  const portfolioXIPR = useMemo(() => {
    if (investments.length === 0) return null;
    const weighted = investments.reduce((sum, item) => {
      const xipr = Number(item.xipr);
      return Number.isFinite(xipr) ? sum + xipr * Number(item.invested) : sum;
    }, 0);
    const investedSum = investments.reduce((sum, item) => sum + Number(item.invested), 0);
    const net = investedSum > 0 ? weighted / investedSum : null;
    return Number.isFinite(net) ? net : null;
  }, [investments]);

  const submitInvestment = () => {
    const invested = Number(investedAmount);
    const current = Number(currentAmount);

    if (!assetName.trim() || !assetType || isNaN(invested) || isNaN(current) || !startDate.trim()) {
      return;
    }

    if (editingId) {
      setInvestments((items) => {
        return items.map((item) => {
          if (item.id !== editingId) return item;
          const xipr = calculateXIPR(invested, current, startDate);
          return {
            ...item,
            assetName,
            assetType,
            invested,
            current,
            startDate,
            xipr
          };
        });
      });
      setEditingId(null);
    } else {
      const xipr = calculateXIPR(invested, current, startDate);
      setInvestments((items) => [
        ...items,
        {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
          assetName,
          assetType,
          invested,
          current,
          startDate,
          xipr
        }
      ]);
    }

    clearForm();
  };

  const clearForm = () => {
    setAssetName('');
    setAssetType(assetTypes[0]);
    setInvestedAmount('');
    setCurrentAmount('');
    setStartDate('');
    setEditingId(null);
  };

  const selectInvestment = (item) => {
    setEditingId(item.id);
    setAssetName(item.assetName);
    setAssetType(item.assetType);
    setInvestedAmount(String(item.invested));
    setCurrentAmount(String(item.current));
    setStartDate(item.startDate);
  };

  const deleteInvestment = (id) => {
    setInvestments((items) => items.filter((item) => item.id !== id));
    if (editingId === id) {
      clearForm();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f9" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerCard}>
          <Text style={styles.title}>Portfolio Tracker</Text>
          <Text style={styles.subtitle}>Elevate your investment story with clarity, control, and insight.</Text>
        </View>

        <View style={styles.currencyCard}>
          <Text style={styles.label}>Currency</Text>
          <Pressable
            style={styles.dropdownButton}
            onPress={() => setCurrencyMenuOpen((prev) => !prev)}
          >
            <Text style={styles.dropdownText}>{currencyOptions.find((item) => item.value === currency)?.label}</Text>
          </Pressable>
          {currencyMenuOpen && (
            <View style={styles.dropdownList}>
              {currencyOptions.map((option) => (
                <Pressable
                  key={option.value}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCurrency(option.value);
                    setCurrencyMenuOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{option.label}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, styles.cardSpacingRight]}>
            <Text style={styles.summaryLabel}>Total Invested</Text>
            <Text style={styles.summaryValue}>{formatCurrency(totalInvested, symbol)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Current Value</Text>
            <Text style={styles.summaryValue}>{formatCurrency(totalCurrent, symbol)}</Text>
          </View>
        </View>

        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, styles.cardSpacingRight]}>
            <Text style={styles.summaryLabel}>Total Gain/Loss</Text>
            <Text style={styles.summaryValue}>{formatCurrency(gainLoss, symbol)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Portfolio XIPR</Text>
            <Text style={styles.summaryValue}>{portfolioXIPR === null ? '—' : `${(portfolioXIPR * 100).toFixed(2)}%`}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Add or Edit Investment</Text>
          <View style={styles.formRow}>
            <TextInput
              style={[styles.input, styles.inputSpacing]}
              value={assetName}
              placeholder="Asset Name"
              onChangeText={setAssetName}
            />
            <View style={[styles.dropdownWrapper, styles.inputSpacing]}>
              <Pressable
                style={styles.dropdownButton}
                onPress={() => setTypeMenuOpen((prev) => !prev)}
              >
                <Text style={styles.dropdownText}>{assetType}</Text>
              </Pressable>
              {typeMenuOpen && (
                <View style={styles.dropdownList}>
                  {assetTypes.map((type) => (
                    <Pressable
                      key={type}
                      style={styles.dropdownItem}
                      onPress={() => {
                        setAssetType(type);
                        setTypeMenuOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{type}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={[styles.input, styles.inputSpacing]}
              value={investedAmount}
              placeholder="Invested Amount"
              keyboardType="numeric"
              onChangeText={setInvestedAmount}
            />
            <TextInput
              style={styles.input}
              value={currentAmount}
              placeholder="Current Value"
              keyboardType="numeric"
              onChangeText={setCurrentAmount}
            />
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={[styles.input, styles.inputSpacing]}
              value={startDate}
              placeholder="Start Date (YYYY-MM-DD)"
              onChangeText={setStartDate}
            />
            <Pressable style={[styles.primaryButton, styles.inputSpacing]} onPress={submitInvestment}>
              <Text style={styles.primaryButtonText}>{editingId ? 'Update Investment' : 'Add Investment'}</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Portfolio Holdings</Text>
          {investments.length === 0 ? (
            <Text style={styles.emptyText}>No holdings added yet.</Text>
          ) : (
            <FlatList
              data={investments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const isSelected = item.id === editingId;
                return (
                  <View style={[styles.row, isSelected && styles.selectedRow]}>
                    <View style={styles.rowHeader}>
                      <Text style={styles.rowAsset}>{item.assetName}</Text>
                      <Text style={styles.rowType}>{item.assetType}</Text>
                    </View>
                    <Text style={styles.rowDetail}>Invested: {formatCurrency(item.invested, symbol)}</Text>
                    <Text style={styles.rowDetail}>Current: {formatCurrency(item.current, symbol)}</Text>
                    <Text style={styles.rowDetail}>Start: {item.startDate}</Text>
                    <Text style={styles.rowDetail}>XIPR: {item.xipr === null ? '—' : `${(item.xipr * 100).toFixed(2)}%`}</Text>
                    <View style={styles.rowActions}>
                      <Pressable style={styles.linkButton} onPress={() => selectInvestment(item)}>
                        <Text style={styles.linkButtonText}>Edit</Text>
                      </Pressable>
                      <Pressable style={styles.linkButton} onPress={() => deleteInvestment(item.id)}>
                        <Text style={styles.linkButtonText}>Delete</Text>
                      </Pressable>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f6f9'
  },
  container: {
    padding: 16,
    paddingBottom: 32
  },
  headerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 }
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8
  },
  subtitle: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 22
  },
  currencyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 }
  },
  label: {
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8
  },
  dropdownButton: {
    backgroundColor: '#eef2ff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12
  },
  dropdownText: {
    color: '#1d4ed8',
    fontWeight: '700'
  },
  dropdownList: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#d1d5db',
    borderWidth: 1,
    overflow: 'hidden'
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderBottomColor: '#e2e8f0',
    borderBottomWidth: 1
  },
  dropdownItemText: {
    color: '#0f172a'
  },
  summaryRow: {
    flexDirection: 'row',
    marginBottom: 12
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 }
  },
  summaryLabel: {
    color: '#64748b',
    marginBottom: 10
  },
  summaryValue: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '800'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 }
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14
  },
  formRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: 12
  },
  input: {
    flex: 1,
    minWidth: 140,
    backgroundColor: '#f8fafc',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db'
  },
  dropdownWrapper: {
    flex: 1,
    minWidth: 140
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    minWidth: 140
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center'
  },
  emptyText: {
    color: '#64748b',
    textAlign: 'center',
    paddingVertical: 20
  },
  row: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12
  },
  selectedRow: {
    backgroundColor: '#eef6ff'
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  rowAsset: {
    fontWeight: '700',
    color: '#111827'
  },
  rowType: {
    color: '#475569'
  },
  rowDetail: {
    color: '#334155',
    marginBottom: 4
  },
  rowActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#e2e8f0',
    marginRight: 12
  },
  inputSpacing: {
    marginRight: 12
  },
  cardSpacingRight: {
    marginRight: 12
  },
  linkButtonText: {
    color: '#0f172a',
    fontWeight: '700'
  }
});
