import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Cards from './components/Cards';
import ProductCard from './components/ProductCard';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const products = [
  {
    title: 'Iphone 1',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg',
    price: 19.99,
  },
  {
    title: 'Product 2',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg',
    price: 24.99,
  },
  // Add more products here
];

export default function App() {
  return (
    <View style={styles.container}>
      <Cards
        title="Beautiful Sunset"
        content="Enjoying a serene sunset at the beach."
      />
      <Cards
        title="Mountain Adventure"
        content="Hiking through breathtaking mountain trails."
      />
       {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
