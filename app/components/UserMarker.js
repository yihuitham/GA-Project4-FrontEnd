import React from 'react';
import { Marker } from 'react-native-maps';
import { useSelectedUserContext } from '../context/Context';

const safetyScale = (safetyLevel) => {
  switch (true) {
    case safetyLevel <= 4:
      return '#fbc101';
    case safetyLevel > 4 && safetyLevel <= 7:
      return '#f95b00';
    case safetyLevel > 7:
      return '#ec100c';
    default:
      return 'grey';
  }
};

function UserMarker({ user, index, openModal }) {
  const [selectedUser, setSelectedUser] = useSelectedUserContext();
  return (
    <Marker
      key={index}
      pinColor={safetyScale(user.safety)}
      coordinate={{
        latitude: user.latitude,
        latitudeDelta: 0.01,
        longitude: user.longitude,
        longitudeDelta: 0.01,
      }}
      onPress={() => {
        setSelectedUser(user);
        openModal();
      }}
    />
  );
}

export default UserMarker;
