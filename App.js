import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View,  Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {


 
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] =useState(false);

  const addGoalHandler = (enteredGoal) => {
    console.log(enteredGoal);
    setCourseGoals((currentGoals) =>
      [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]
    );
    setIsAddMode(false);
  };

const removeGoalHandler = goalId => {
  setCourseGoals(currentGoals=> {

      return currentGoals.filter(goal=> goal.id!==goalId);

  })
}

const cancelAddGoalHandler = ()=>{
  setIsAddMode(false);
}



  return (
    <View style={styles.screen}>
      <Button title='Add more Goals' onPress={()=> setIsAddMode(true)}/>
      <GoalInput addGoal = {addGoalHandler} visible={isAddMode} onCancel = {cancelAddGoalHandler} /> 
      <FlatList 
        keyExtractor={(item, index)=>item.id}
        data={courseGoals}
        renderItem={itemData =>  <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value} />} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },


});
