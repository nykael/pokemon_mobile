import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

export function Load(){
    const {colors} = useTheme()

    return(
        <ActivityIndicator
            color={colors.main}
            style={{flex: 1}}
        />
    )
}