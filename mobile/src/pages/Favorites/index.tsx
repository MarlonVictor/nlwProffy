import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
    return (
        <View>
            <PageHeader title="Meus proffys favoritos" />

            <ScrollView 
                style={styles.teacherScroll}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 250
                }}
            >
                <TeacherItem/>
                
            </ScrollView>
        </View>
    )
}

export default Favorites