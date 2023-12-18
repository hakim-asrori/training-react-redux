import React, { useState, useEffect } from 'react'
import { ActivityIndicator, TouchableOpacity, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/user/Action'

function User({ navigation }: { navigation: any }): JSX.Element {

  const users = useSelector((state) => {
    return state.userSlice
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <View style={{ padding: 30, backgroundColor: '#E1E4F0', height: '100%' }}>
      <View style={styles.buttonAdd}>
        <Button title='Add new User' onPress={() => navigation.navigate('UserCreate')} />
      </View>
      {!users ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View>
          <ScrollView>
            {users.map((user, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => {
                  navigation.navigate('UserDetail', { id: user.id })
                }}>
                  <View style={styles.card}>
                    <View style={styles.cardBody}>
                      <Text style={{ color: 'black' }}>{user.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  buttonAdd: {
    marginBottom: 20
  },
  card: {
    borderWidth: 1,
    borderColor: '#0000002d',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    backgroundColor: 'white'
  },
  cardBody: {

  }
})

const mapStateToProps = (state: any) => {
  return {
    users: state.userSlice,
  };
}

export default connect(mapStateToProps, { getUser })(User)