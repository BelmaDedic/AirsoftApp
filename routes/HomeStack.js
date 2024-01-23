import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Home";
import ReadyPage from '../components/ReadyPage';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
          headerTintColor: '#ffffff',
          headerStyle: { backgroundColor: '#2c7138', height: 60 },
          headerTitleStyle: {
            fontSize: 24,
            padding: 12,
            paddingLeft: 2,
            fontWeight: 'bold',
          },
      }}
    >
      <Stack.Screen name="Home" component={Home} 
        options={{ headerTitle: 'Moja lista za airsoft susret' }}
      />
      <Stack.Screen name="ReadyPage" component={ReadyPage} options={{ headerTitle: '' }} 
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
