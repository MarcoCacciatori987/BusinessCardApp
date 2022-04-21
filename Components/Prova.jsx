import React from "react";
import { View, Text } from "react-native";
import Metodi from "./Metodi";

export default class Prova extends React.Component {
  state = {
    id: "tibe",
    num: [],
  };

  constructor() {
    super();
    this.state.id = "ciambella";

    this.setState(this.state);
  }

  render() {
    return (
      <View>
        <Text>ciao gay {Metodi.metodo1()}</Text>
      </View>
    );
  }
}
