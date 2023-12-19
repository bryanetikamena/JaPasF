import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, Alert, ImageBackground, TextInput, Button } from 'react-native';
import { Notification, SearchNormal, Receipt21, Clock, Message, ArrowRight2, } from 'iconsax-react-native';
import {fontType, colors } from '../../assets/theme';
// import {ItemSmall} from '../../components'; 
// import {SearchNormal1} from 'iconsax-react-native';
// import {BeritaOlahraga, OlahragaPopuler} from '../../../data';
// import Berita from '../../components/Berita';


const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = (text) => {
    setSearchText(text);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleProfilePress = () => {
    toggleModal();
  };

  const handleEditProfile = () => {
    toggleModal();
  };

  const handleLogout = () => {
    toggleModal();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageBanner}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>BLUE LAGOON</Text>
            </View>
            <View style={styles.notificationContainer}>
              <Notification color={colors.black()} variant="Linear" size={24} />
            </View>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={handleProfilePress}>
                <Image
                  source={{
                    uri: 'https://templates.iqonic.design/sofbox-admin/sofbox-dashboard-html/html/images/user/1.jpg',
                  }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>


          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Blue Lagoon</Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginTop: 10, }}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Cari Kategori olahraga"
                onChangeText={handleSearchPress}
                value={searchText}
                placeholderTextColor="gray"
              />
              <View style={styles.searchButtonContainer}>
                <TouchableOpacity style={styles.searchButton}>
                  <SearchNormal color={colors.black()} variant="Linear" size={24} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
        <OlahragaPopuler />
        <JelajahiBerdasarkanKategori />
        <BeritaOlahraga />
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profil Anda</Text>
              <TouchableOpacity onPress={handleEditProfile}>
                <Text style={styles.modalItem}>Edit Profil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.modalItem}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalItem}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

  );
};


const OlahragaPopuler = () => {
  return (
    <View style={styles.headerOlahragaPopuler}>
      <View style={styles.OlahragaPopulerTitleContainer}>
        <Text style={styles.textSeni}>Olahraga Paling Diminati</Text>
        {/* <ArrowRight2 color={colors.black()} variant="Linear" size={20} /> */}
      </View>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 20 }}>
          <View style={{ ...itemOlahragaPopuler.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemOlahragaPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/c3/bc/59/c3bc59e66d310ee9238e6af7d74da98e.jpg',
              }}
            >
              <View style={itemOlahragaPopuler.cardContent}>
                <View style={itemOlahragaPopuler.textContainer}>
                  <Text style={itemOlahragaPopuler.cardTitle}>Basket</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemOlahragaPopuler.cardItem}>
            <ImageBackground
              style={itemOlahragaPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/cd/98/af/cd98af386c80be3f7d8a8a3c2b4c6bd1.jpg',
              }}
            >
              <View style={itemOlahragaPopuler.cardContent}>
                <View style={itemOlahragaPopuler.textContainer}>
                  <Text style={itemOlahragaPopuler.cardTitle}>Bulu Tangkis</Text>
            
                </View>
                {/* <View style={itemOlahragaPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={itemOlahragaPopuler.cardItem}>
            <ImageBackground
              style={itemOlahragaPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/736x/43/22/48/4322488bdb22798914f256db7fd638bf.jpg',
              }}
            >
              <View style={itemOlahragaPopuler.cardContent}>
                <View style={itemOlahragaPopuler.textContainer}>
                  <Text style={itemOlahragaPopuler.cardTitle}>Voli</Text>
                 
                </View>
                {/* <View style={itemOlahragaPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const JelajahiBerdasarkanKategori = () => {
  return (
    <View style={styles.headerOlahraga}>
      <View style={styles.olahragaPopulerTitleContainer}>
        <Text style={styles.textSeni}>Jelajahi Berdasarkan  Kategori</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemOlahraga.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemOlahraga.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/49/51/17/4951179acfd6fa46ccdf8abc6e49400e.jpg',
              }}
            >
              <View style={itemOlahraga.cardContent}>
                <View style={itemOlahraga.cardInfo}>
                  <Text style={itemOlahraga.cardTitle}>
                    Olahraga Individual
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemOlahraga.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemOlahraga.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/originals/fc/a9/e9/fca9e929a9b8e67df55f1d8990de2983.jpg',
              }}
            >
              <View style={itemOlahraga.cardContent}>
                <View style={itemOlahraga.cardInfo}>
                  <Text style={itemOlahraga.cardTitle}>
                    Olahraga Tim
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

const BeritaOlahraga = () => {
  return (
    <View style={styles.headerOlahraga}>
      <View style={styles.olahragaPopulerTitleContainer}>
        <Text style={styles.textSeni}>Berita Tentang Olahraga </Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
      <View style={beritaOlahraga.listCard}>
        <View style={beritaOlahraga.cardItem}>
          <Image
            style={beritaOlahraga.cardImage}
            source={{
              uri: 'https://i.pinimg.com/originals/c3/bc/59/c3bc59e66d310ee9238e6af7d74da98e.jpg',
            }}s
          />
          <View style={beritaOlahraga.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={beritaOlahraga.cardCategory}>Basket</Text>
                <Text style={beritaOlahraga.cardTitle}>
                  Kebagkitan Basket Indonesia
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={beritaOlahraga.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaOlahraga.cardText}>05 Agustus 2023</Text>
              {/* <Message
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaOlahraga.cardText}>89</Text> */}
            </View>
          </View>
        </View>

      </View>
      <View style={beritaOlahraga.listCard}>
        <View style={beritaOlahraga.cardItem}>
          <Image
            style={beritaOlahraga.cardImage}
            source={{
              uri: 'https://i.pinimg.com/originals/fc/a9/e9/fca9e929a9b8e67df55f1d8990de2983.jpg',
            }}
          />
          <View style={beritaOlahraga.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={beritaOlahraga.cardCategory}>Sepak Bola</Text>
                <Text style={beritaOlahraga.cardTitle}>
                  Mengukur daya indonesia di kualifikasi Piala dunia 2026
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={beritaOlahraga.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaOlahraga.cardText}>21 Sep 2023</Text>
              {/* <Message
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaOlahraga.cardText}>89</Text> */}
            </View>
          </View>
        </View>

      </View>
    </View>

  );
};

export default HomeScreen;


const beritaOlahraga = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: 'rgba()',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: 'rgba(34, 107, 71, 1)',
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: 'rgba(5, 107, 71, 0.6)',
  },
  cardImage: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemKategori = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.black(0.5),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
});
const itemOlahragaPopuler = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.black(0.5),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
});
const itemOlahraga = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  imageBanner: {
    backgroundColor: 'rgba(255, 255,255, 255)',
    width: 'auto',
    height: 200,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  headerOlahragaPopuler: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerOlahraga: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginRight: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  textSeni: {
    fontSize: 20,
    marginRight: 8,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  notificationContainer: {
    // backgroundColor: 'white',
    // padding: 8,
    // borderRadius: 100
  },
  profileContainer: {
    marginLeft: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtonContainer: {
    paddingLeft: 14,
  },
  searchButton: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: '#9EC9F1',
  },
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    top: 60,
    right: 25,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',

  },
  modalItem: {
    fontSize: 16,
    marginBottom: 12,
    color: 'black',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 0,
  },
  olahragaPopulerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});
