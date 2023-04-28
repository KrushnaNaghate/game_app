import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
const { width, height } = Dimensions.get("window");
import axios from "axios";
import { addGames } from '../../Redux/Action/Action';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers/Reducer";


const GameList: React.FC = () => {
  const dispatch = useDispatch();
  const games = useSelector((state:RootState) => state.games);
  
  useEffect(() => {
    addData();
  }, [])


  const addData = () => {
    axios.get('https://gist.githubusercontent.com/aclement-ikarusdev/5dd618bf13ac76cebfa08c0e3c99b677/raw/e6b13ac3f7f9ad174209cbb30f331427ab6f7fb5/games.json').then(res => {
      dispatch(addGames(res.data));
    }).catch(err => {
      console.log(err);
      
    })
  }
  
  

  const handlePress = (gameName: string) => {
    ToastAndroid.show(gameName, ToastAndroid.SHORT);
    
  };

  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ffff",
        marginTop: StatusBar.currentHeight,
      }}
    >{games ? 
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          paddingVertical: 10,
        }}
      >
        
        {games.map((game) => {
          const appId = game.steamUrl.split("/app/")[1];
          const imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`;
          return (
            <TouchableOpacity style={styles.container} key={game.id} onPress={()=>{handlePress(game.title)}}>
              <Image
                source={{ uri: game.steamUrl ? imageUrl : 'https://www.ecreativeim.com/blog/wp-content/uploads/2011/05/image-not-found.jpg' }}
                resizeMode={"contain"}
                style={styles.card}
              />

              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  alignItems: "flex-start",
                  backgroundColor: "#fff",
                  paddingTop: 7,
                }}
              >
                <Text style={styles.name}>{game.title}</Text>
                <Text style={styles.description}>{game.publisher}</Text>
              
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>:<View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',}}><ActivityIndicator size={20} color="#000" /></View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - 33) / 2,
    height: 295,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginBottom: 12,
  },
  card: {
    alignItems: "flex-start",
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 8,
    marginBottom: 5,
  },
  price: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default GameList;
