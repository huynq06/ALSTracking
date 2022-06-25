import React, {useState, useEffect,useRef} from 'react';
import { PixelRatio, StyleSheet, Text, View, PanResponder, Animated, TouchableOpacity } from 'react-native';
import base64 from 'base-64';
import CalendarPicker from 'react-native-calendar-picker';
import { COLORS, SIZES } from '../../constants/theme';
import ImagePicker from 'react-native-image-crop-picker';

const WIDTH = 320;

const REACTIONS = [
    { label: "Worried", src: require('../../assets/images/worried.png'), bigSrc: require('../../assets/images/worried_big.png') },
    { label: "Sad", src: require('../../assets/images/sad.png'), bigSrc: require('../../assets/images/sad_big.png') },
    { label: "Strong", src: require('../../assets/images/ambitious.png'), bigSrc: require('../../assets/images/ambitious_big.png') },
    { label: "Happy", src: require('../../assets/images/smile.png'), bigSrc: require('../../assets/images/smile_big.png') },
    { label: "Surprised", src: require('../../assets/images/surprised.png'), bigSrc: require('../../assets/images/surprised_big.png') },
  ];
  const DISTANCE =  WIDTH / REACTIONS.length;
  const END = WIDTH - DISTANCE;

const ProfileScreen = () =>{
    const selectImgHandle = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            multiple:true
          }).then(image => {
            console.log(image);
          });
    }
    const _pan = useRef(new Animated.Value(4 * DISTANCE)).current
    const [scaleAnim, setScaleAnim] = useState(new Animated.Value(2 * DISTANCE));
    function updatePan(toValue) {
        Animated.spring(_pan, { toValue, friction: 7,useNativeDriver:false }).start();
      }
    return (
        <View style={styles.container}>
          <View style={styles.wrap}>
            <Text style={styles.welcome}>
              How are you feeling?
            </Text>
            
            <View style={styles.line} />
  
            <View style={styles.reactions}>
              {REACTIONS.map((reaction, idx) => {
                const u = idx * DISTANCE;
                let inputRange = [u-20, u, u+20];
                let scaleOutputRange = [1, 1.25, 1];
                let topOutputRange = [0, 10, 0];
                let colorOutputRange = ['#999', '#222', '#999'];
  
                if (u-20 < 0) {
                  inputRange = [u, u+20];
                  scaleOutputRange = [1.25, 1];
                  topOutputRange = [10, 0];
                  colorOutputRange = ['#222', '#999'];
                }
  
                if (u+20 > END) {
                  inputRange = [u-20, u];
                  scaleOutputRange = [1, 1.25];
                  topOutputRange = [0, 10];
                  colorOutputRange = ['#999', '#222'];
                }
  
  
                return (
                  <TouchableOpacity onPress={()=>updatePan(u)} activeOpacity={0.9} key={idx}>
                    <View style={styles.smileyWrap}>
                      <Animated.Image
                        source={reaction.bigSrc}
                        style={[styles.smiley,
                             {
                              
                                //tintColor:COLORS.yellow,
                            transform: [{
                                scale: _pan.interpolate({
                                  inputRange,
                                  outputRange: scaleOutputRange,
                                  extrapolate: 'clamp',
                                })
                              }
                            ],
                            backgroundColor:COLORS.yellow,
                          }]}
                      />
                    </View>
  
                
                    <Animated.Text style={[styles.reactionText, {
                    top: _pan.interpolate({
                      inputRange,
                      outputRange: topOutputRange,
                      extrapolate: 'clamp',
                    }),
                    color: _pan.interpolate({
                      inputRange,
                      outputRange: colorOutputRange,
                      extrapolate: 'clamp',
                    })
                  }]}>
                      {reaction.label}
                    </Animated.Text>
                  </TouchableOpacity>
                );
              })}
              {/* <Animated.View style={styles.bigSmiley}>
                {REACTIONS.map((reaction, idx) => {
                  let inputRange = [(idx-1)*DISTANCE, idx*DISTANCE, (idx+1)*DISTANCE];
                  let outputRange = [0, 1, 0];
  
                  if (idx == 0) {
                    inputRange = [idx*DISTANCE, (idx+1)*DISTANCE];
                    outputRange = [1, 0];
                  }
  
                  if (idx == REACTIONS.length - 1) {
                    inputRange = [(idx-1)*DISTANCE, idx*DISTANCE];
                    outputRange = [0, 1];
                  }
                  return (
                    <Animated.Image
                      key={idx}
                      source={reaction.bigSrc}
                        style={styles.bigSmileyImage}
                    />
                  );
                })}
              </Animated.View> */}
            </View>
          </View>
        </View>
      );
}
const size = 42;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  wrap: {
    width: WIDTH,
    marginBottom: 50,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
    fontWeight: '600',
    fontFamily: 'Avenir',
    marginBottom: 50,
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  smileyWrap: {
    width: DISTANCE,
    height: DISTANCE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smiley: {
    width: size,
    height: size,
    borderRadius: size/2,
    //backgroundColor: 'red',
  },
  bigSmiley: {
    width: DISTANCE,
    height: DISTANCE,
    borderRadius: DISTANCE/2,
    //backgroundColor: '#ffb18d',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bigSmileyImage: {
    width: DISTANCE,
    height: DISTANCE,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  reactionText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#999',
    fontWeight: '400',
    fontFamily: 'Avenir',
    marginTop: 5,
  },
  line: {
    height: 4 / PixelRatio.get(),
    backgroundColor: 'red',
    width: WIDTH - (DISTANCE-size),
    left: (DISTANCE-size) / 2,
    top: DISTANCE/2 + (2 / PixelRatio.get()),
  }
});
export default ProfileScreen