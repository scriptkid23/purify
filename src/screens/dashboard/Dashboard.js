import React from 'react'
import { Text,TouchableOpacity } from 'react-native';
import {Block} from '../../components';

export default function Dashboard({navigation}) {
    return (
        <Block>
            <Text>Dashboard</Text>
            <TouchableOpacity
             onPress={() => navigation.goBack()}
            >
                <Text>Back</Text>
            </TouchableOpacity>
        </Block>
    )
}
