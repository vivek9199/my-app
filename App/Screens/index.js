import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    RefreshControl,
    View,
    Text,
    StatusBar,
    ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';
import { AuthorListApiCalling } from './../Redux/action';
import { useSelector } from 'react-redux';
import { SliderBox } from "react-native-image-slider-box";


const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const HomeComponent = () => {
    const dispatch = useDispatch()
    // const autherData = useSelector((state) => state.autherReducer);
    const autherData = useSelector((state) => state.autherReducer);
    const [refreshing, setRefreshing] = useState(false);
    const [name, setName] = useState(0)

    useEffect(() => {
        dispatch(AuthorListApiCalling())
        // console.log("autherData===>", autherData)

    }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(1000).then(() => setRefreshing(false));
    }, []);

    const imageList = autherData.successstatus == 'IMAGES_LIST_SUCCESS' && autherData.autherData.map((item) => {
        return "https://picsum.photos/200/300?image=" + item.id
    })

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.container}>
                    <View style={styles.auther}>
                        <Text style={styles.autherText}>{autherData.successstatus == 'IMAGES_LIST_SUCCESS' && autherData.autherData[name].author}</Text>
                    </View>
                    <SliderBox
                        images={imageList}
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        currentImageEmitter={index => setName(index)}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default HomeComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    auther: {
        paddingVertical: 10,
        alignItems: 'center'
    },
    autherText: {
        fontSize: 20,
        color: 'grey'
    }
})
