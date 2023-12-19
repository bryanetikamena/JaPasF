import {StyleSheet, Text, View,FlatList, Animated, TouchableWithoutFeedback} from 'react-native';
import React, {useRef} from 'react';
import {SearchNormal1} from 'iconsax-react-native';
import {fontType, colors } from '../../assets/theme';
import {BeritaOlahraga, OlahragaPopuler} from '../../../data';
import Berita from '../../components/Berita';
import { useNavigation } from "@react-navigation/native";

const data = [
  {id: 1, label: 'Basket'},
  {id: 2, label: 'Bulu Tanggkis'},
  {id: 3, label: 'Voli'},
  {id: 4, label: 'Tenis'},
  {id: 5, label: 'Renang'},
];

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};

const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Discover = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
  const recentBlog = OlahragaPopuler.slice(5);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchPage")}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.grey(0.5)} variant="Linear" />
          <Text style={styles.searchContainer}>Cari Kategori Olahraga</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[recent.container, {transform: [{translateY: recentY}]}]}>
        <Text style={recent.text}>Blue Lagoon Search</Text>
        <FlatListRecent />
      </Animated.View>

      <Animated.ScrollView>
      <View style={styles.listBlog}>
        <View style={{paddingHorizontal: 24}}>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            Daftar Olahraga
          </Text>
          <View>
            {BeritaOlahraga.map((item, index) => (
              <Berita item={item} key={index} />
            ))}
          </View>
        </View>
      </View>
    </Animated.ScrollView>
    </View>
  );
};

export { Discover as default } 

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingBottom: 10,
    gap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
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
  textSeni: {
    fontSize: 20,
    marginRight: 8,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },


});

const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderColor: colors.grey(0.15),
    borderWidth: 1,
    backgroundColor: colors.grey(0.03),
  },
  label: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.65),
  },
  text: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 5,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    marginRight: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
}
);