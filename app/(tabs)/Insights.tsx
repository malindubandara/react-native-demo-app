import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const insights = () => (
  <SafeAreaView className="flex-1 items-center justify-center bg-background">
    <Text>Insights</Text>
  </SafeAreaView>
);

export default insights;
