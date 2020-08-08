import React from 'react';

// import { BorderlessButton } from 'react-native-gesture-handler';
// import { useNavigation } from '@react-navigation/native';

// import backIten from '../../assets/images/icons/back.png';
// import logoImg from '../../assets/images/logo.png';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import favoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/MarlonVictor.png' }}/>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marlon Victor</Text>
                    <Text style={styles.subject}>Geografia</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                18 years, studying Analysis and Systems Development
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 50,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton , styles.favorited]}>
                        {/* <Image source={heartIcon}/> */}
                        <Image source={favoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem