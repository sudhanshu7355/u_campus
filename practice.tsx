import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Practice = () => {
  return (
    <View>
      <Text>Practice</Text>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({})


// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View>
//       <Text>Count: {count}</Text>
//       <Button title="Increase" onPress={() => setCount(count + 1)} />
//       <Button title="Decrease" onPress={() => setCount(count - 1)} />
//     </View>
//   );
// };

// export default Counter;



// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(response => response.json())
//       .then(data => setUser(data));
//   }, []); // Empty array = Runs only once

//   return (
//     <View>
//       {user ? <Text>{user.name}</Text> : <Text>Loading...</Text>}
//     </View>
//   );
// };

// export default UserProfile;




{/* <FlatList 
      data={user}
      renderItem={({item})=><Text style={styles.items}>{item.name}</Text>}
      /> */}



 // user.map((item) => <Text style={styles.items}>{item.name}</Text>)
//  import React from 'react';
// import { View, Button, Alert } from 'react-native';

// const showAlert = () => {
//   Alert.alert(
//     "Warning",
//     "Are you sure you want to continue?",
//     [
//       { text: "Cancel", style: "cancel" },
//       { text: "OK", onPress: () => console.log("OK Pressed") }
//     ]
//   );
// };

// const App = () => (
//   <View>
//     <Button title="Show Alert" onPress={showAlert} />
//   </View>
// );

// export default App;






// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   const user = [
//     {
//       id: 1,
//       name: 'Ayush'
//     },
//     {
//       id: 2,
//       name: 'Ashray'
//     },
//     {
//       id: 3,
//       name: 'Shivam'
//     },
//     {
//       id: 4,
//       name: 'Alok'
//     },
//   ]
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>FlatList</Text>
//       <FlatList 
//       data={user}
//       renderItem={({item})=><Text style={styles.items}>{item.name}</Text>}
//       />
//     </View>
//   )
// }

// export default App
// <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Home}/>
    //     <Stack.Screen name='Order' component={Order}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

