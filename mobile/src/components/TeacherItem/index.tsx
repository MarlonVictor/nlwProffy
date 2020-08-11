import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import heartIcon from '../../assets/images/icons/heart-outline.png';
import favoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import api from '../../services/api';

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {
    const [isFavorited, setIsFavorited] = useState(favorited)
    
    function linkWhatsapp() {
        api.post('connections', {
            user_ide: teacher.id
        })

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function toggleFavorites() {
        const favorites = await AsyncStorage.getItem('favorites')
        let favoritesArray = []

        if(favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if(isFavorited) {
            const favoritesIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id
            })

            favoritesArray.splice(favoritesIndex, 1)
            setIsFavorited(false)

        } else{
            favoritesArray.push(teacher)
            setIsFavorited(true)
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }}/>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton onPress={toggleFavorites} style={[
                        styles.favoriteButton, 
                        isFavorited ? styles.favorited : {}
                    ]}>
                        { isFavorited 
                            ? <Image source={favoriteIcon}/>
                            : <Image source={heartIcon}/>
                        }
                    </RectButton>
                    <RectButton onPress={linkWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem