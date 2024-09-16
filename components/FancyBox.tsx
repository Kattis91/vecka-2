import { Text, View } from "react-native";

export default function FancyBox() {
    return (
        <View style={{ backgroundColor: "grey", width: 50, height: 50, borderRadius: 25 }}>
            <Text>Fancy</Text>
        </View>
    );
}