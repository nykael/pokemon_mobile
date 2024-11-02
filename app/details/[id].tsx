import { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  Title,
  ImgContainer,
  ImagePokemon,
  TextList,
  Description,
  ControllerImage,
  ControllerImagePrev,
  Header,
} from '@/styles/home';
import { useLocalSearchParams, useRouter } from 'expo-router';
import theme from '@/styles/theme';

// Definindo tipos para o Pokémon
interface Stat {
  name: string;
  base_stat: number;
}

interface Pokemon {
  name: string;
  photo: string[];
  types: string[];
  stats: Stat[];
}

export default function Details() {
  const navigate = useRouter()
  const params = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [pokemonPhoto, setPokemonPhoto] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const selectPhotoByIndex = useCallback((index: number) => {
    setPokemonPhoto(index);
  }, []);

  const goToBack = () => {
    navigate.back()
  }

  const getPokemon = async () => {
    setLoad(true);
    setError(null);
    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
      const data = resp.data;

      const fetchedPokemon: Pokemon = {
        name: data.name,
        photo: [
          data.sprites.front_default,
          data.sprites.back_default,
          data.sprites.front_shiny,
          data.sprites.back_shiny,
        ],
        types: data.types.map(typeInfo => typeInfo.type.name),
        stats: data.stats.map(stat => ({
          name: stat.stat.name,
          base_stat: stat.base_stat,
          effort: stat.effort,
        })),
      };

      setPokemon(fetchedPokemon);
    } catch (error) {
      setError('Error fetching Pokémon data');
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  if (load) {
    return (
      <Container>
        <ActivityIndicator size="large" color={theme.colors.main} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text>{error}</Text>
      </Container>
    );
  }

  if (!pokemon) {
    return null;
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goToBack} accessibilityLabel="Voltar">
          <Feather name='arrow-left' size={28} color={theme.colors.text} />
        </TouchableOpacity>

        <Title>{pokemon.name}</Title>
      </Header>

      <ImgContainer>
        <ImagePokemon 
          source={{ uri: pokemon.photo[pokemonPhoto] }}
          alt='photo'
        />
      </ImgContainer>

      <ControllerImage>
        <FlatList
          data={pokemon.photo}
          horizontal
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => selectPhotoByIndex(index)} accessibilityLabel={`Foto ${index + 1}`}>
              <ControllerImagePrev selected={pokemonPhoto === index}>
                <ImagePokemon 
                  source={{ uri: item }}
                  alt='photo'
                />
              </ControllerImagePrev>
            </TouchableOpacity>
          )}
        />
      </ControllerImage>

      <Description>
        <TextList>Tipo</TextList>
        <Text>
          Este Pokémon é do tipo: {pokemon.types.join(" e ")}. {`\n`}
        </Text>

        <TextList>Status</TextList>
        {pokemon.stats.map((stat, index) => (
          <View key={index} style={{ marginBottom: 5 }}>
            <Text>{stat.name.toUpperCase()}: {stat.base_stat}.</Text>
          </View>
        ))}
      </Description>
    </Container>
  );
}
