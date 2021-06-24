import React, {ButtonHTMLAttributes} from "react";
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    onPress: () => void;
    title: string;
}

const ButtonComponent: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.appButtonContainer} 
            onPress={props.onPress} > 
             <Text style={styles.appButtonText} >{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent;