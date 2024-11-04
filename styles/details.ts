import styled from "styled-components/native";
import Constants from 'expo-constants';

type ImageProps = {
    selected: boolean;
}

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    background-color: ${({theme}) => theme.colors.backgorund};
    padding: ${Constants.statusBarHeight}px 20px 20px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
    text-align: center; 
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
`;

export const ImgContainer = styled.View`
    border-radius: 18px;
    border: 1px solid ${({theme}) => theme.colors.main};
    width: 100%;
    height: 400px;
    background-color: ${({theme}) => theme.colors.main};
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
    background-color: ${({theme}) => theme.colors.main};
    margin: 0 10px 0 0;
    opacity: ${({ selected }) => (selected ? '1' : '0.4')};
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

export const TextDescription = styled.Text`
   font-size: 18px;
   margin-bottom: 10px;
`;

export const Description = styled.View`
   height: 100%;
   margin-bottom: 60px;
`;

