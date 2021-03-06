import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#8257E5'
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Archivo_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    buttonPrimary: {
        backgroundColor: '#9871F5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#FFF'
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 20,
        color: '#d4c2ff',
        textAlign: 'center',
        marginTop: 40
    }
})

export default styles