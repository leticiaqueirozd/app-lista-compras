import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useStore } from './store';

export default function App() {
  const [novoAlimento, setNovoAlimento] = useState('');
  const alimentos = useStore((state) => state.alimentos);
  const adicionarAlimento = useStore((state) => state.adicionarAlimento);
  const removerAlimento = useStore((state) => state.removerAlimento);
  const incrementarContador = useStore((state) => state.incrementarContador);
  const decrementarContador = useStore((state) => state.decrementarContador);

  const handleAdicionar = () => {
    if (novoAlimento) {
      adicionarAlimento({ nome: novoAlimento, contador: 0 });
      setNovoAlimento('');
    }
  };

  const handleRemover = (index) => {
    removerAlimento(index);
  };

  const handleIncrementar = (index) => {
    incrementarContador(index);
  };

  const handleDecrementar = (index) => {
    decrementarContador(index);
  };

  const renderAlimento = ({ item, index }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.nome}</ListItem.Title>
        <ListItem.Subtitle>Contador: {item.contador}</ListItem.Subtitle>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => handleIncrementar(index)} />
          <Button title="-" onPress={() => handleDecrementar(index)} />
          <Button title="Remover" onPress={() => handleRemover(index)} />
        </View>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={novoAlimento}
          onChangeText={setNovoAlimento}
          placeholder="Digite o nome do alimento"
          />
          <Button title="Adicionar" onPress={handleAdicionar} />
          </View>
          <FlatList
          data={alimentos}
          renderItem={renderAlimento}
          keyExtractor={(item, index) => index.toString()}
          />
          </View>
          );
          }
          
          const styles = StyleSheet.create({
          container: {
          flex: 1,
          padding: 16,
          backgroundColor: '#fff',
          },
          inputContainer: {
          flexDirection: 'row',
          marginBottom: 16,
          },
          input: {
          flex: 1,
          marginRight: 8,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 4,
          paddingHorizontal: 8,
          },
          buttonContainer: {
          flexDirection: 'row',
          marginTop: 8,
          },
          });
