import React, { useState, useEffect } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/user/Action'

function UserDetail({ navigation, route }: { navigation: any, route: any }): JSX.Element {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.userSlice.find(user => user.id == route.params.id)
  })

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch, route.params.id])

  return (
    <View style={{ padding: 30 }}>
      <SafeAreaView>
        <View style={styles.card}>
          <View style={styles.cardBody}>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: 'black' }}>{user.name}</Text>
            </View>
            <View>
            </View>
          </View>
          <View style={styles.cardFooter}>
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

const mapStateToProps = (state: any) => {
  return {
    user: state.userSlice,
  };
}

export default UserDetail