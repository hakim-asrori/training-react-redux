import React, { useState, useEffect } from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, storeUser } from '../../redux/actions/user/Action'

function UserCreate({ navigation }: { navigation: any }): JSX.Element {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(storeUser(name, email))

    navigation.navigate("User")
  }

  return (
    <View style={{ padding: 30 }}>
      <SafeAreaView>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={{ marginBottom: 20 }}>
              <TextInput style={styles.input} placeholder='Fullname' placeholderTextColor={'gray'} value={name} onChangeText={e => setName(e)} />
            </View>
            <View>
              <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'gray'} value={email} onChangeText={e => setEmail(e)} />
            </View>
          </View>
          <View style={styles.cardFooter}>
            <Button title='Save' onPress={handleSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonAdd: {
    marginBottom: 20
  },
  card: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  cardBody: {
    padding: 10,
  },
  cardFooter: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#0000002d"
  },
  input: {
    paddingLeft: 20,
    color: 'black',
    borderColor: '#dee2e6',
    borderWidth: 1,
    borderRadius: 15
  }
})

export default UserCreate