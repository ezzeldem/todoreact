import React, {useState} from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handdleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      {/* todo taskes */}

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today`s Task</Text>

        <View styles={styles.items}>
          {!taskItems.length && (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.emptyBoxShow}
            >
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: "https://ez.dvtst.com/img/empty.png",
                }}
              />
              <Text style={styles.emptyTitle}>Empty Box</Text>
            </KeyboardAvoidingView>
          )}

          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* write task Section */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handdleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  writeTaskWrapper: {
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  addWrapper: {
    width: 55,
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  addText: {
    fontSize: 60,
    color: "#C0C0C0",
  },
  emptyBoxShow: {
    position: "absolute",
    top: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 30,
    opacity: 0.4,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    opacity: 0.7,
  },
});
