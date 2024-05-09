import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SubmitButton } from '../../assets/buttons/button'
import { SimpleInput } from '../../assets/inputs'
import Icons from '../../assets/Icons'

const splashScreen = () => {
  return (
    <View style={styles.container}>
        <SubmitButton  text={'login'}  />
        <View style={{marginTop:10 , padding:20}}>
          <SimpleInput  label={'check'}  placeholder={"check"} type={'text'} inputstyle={styles.input}  />
        </View>
        <View style={{marginTop:10 , padding:20}}>
          <Icons.MaterialCommunityIcons name={'stepforward'}  />
        </View>
    </View>
  )
}

export default splashScreen

const styles = StyleSheet.create({
  input:{
    borderWidth:2,

  }
})