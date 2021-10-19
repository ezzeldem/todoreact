import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderColor: "#ddd",
    borderWidth:1


  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(85, 188, 246, 0.4)",
    borderRadius: 5,
    marginRight: 15,
  },
  title: {
    maxWidth: "80%",

  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2
  },
})

export default Task