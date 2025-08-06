import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';


export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [torchEnabled, setTorchEnabled] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function toggleTorch() {
    setTorchEnabled(current => !current);
  }



  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} enableTorch={torchEnabled}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <MaterialCommunityIcons name="camera-flip-outline" size={35} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.flash} onPress={toggleTorch}>
          <Entypo name="flash" size={35} color="black" />
          </TouchableOpacity>
      
        </View>

       
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    backgroundColor: 'transparent',
    margin: 19,
    padding:11
  },
  button: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop:44,

  },

 flash: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop:44,


  },
 
});

