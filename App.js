import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, ScrollViewComponent } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>18 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('./assets/Profile.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}> 
          <Image source={require('./assets/Filter.png')} style={styles.filterIcon} /> 
          
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/reading.jpg')} />
          <Text style={styles.categoryTitle}>Reading</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/running.jpg')} />
          <Text style={styles.categoryTitle}>Running</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/gaming.jpg')} />
          <Text style={styles.categoryTitle}>Gaming</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/workout.jpg')} />
          <Text style={styles.categoryTitle}>Workouts</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/Engineering.jpg')} />
          <Text style={styles.categoryTitle}>Engineering</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/football.jpg')} />
          <Text style={styles.categoryTitle}>football</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryCard}>
          <Image
            style={styles.categoryImage}
            source={require('./assets/athletics.jpg')} />
          <Text style={styles.categoryTitle}>Athletics</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
      

      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Mobile App Development</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Artificial Intelligence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Push Ups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Assessments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Cybersecurity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Sofware Engineering</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Web Technologies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Multimedia and Web Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Machine Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Data Structures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>UI/UX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Mock-Up Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>Course Informations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskCard}>
          <Text style={styles.taskText}>School Curriculum</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#860111',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 30,
    color: '#000',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 2,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFF',
    fontSize: 18,
  },
  filterButton: {
    marginLeft: 15,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  
  horizontalscroll: {
    flexGrow: 0,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '40%',
    height:250,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 40,
  },
  categoryImage: {
    width: 150,
    height: 150,
    margin: 10,
    paddingVertical: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: '#888',
  },
  ongoingTasks: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },



  taskCard: {
    padding: 25,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    
    height: 100,
  },
  taskText: {
    fontSize: 20,

  },
});