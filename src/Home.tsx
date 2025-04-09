import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CampusPunjab = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.campusName}>Campus Punjab</Text>
          <Text style={styles.universityName}>Chitkara University, Punjab</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.umoneyContainer}>
            <Text style={styles.umoneyText}>Umoney</Text>
            <Text style={styles.umoneyAmount}>₹0.25</Text>
          </View>
        </View>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Food..."
            placeholderTextColor="#777"
          />
        </View>
        <ScrollView>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionTitle}>Gym</Text>
              <Text style={styles.optionSubtitle}>Get Membership</Text>
              <Text style={styles.optionIcon}>🏋️‍♂️</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionTitle}>Uniform</Text>
              <Text style={styles.optionSubtitle}>Professionalism starts here</Text>
              <Text style={styles.optionIcon}>👔</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.venky}>
            <View style={styles.venkyup}>
              <View style={styles.venkyupleft}>
                <TouchableOpacity style={styles.touch}>
                  <Text style={styles.newly}>⭐️ Newly Launched</Text>
                </TouchableOpacity>
                <View style={styles.twotext}>
                  <Text style={styles.venkeys}>Venky's</Text>
                  <Text style={styles.cu}>Venky's-CU Punjab Rajpura</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.full}>Full menu</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.venkyupright}>
                <Text style={styles.home}>🏠</Text>
              </View>
            </View>
            <View style={styles.down}>
              <Text style={styles.food1}>🍔</Text>
              <Text style={styles.food2}>🍕</Text>
              <Text style={styles.food3}>🍱</Text>
              <Text style={styles.food4}>🥗</Text>
              <Text style={styles.food5}>🥘</Text>
              <Text style={styles.food6}>🍝</Text>
            </View>
          </View>
          <View style={styles.parent}>
            <View style={styles.colleft}>
              <Text style={styles.lefttext}>Collections</Text>
            </View>
            <View style={styles.collright}></View>
          </View>
          <View style={styles.collections}>
            <ScrollView horizontal={true}>
              <TouchableOpacity >
                <Text style={styles.col1}>🧃</Text>
                <Text>Bevrages</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🍟</Text>
                <Text>snacks</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🥣</Text>
                <Text>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🎂</Text>
                <Text>Cakes</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🧃</Text>
                <Text>Bevrages</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🍟</Text>
                <Text>snacks</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🥣</Text>
                <Text>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🎂</Text>
                <Text>Cakes</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🧃</Text>
                <Text>Bevrages</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🍟</Text>
                <Text>snacks</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🥣</Text>
                <Text>Breakfast</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.col1}>🎂</Text>
                <Text>Cakes</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.collections2}>
            <ScrollView horizontal={true}>
              <TouchableOpacity>
                <Text style={styles.coll1}>☕️</Text>
                <Text>Coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🍝</Text>
                <Text>Maggi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🥪</Text>
                <Text>Sandwich</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🇮🇳</Text>
                <Text>indian</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>☕️</Text>
                <Text>Coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🍝</Text>
                <Text>Maggi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🥪</Text>
                <Text>Sandwich</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🇮🇳</Text>
                <Text>indian</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>☕️</Text>
                <Text>Coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🍝</Text>
                <Text>Maggi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🥪</Text>
                <Text>Sandwich</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.coll1}>🇮🇳</Text>
                <Text>indian</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.parent}>
            <View style={styles.colleft}>
              <Text style={styles.lefttext}>Trending Outlet's</Text>
            </View>
            <View style={styles.collright}></View>
          </View>
          <View style={{ height: 260, backgroundColor: 'white', padding: 20 }}>
            <ScrollView horizontal={true}>
              <View style={{ width: 130, height: 160, backgroundColor: 'white', marginRight: 20, padding: 10, borderRadius: 10, elevation: 10, borderWidth: 0.5, borderColor: 'grey' }}>
                <View style={{ width: '100%', height: 110, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                  <Image
                    source={require('../assets/pngegg.png')}
                    style={{ height: 110, width: 110 }}
                  />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>Venky's</Text>
                </View>
              </View>
              <View style={{ width: 130, height: 160, backgroundColor: 'white', marginRight: 20, padding: 10, borderRadius: 10, elevation: 10 }}>
                <View style={{ width: '100%', height: 110, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                  <Image
                    source={require('../assets/lapinoz.png')}
                    style={{ height: 110, width: 110 }}
                  />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>Lapinoz</Text>
                </View>
              </View>
              <View style={{ width: 130, height: 160, backgroundColor: 'white', marginRight: 20, padding: 10, borderRadius: 10, elevation: 10 }}>
                <View style={{ width: '100%', height: 110, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                  <Image
                    source={require('../assets/papa-john.jpg')}
                    style={{ height: 110, width: 110 }}
                  />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>Papa John</Text>
                </View>
              </View>
              <View style={{ width: 130, height: 160, backgroundColor: 'white', marginRight: 20, padding: 10, borderRadius: 10, elevation: 10 }}>
                <View style={{ width: '100%', height: 110, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                  <Image
                    source={require('../assets/sip.png')}
                    style={{ height: 110, width: 110 }}
                  />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>Sip Stop</Text>
                </View>
              </View>
              <View style={{ width: 130, height: 160, backgroundColor: 'white', marginRight: 20, padding: 10, borderRadius: 10, elevation: 10 }}>
                <View style={{ width: '100%', height: 110, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                  <Image
                    source={require('../assets/ben.png')}
                    style={{ height: 110, width: 110 }}
                  />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>Ben & Jerry</Text>
                </View>
              </View>
              <View style={{ width: 130, height: 160, backgroundColor: 'white', marginRight: 20, padding: 10, borderRadius: 10, elevation: 10 }}>
                <View style={{ width: '100%', height: 110, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: 'grey' }}>
                  <Image
                    source={require('../assets/feast.png')}
                    style={{ height: 90, width: 100 }}
                  />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>Mr.Beast</Text>
                </View>
              </View>



            </ScrollView>

          </View>
          <View style={styles.parent}>
            <View style={styles.colleft}>
              <Text style={styles.lefttext}>Explore All Outlets</Text>
            </View>
            <View style={styles.collright}></View>
          </View>
          <View style={{ height: 400, backgroundColor: 'white', padding: 20 }}>
            <View style={{ height: 330, width: '100%', borderRadius: 10, borderWidth: 2, borderColor: 'darkgrey' }}>
              <View style={{ height: '65%', width: '100%', borderBottomWidth: 2, backgroundColor: 'white', borderColor: 'grey', borderRadius: 10 }}>
              <Image source={require('../assets/pngegg.png')} style={{height:230,width:350,resizeMode:'center'}}/>
              </View>
              <View style={{ padding: 12, flexDirection: 'row' }}>
                <View style={{ height: 90, width: '27%', borderRadius: 10, borderWidth: 1, borderColor: 'green' }}>
                <Image source={require('../assets/pngegg.png')} style={{height:90,width:90,resizeMode:'center'}}/>
                </View>
                <View style={{ height: 90, width: '70%', marginLeft: 3, padding: 10 }}>
                  <View style={{ height: '48%', backgroundColor: 'white', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: 'grey' }}>Venky's</Text>
                  </View>
                  <View style={{ height: '48%', width: 180, backgroundColor: 'white', flexDirection: 'row', paddingRight: 30 }}>
                    <View style={{ height: '80%', width: 45, backgroundColor: 'green', borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                      <Icon name='star' size={20} color='white' />
                      <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>3.4</Text>
                    </View>
                    <Icon name='trending-up' size={30} />
                    <Text>1 crore people ordered from this outlet</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 400, backgroundColor: 'white', padding: 20 }}>
            <View style={{ height: 330, width: '100%', borderRadius: 10, borderWidth: 2, borderColor: 'darkgrey' }}>
              <View style={{ height: '65%', width: '100%', borderBottomWidth: 2, backgroundColor: 'white', borderColor: 'grey', borderRadius: 10 }}>
                <Image />
              </View>
              <View style={{ padding: 12, flexDirection: 'row' }}>
                <View style={{ height: 90, width: '27%', borderRadius: 10, borderWidth: 1, borderColor: 'green' }}></View>
                <View style={{ height: 90, width: '70%', marginLeft: 3, padding: 10 }}>
                  <View style={{ height: '48%', backgroundColor: 'white', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: 'grey' }}>Baskin Robbins</Text>
                  </View>
                  <View style={{ height: '48%', width: 180, backgroundColor: 'white', flexDirection: 'row', paddingRight: 30 }}>
                    <View style={{ height: '80%', width: 45, backgroundColor: 'green', borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                      <Icon name='star' size={20}  color='white' />
                      <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>3.4</Text>
                    </View>
                    <Icon name='trending_up' size={30} />
                    <Text>1 crore people ordered from this outlet</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ height: 400, backgroundColor: 'white', padding: 20 }}>

          </View>
        </ScrollView>
      </View>
      <View style={[styles.Footer, { height: 70, width: '92%', backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, margin: 15, marginTop: -80, justifyContent: 'space-around', borderRadius: 10 }]}>
        <View style={{ marginTop: 10, marginRight: 20 }}>
          <TouchableOpacity>
            <Icon name='storefront' size={30} color='grey' />
            <Text>Outlets</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, marginRight: 20 }}>
          <Icon name='receipt-long' size={30} color='grey' />
          <Text>Orders</Text>
        </View>
        <View style={{ marginTop: 10, marginRight: 20 }}>
          <Icon name='account-balance-wallet' size={30} color='grey' />
          <Text>Umoney</Text>
        </View>
        <View style={{ marginTop: 10, marginRight: 20 }}>
          <Icon name='account-circle' size={30} color='grey' />
          <Text>Profile</Text>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f44336',
  },
  headerLeft: {
    justifyContent: 'center',
  },
  campusName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  universityName: {
    color: '#fff',
    fontSize: 14,
  },
  headerRight: {
    justifyContent: 'center',
  },
  umoneyContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
  },
  umoneyText: {
    color: '#f44336',
    fontSize: 12,
  },
  umoneyAmount: {
    color: '#f44336',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#f44336',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  option: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
  },
  optionIcon: {
    fontSize: 30,
    marginTop: 8,
  },
  venky: {
    width: '95%',
    height: 260,
    borderWidth: 1.3,
    borderColor: 'lightgreen',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  venkyup: {
    flexDirection: 'row',

  },
  venkyupleft: {
    width: '100%',



  },
  venkyupright: {
    marginLeft: -135,
    marginBottom: 40,

  },
  touch: {
    width: '40%',
    height: 30,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 30,
    padding: 3,
    backgroundColor: 'lightgreen',



  },
  newly: {
    fontWeight: 'bold',
    color: 'green',



  },
  venkeys: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: '500',


  },
  cu: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',

  },
  twotext: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,

  },
  button: {
    padding: 5,
    width: '30%',
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#c92c2c',
    marginLeft: 5,


  },
  full: {
    padding: 0.5,
    color: 'white',
    marginLeft: 15,
    fontSize: 15,
    marginTop: -3,
    fontWeight: '800',


  },
  home: {
    fontSize: 115,


  },
  down: {
    flexDirection: 'row',
    gap: 15,

  },
  food1: {
    fontSize: 40,


  },
  food2: {
    fontSize: 40,

  },
  food3: {
    fontSize: 40,

  },
  food4: {
    fontSize: 40,

  },
  food5: {
    fontSize: 40,

  },
  food6: {
    fontSize: 40,
  },
  colleft: {

    marginLeft: 13,
    marginTop: 10,
    padding: 3,



  },
  collright: {
    borderWidth: 1,
    width: '50%',
    height: 0.1,
    marginTop: 26,
    flexGrow: 1,
    marginRight: 25,
    borderColor: 'grey',
    marginLeft: 10,



  },
  lefttext: {
    fontSize: 18,
    fontWeight: '500',
    


  },
  parent: {
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  collections: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,

  },
  col1: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',
    marginRight: 30,

  },
  col2: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',

  },
  col3: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',

  },
  col4: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',

  },
  collections2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,


  },
  coll1: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',
    marginRight: 30,

  },
  coll2: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',

  },
  coll3: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',

  },
  coll4: {
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'red',
    backgroundColor: 'white',

  },
  MainContainer: {
    height: 770,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
  },
  Footer: {
    elevation: 10,
    flexDirection: 'row',
  },


});


export default CampusPunjab;