import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Cards from './components/Cards';
import ProductCard from './components/ProductCard';
import axios from 'axios';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  const [products, setProducts] = useState([]);

  
useEffect(() => {
  // Fetch products from the API
  // axios.get('https://lab-software-9k7mx.ondigitalocean.app/dev/products/')
  axios.get('https://dummyjson.com/products')
    .then(response => {
      console.log(response.data);
      setProducts(response.data.products)
    })
    .catch(error => console.error(error));
}, []);

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
