import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.component.styles';
import { Image, TouchableOpacity, Text, View, Dimensions } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function MenuCard({ title, icon, email, phone }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleCont}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.email}>{phone}</Text>
               
            </View>
            <View style={styles.iconCont}>
                <FontAwesome5 name={icon} style={{color:"white"}} size={25} />
            </View>
        </View>
    )
}

MenuCard.propTypes = {

}

export default MenuCard

