import { StyleSheet } from 'react-native';  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flexDirection: 'row',
      height: 150,
      alignItems: 'center',
      marginBottom: 30,
    },
    imageContainer: {
      marginLeft: 30,
      marginRight: 20,
    },
    image: {
      width: 125,
      height: 125,
    },
    idContainer: {},
    id: {
      fontFamily: 'SFProDisplay',
      fontSize: 16,
      fontWeight: 'bold',
      color: 'rgba(23, 23, 27, 0.6)',
    },
    nameContainer: {},
    name: {
      fontFamily: 'SFProDisplay',
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
    },
    badgeContainer: {
      flexDirection: 'row',
    },
    badge: {
      marginRight: 5,
    },
    bottomHeaderContainer: {
      marginLeft: 36,
      marginBottom: 15,
    },
    bottomHeader: {
      fontFamily: 'SFProDisplay',
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    bottomContainer: {
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 30,
      paddingTop: 25,
    },
    statsHeader: {
      fontFamily: 'SFProDisplay',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 22,
    },
    statsContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      alignItems: 'center',
    },
    statsNameContainer: {
      width: 50,
      marginRight: 10,
    },
    statsName: {
      fontFamily: 'SFProDisplay',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#5c5c5c',
    },
    statsValueContainer: {
      width: 31,
      alignItems: 'flex-end',
      marginRight: 20,
    },
    statsValue: {
      fontFamily: 'SFProDisplay',
      fontSize: 16,
      color: '#747476',
    },
    statsRange: {
      height: 4,
      borderRadius: 2,
    },
    abilitieValueContainer: {
      marginRight: 20,
      marginLeft: 5,
    },
    hiddenAbility: {
      fontFamily: 'SFProDisplay',
      fontSize: 12,
      color: '#747476',
    },
    bottomSpacing: {
      marginBottom: 20,
    },
  });


  export default styles;