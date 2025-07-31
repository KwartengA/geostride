import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout(){
return (
<Tabs screenOptions={{tabBarActiveTintColor:"green"}}>
    
   <Tabs.Screen 
     name='index' 
      options={{title:"Home", 
       headerShown:false,
       animation:"fade",
      tabBarIcon:({size,color}) => {
       return <Entypo name="home" size={size} color={color} />;
      }}}/>

   <Tabs.Screen 
   name='maps'
    options={{title:"Maps", 
       headerShown:false,
       animation:"shift",
    tabBarIcon :({size,color}) => {
      return <Fontisto name="map-marker-alt" size={size} color={color} />;
    }}}/>

   <Tabs.Screen 
   name='camera' 
   options={{title:"Camera", 
    headerShown:false,
    animation:"fade",
   tabBarIcon :({size,color}) => {
      return <Entypo name="camera" size={size} color={color} />;
   }}}/>

   <Tabs.Screen name='profile' 
   options={{title:"Profile",
    headerShown:false,
    animation:"shift",
      tabBarIcon:({size,color}) => { 
         return <FontAwesome name="user" size={size} color={color} />;
      }}}/>
  </Tabs>
);

}