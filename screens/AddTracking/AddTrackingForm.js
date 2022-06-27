import React, {useRef, useState, useEffect, useCallback} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Text from '../../constants/Text'
import * as Yup from 'yup';
import {Formik} from 'formik';
import {SIZES, COLORS, FONTS} from '../../constants/theme';
import icons from '../../constants/icons';
import TextButton from '../../components/TextButton';
import FormInputMik from '../../components/FormInputMik';
import utils from '../../utils/Utils';
import CustomSwitch from '../../components/CustomSwitch';
import ValidationMessage from '../../components/ValidationMessage';

const validations = {
    trackNumber: Yup.string().required('Required.'),
  };
  
const AddTrackingForm = ({submit,tracking={}}) =>{
    const [category,setCategory] = useState(1)
    const trackNumberRef = useRef();
    useEffect(()=>{
        trackNumberRef.current.focus()
    },[])
    const onSubmit = values => {
        submit({...tracking,...values})
      };
    return(
        <Formik
        enableReinitialize
        validationSchema={Yup.object().shape({
            ...validations,
          })}
          initialValues={{
            ...tracking,
          }}
          onSubmit={values => onSubmit(values)}>
            {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        setFieldValue,
      }) => (
        <>
          <View style={styles.container}>
            <View style={{display: 'flex'}}>
              <KeyboardAvoidingView behavior="padding">
                {/* <Text>UserName *</Text> */}
                <FormInputMik
                label='Mawb/Hawb'
                style={{
                    backgroundColor:'green'
                }}
                  inputRef={trackNumberRef}
                  returnKeyType="next"
                  onChangeText={handleChange('trackNumber')}
                  onBlur={handleBlur('trackNumber')}
                  inputValue={values.trackNumber}
                  autoCapitalize="none"
                  errMsg={errors.trackNumber}
                />
                  
                <Text style={{
                    marginTop:SIZES.base
                }}>Categories</Text>
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-around',
                        marginTop:SIZES.base
                    }}
                >
                <TextButton
                    label='IMPORT'
                    labelStyle={{
                        color: category==1? COLORS.white : COLORS.primaryALS
                    }}
                    buttonContainerStyle={{
                        height:40,
                        paddingHorizontal:55,
                        borderRadius:SIZES.radius,
                        borderWidth: 1,
                        borderColor: COLORS.gray,
                        backgroundColor: category==1? COLORS.primaryALS : COLORS.white
                    }}
                    onPress={()=>setCategory(1)}
                />
                     <TextButton
                    label='EXPORT'
                    labelStyle={{
                        color: category==2? COLORS.white : COLORS.primaryALS
                    }}
                    buttonContainerStyle={{
                        height:40,
                        paddingHorizontal:55,
                        borderRadius:SIZES.radius,
                        borderWidth: 1,
                        borderColor: COLORS.gray,
                        backgroundColor: category==2? COLORS.primaryALS : COLORS.white
                    }}
                    onPress={()=>setCategory(2)}
                />
                </View>
              </KeyboardAvoidingView>
            </View>
        
          </View>
          <View
            style={{
                position:'absolute',
                left:SIZES.padding,
                right:SIZES.padding,
               bottom:20,
              // backgroundColor:COLORS.red
            }}
          >
  <TextButton
              label="Track"
              disabled={!isValid}
              
              buttonContainerStyle={{
           
            
                marginTop: SIZES.radius,
                paddingVertical: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isValid
                  ? COLORS.primaryALS
                  : COLORS.transparentprimaryALS,
              }}
              onPress={handleSubmit}
            />
          </View>
        
        </>
        
      )}
        </Formik>
    )
}
const styles = StyleSheet.create({
    container: {
      marginBottom: 50,
      marginTop:SIZES.padding,
      paddingHorizontal:SIZES.padding,
      //backgroundColor:COLORS.green,
      //flex:1
    },
  });
export default AddTrackingForm;