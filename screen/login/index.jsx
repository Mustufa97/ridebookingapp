import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/Images/login/logo.png'
import { SubmitButton } from '../../assets/buttons/button'
import { OutlineButton } from '../../assets/buttons/button'

const index = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textHead}>Welcome</Text>
            <Text>Have a better sharing experience</Text>
        </View>
        <View style={styles.buttonContainer}>
            <SubmitButton  text={'create an account'} buttonsty={styles.button} />
            <OutlineButton  text={'Login'} outbuttonsty={styles.outLineButton}/>
        </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
        alignItems: 'center',
    },
    
    logo:{
        objectFit: 'contain',
        marginTop:25,
        width:250,
         
    },
    logoContainer:{
        flex: 0.6
    },
    textContainer:{
        flex: 0.5,
    },
    textHead:{
        textAlign: 'center',
        fontSize:24,
        fontWeight:'500',
       
    },
    buttonContainer:{
        flex: 0.2,
        justifyContent: 'flex-end',
        
    },
    button:{
        width: 325,
    },
    outLineButton:{
        marginTop:5
    }
})
