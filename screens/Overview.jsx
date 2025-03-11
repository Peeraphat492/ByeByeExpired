import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// ตัวอย่างข้อมูลที่เก็บรายการอาหารในแต่ละประเภท
const fridgeItems = ["Cheese", "Butter", "Yogurt"];
const freezerItems = ["Ice cream", "Frozen peas", "Frozen pizza"];
const dryFoodItems = ["Pasta", "Rice", "Cereal"];

const storage = [
  { name: "Fridge", count: fridgeItems.length, image: require("../assets/images/fridge.png"), screen: "StorageFridge" },
  { name: "Freezer", count: freezerItems.length, image: require("../assets/images/freezer.png"), screen: "StorageFreezer" },
  { name: "Dry food", count: dryFoodItems.length, image: require("../assets/images/dryFood.png"), screen: "StorageDryFood" },
];

export default function App() {
  const [currentDate, setCurrentDate] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    setCurrentDate(formattedDate);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F6FB", padding: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20,marginTop: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#4D5A9C",
              borderRadius: 50,
              padding: 8,
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000", // สีเงา
              shadowOffset: { width: 0, height: 2 }, // การกระจายเงา
              shadowOpacity: 0.1, // ความเข้มของเงา
              shadowRadius: 3, // ความฟุ้งของเงา
              elevation: 4,
            }}
          >
            <Image
              source={require("../assets/images/calendar icon.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              paddingHorizontal: 12,
              paddingVertical: 6,
              marginLeft: 10,
              shadowColor: "#000", // สีเงา
              shadowOffset: { width: 0, height: 1 }, // การกระจายเงา
              shadowOpacity: 0.1, // ความเข้มของเงา
              shadowRadius: 3, // ความฟุ้งของเงา
              elevation: 4, // ใช้สำหรับ Android
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#4D5A9C" }}>
              {currentDate}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFF",
            borderRadius: 50,
            padding: 8,
            width: 35,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000", // สีเงา
            shadowOffset: { width: 0, height: 2 }, // การกระจายเงา
            shadowOpacity: 0.2, // ความเข้มของเงา
            shadowRadius: 3, // ความฟุ้งของเงา
            elevation: 4,
          }}
        >
          <Image
            source={require("../assets/images/exit.png")}
            style={{ width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </View>



      <ScrollView>
        <View style={{ marginVertical: 10,marginTop: 30 }}>
          <LinearGradient
            colors={["#FEC2D6", "#FEE5E1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ padding: 8, borderRadius: 30 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/N.png")}
                style={{ width: 25, height: 25, marginRight: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#E72828" }}>
                Nearly expired
              </Text>
            </View>
          </LinearGradient>

          <ScrollView horizontal>
            <NearlyExpired />
          </ScrollView>
        </View>

        <View style={{ marginVertical: 10,marginTop: 20 }}>
          <LinearGradient
            colors={["#EBDC9E", "#FFF2D6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ padding: 8, borderRadius: 30 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/E.png")}
                style={{ width: 25, height: 25, marginRight: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#7C0A0A" }}>
                Expired
              </Text>
            </View>
          </LinearGradient>

          <ScrollView horizontal>
            <Expired />
          </ScrollView>
        </View>

        <View style={{ marginVertical: 10,marginTop: 20 }}>
          <LinearGradient
            colors={["#BBE9FF", "#E1FCFE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ padding: 8, borderRadius: 30 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/S.png")}
                style={{ width: 25, height: 25, marginRight: 8 }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#263DD3" }}>
                Storage
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={{ margin: 10 }}>
          <Card style={{ padding: 1, borderRadius: 30, overflow: "hidden" }}>
            {storage.map((item, idx) => (
              <TouchableOpacity key={idx} onPress={() => navigation.navigate(item.screen)}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 1, borderBottomWidth: idx !== storage.length - 1 ? 1 : 0, borderBottomColor: "#E0E0E0" }}>
                  <Image source={item.image} style={{ width: 55, height: 55, marginRight: 1 }} />
                  <Text style={{ fontSize: 16, fontWeight: "normal", flex: 1 }}>
                    {item.name}
                  </Text>
                  <View style={{
                    backgroundColor: "#6C74FF",
                    borderRadius: 50,
                    width: 20,
                    height: 20,
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <Text style={{ color: "white", fontWeight: "normal", fontSize: 12 }}>
                      {item.count}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </Card>
        </View>

      </ScrollView>

      <TouchableOpacity
        style={{ position: "absolute", bottom: 50, alignSelf: "center", backgroundColor: "#6C74FF", borderRadius: 50, padding: 8 }}
        onPress={() => navigation.navigate("AddProduct")}
      >
        <MaterialIcons name="add" size={35} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

import NearlyExpired from "./NearlyExpired";
import Expired from "./Expired";