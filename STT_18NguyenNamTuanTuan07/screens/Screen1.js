import { View, Text ,SafeAreaView, FlatList,Image, TouchableOpacity} from 'react-native'
import React ,{useState,useEffect}from 'react'
import { SearchBar } from '@rneui/themed';
import IMAGES from '../contain/index'


const Screen1 = ({navigation}) => {
    const [search, setSearch] = useState("Search");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://654753d4902874dff3ac2aff.mockapi.io/donut')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, []);
  return (
    <SafeAreaView style={{marginLeft:10,flex:1}}>
        <Text style={{fontSize:16,fontWeight:700 ,marginTop:10}}>Welcome, Jala!</Text>
        <Text style={{marginTop:10,fontSize:20,fontWeight:700}}>Choice you Best food</Text>
        
        <View style={{width:'100%',height:60,flexDirection:'row',justifyContent:'space-around',marginVertical:20}}>
            <View style={{width:120,height:'100%',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
                <Text style={{fontSize:18,fontWeight:700}}>Donut</Text>
            </View>
            <View style={{width:120,height:'100%',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
                <Text style={{fontSize:18,fontWeight:700}}>Pink Donut</Text>
            </View>
            <View style={{width:120,height:'100%',justifyContent:'center',alignItems:'center',borderRadius:10,borderWidth:1,borderColor:'gray'}}>
                <Text style={{fontSize:18,fontWeight:700}}>Floating</Text>
            </View>
        </View>
        <FlatList 
            data={data}
            renderItem={({item}) =>(
                <TouchableOpacity 
                    style={{width:'95%',height:120,flexDirection:'row',alignItems:'center',backgroundColor:'rgba(244, 221, 221, 1)',borderRadius:10,marginTop:10,marginHorizontal:10}}
                   
                    onPress={() => navigation.navigate('Screen2',{item})}
                >
                    <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'center',padding:10}}>
                        <Image 
                            source={{uri: item.image}} 
                            style={{width:'100%',height:'100%',resizeMode:'contain',margin:10}}    
                        />
                    </View>
                    <View style={{margin:20}}>
                        <Text style={{fontSize:20,fontWeight:700}}>{item.name}</Text>
                        <Text style={{fontSize:16,fontWeight:700}}>{item.description}</Text>
                        <Text style={{fontSize:20,fontWeight:700}}>{item.price}</Text>
                    </View>
                    <View style={{width:'50',height:50,bottom:-40}}>
                        <Image source={require('../assets/plus_button.png')}/>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
        />

        
    </SafeAreaView>
  )
}

export default Screen1