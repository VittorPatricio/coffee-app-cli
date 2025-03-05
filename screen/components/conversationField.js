import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from "../../config/colors";
import SPACING from "../../config/SPACING";

const ConversationField = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <View style={{ borderRadius: SPACING, overflow: "hidden" }}>
      <View
        style={{
          backgroundColor: colors["dark-light"],
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextInput
          selectionColor={colors.primary}
          style={{
            width: "100%",
            color: colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 4.35,
            paddingRight: SPACING * 3.75,
          }}
          value={message}
          placeholder="Ask About a Coffee ..."
          placeholderTextColor={colors["white-smoke"]}
          onChangeText={setMessage}
          onSubmitEditing={handleSend}
        />
        <Feather
          name="coffee"
          size={SPACING * 2}
          color={colors["white-smoke"]}
          style={{ position: "absolute", left: SPACING }}
        />
        <TouchableOpacity
          onPress={handleSend}
          style={{ position: "absolute", right: SPACING }}
        >
          <Ionicons
            name="send"
            size={SPACING * 2.25}
            color={message.trim() ? colors.primary : colors.light}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConversationField;

const styles = StyleSheet.create({});
