import React, { useCallback } from "react";
import { View, ActivityIndicator, Text } from "react-native";

import styles from "./styles";

interface Props {
  loading: boolean | undefined;
}

const Loading: React.FC<Props> = ({ loading }: Props) => {
  const component = useCallback(
    (loading) => {
      if (loading) {
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        );
      }
      return null;
    },
    [loading]
  );

  return component(loading);
};

export default Loading;
