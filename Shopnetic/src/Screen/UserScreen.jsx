import React, { useState, useRef, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

const UserScreen = () => {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState('Ankit Kumar'); 
  const ref = useRef(null);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.permissionText}>
          We need your permission to access the camera.
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((prev) => (prev === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    setProfilePic(photo?.uri);
    setShowCamera(false);
  };

  const handleShowCamera = () => setShowCamera(true);

  if (showCamera) {
    return (
      <View style={styles.cameraContainer}>
        <CameraView style={styles.camera} facing={facing} ref={ref}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cameraButton}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.buttonText}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
              <Text style={styles.buttonText}>Snap</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <TouchableOpacity onPress={handleShowCamera}>
        <Image
          source={
            profilePic
              ? { uri: profilePic }
              : require('../../assets/user.png') 
          }
          style={styles.avatar}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{userName}</Text>
      <Text style={styles.subText}>Tap the picture to update</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoValue}>ankit2914978@gmail.com</Text>
        <Text style={styles.infoLabel}>Phone</Text>
        <Text style={styles.infoValue}>+918707538123</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#3498db',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#f0f4f8',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  infoLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  infoValue: {
    fontSize: 16,
    color: '#111',
    fontWeight: '500',
  },
  permissionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  permissionButton: {
    backgroundColor: '#0a84ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#00000088',
    padding: 20,
  },
  cameraButton: {
    backgroundColor: '#ffffff22',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
