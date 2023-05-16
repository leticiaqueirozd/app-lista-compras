import React from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useStore } from './store';

const ListaCompras = () => {
  const { alimentos, adicionarAlimento, removerAlimento } = useStore();

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>{item.nome}</Text>
      <Button title="-" onPress={() => removerAlimento(item.id)} />
      <Text>{item.quantidade}</Text>
      <Button title="+" onPress={() => adicionarAlimento(item.id)} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Nome do alimento"
        onChangeText={(text) => adicionarAlimento(null, text)}
      />
      <Button title="Adicionar" onPress={() => adicionarAlimento()} />
      <FlatList
        data={alimentos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ListaCompras;
