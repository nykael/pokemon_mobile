import styled from "styled-components/native";
import Constants from 'expo-constants';
import { Feather } from "@expo/vector-icons";

type ImageProps = {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    margin: ${Constants.statusBarHeight}px 20px 20px ;
    
`
export const Header = styled.View``

export const Title = styled.Text`
    text-align: center; 
    font-size: 18px;
    font-weight: bold;
`

export const ImgContainer = styled.View`
    border-radius: 18px;
    border: 1px solid rebeccapurple;
    width: 100%;
    height: 400px;
    background-color: rebeccapurple;
    margin: 20px 0;
`;

export const ControllerImage = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const ControllerImagePrev = styled.View<ImageProps>`
    border-radius: 8px;
    width: 80px;
    height: 80px;
    background-color: rebeccapurple;
    margin: 20px 0;
    margin: 0 10px 0 0;
    opacity: ${({selected}) => selected ? '1': '0.7'};
    
`;



export const ImagePokemon = styled.Image`
    flex: 1;
`;

export const BoxList = styled.View`
    margin-right: 10px;
`;

export const TextList = styled.Text`
   font-size: 18px;
   margin-bottom: 10px;
   font-weight: bold;
`;

export const Description = styled.View`
    flex: 1;
`;



