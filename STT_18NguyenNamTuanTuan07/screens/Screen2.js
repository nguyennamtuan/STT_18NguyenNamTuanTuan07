import { View, Text ,Image, TouchableOpacity} from 'react-native'
import { useState } from 'react'
import React from 'react'

const Screen2 = ({route}) => {
  const {item} = route.params
  const [soluong, setSoluong] = useState(1);
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
            <Image
                source={{ uri: item.image }}
                style={{ width: 250, height: 250}}
            />
        </View>
        <View style={{marginLeft:20,marginTop:30}}>
            <Text style={{fontSize:20,fontWeight:700}}>{item.name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>                
                <Text style={{fontSize:16,fontWeight:700}}>{item.description}</Text>
                <Text style={{fontSize:20,fontWeight:700,marginRight:20}}>{item.price}</Text>
            </View>
            <View style={{flexDirection:'row',width:'100%',height:70,marginTop:20,alignItems:'center',justifyContent:'space-between'}}>
                <View style={{}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/Vector.png')}/>
                        <Text style={{marginLeft:10}}>Delivery in</Text>
                    </View>
                    <Text style={{fontSize:18,fontWeight:700,marginTop:10}}>25 - 30 min</Text>
                </View>
                <View style={{flexDirection:'row',marginRight:20}}>
                    <TouchableOpacity
                    
                        onPress={() => setSoluong(soluong > 0 ? soluong - 1 : 0)}
                    >
                        <Image source={require('../assets/tru.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:18,marginLeft:5,fontWeight:500}}>{soluong}</Text>
                    <TouchableOpacity
                    
                        onPress={() => setSoluong(soluong + 1)}
                    >
                        <Image source={require('../assets/cong.png')} style={{marginLeft:5}}/>
                    </TouchableOpacity>
                </View> 
                
            </View>

            <View style={{marginTop:30}}>
                    <Text style={{fontSize:22,fontWeight:700}}>Restaurant Info</Text>
                    <Text style={{marginTop:10}}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>
            <View style={{width:'100%',alignItems:'center',marginTop:30}}>
                <View style={{width:'70%',height:50,backgroundColor:'rgba(241, 176, 0, 1)',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                    <Text style={{fontSize:30,fontWeight:700,color:'white'}}>Add to card</Text>
                </View>
            </View>
        </View>
      
    </View>
  )
}

export default Screen2