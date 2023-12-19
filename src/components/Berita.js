import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import {Receipt21, Clock, Message, UserAdd} from 'iconsax-react-native';
  import React, {useState} from 'react';
  import {fontType, colors } from '../assets/theme';
  import {BeritaOlahraga} from '../../../data';
  
  const Berita = ({item}) => {
    const [bookmark, setBookmark] = useState([]);
    const toggleBookmark = itemId => {
      if (bookmark.includes(itemId)) {
        setBookmark(bookmark.filter(id => id !== itemId));
      } else {
        setBookmark([...bookmark, itemId]);
      }
    };
  
    return (
      <View style={beritaOlahraga.listCard}>
        <View style={beritaOlahraga.cardItem}>
          <Image
            style={beritaOlahraga.cardImage}
            source={{
              uri: item.image,
            }}
          />
          <View style={beritaOlahraga.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{gap: 5, width: '70%'}}>
                <Text style={beritaOlahraga.cardCategory}>{item.no}</Text>
                <Text style={beritaOlahraga.cardTitle}>{item.nama}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
                <UserAdd
                  color={'brown'}
                  variant={bookmark.includes(item.id) ? 'Bold' : 'Linear'}
                  size={25}
                />
              </TouchableOpacity>
            </View>
            <View style={beritaOlahraga.cardInfo}>
              <Text style={beritaOlahraga.cardText}>{item.desc}</Text>
              
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default Berita;

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

  