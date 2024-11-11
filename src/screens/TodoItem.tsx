import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TodoItemProps {
  task: { id: number; text: string; completed: boolean };
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask, toggleCompleted }) => {
  return (
    <View style={styles.todoItemContainer}>
      <TouchableOpacity onPress={() => toggleCompleted(task.id)} style={styles.taskContainer}>
        <MaterialIcons
          name={task.completed ? 'check-circle' : 'radio-button-unchecked'}
          size={20}
          color={task.completed ? '#4CAF50' : '#ccc'}
        />
        <Text style={[styles.taskText, task.completed && styles.completed]}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
        <MaterialIcons name="close" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginVertical: 6,
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoItem;
