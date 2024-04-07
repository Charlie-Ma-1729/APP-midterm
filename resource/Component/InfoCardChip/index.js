import * as React from 'react';
//引入物件
import { Text, View, Image } from 'react-native';
import { Switch, useTheme, IconButton } from 'react-native-paper';
//引入風格
import styles from './styles';

const InfoCardChip = ({ label, num }) => {
    const theme = useTheme();
    return (
        <View style={{ ...styles.box }}>
            <View style={{ ...styles.labelBox, backgroundColor: theme.colors.secondaryContainer }}>
                <Text style={{ ...styles.labelText, color: theme.colors.onSecondaryContainer }}>{label}</Text>
            </View>
            <Text style={{ ...styles.numText, color: theme.colors.onSurface }}>{num}</Text>
        </View>
    );
}

export default InfoCardChip;