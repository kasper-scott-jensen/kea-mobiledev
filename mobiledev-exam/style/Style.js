import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    horizontalCard: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: .5
    },
    horizontalCardCenter: {
        flex: .7,
        backgroundColor: '#ff6347',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: .5
    },
    centerText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    cardText: {
        position: 'absolute',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    cardImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    cardOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    aboutTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff6347',
        marginTop: 1
    },
    aboutMapWrapper: {
        flex: 1.75,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 1

    },
    map: {
        width: '100%',
        height: '100%'
    },
    aboutHeader: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    aboutBody: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    addTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallTextInput: {
        borderColor: '#ff6347',
        borderWidth: 2,
        borderRadius: 10,
        height: '15%',
        width: '95%',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        fontSize: 15,
        marginBottom: 10
    }, 
    bigTextInput: {
        borderColor: '#ff6347',
        borderWidth: 2,
        borderRadius: 15,
        height: '40%',
        width: '95%',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        fontSize: 15
    },
    addButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    addButton: {
        backgroundColor: '#ff6347',
        width: '20%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5,
        borderRadius: 10
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    addCancelButton: {
        backgroundColor: '#999999',
        width: '20%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5,
        borderRadius: 10
    },
    touchableIconText: {
        color: '#ff6347',
        fontSize: 15,
        fontWeight: 'bold'
    },
    addIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%'
    },
    touchableIcon: {
        alignItems: 'center',
        marginHorizontal: 15
    },
    addImageWrapper: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    browseRandomWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    browseOwnWrapper: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItemImage: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        margin: 10
    },
    listItem: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: .5,
        backgroundColor: '#ffffff'
    },
    flatList: {
        flex: 1,
        width: '100%',
        backgroundColor: '#999999'
    },
    listItemText: {
        color: '#999999',
        fontSize: 20,
        fontWeight: 'bold'
    },
    browseHeader: {
        backgroundColor: '#ff6347',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    browseHeaderText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 23,
        padding: 5
    },
    detailImageWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailImage: {
        height: '90%',
        width: '90%',
        resizeMode: 'contain'
    },
    detailTextWrapper: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    detailWrapper: {
        flex: 1
    },
    detailTitle: {
        color: '#ff6347',
        fontSize: 30,
        fontWeight: 'bold'
    },
    detailBody: {
        lineHeight: 22,
        fontSize: 15,
        paddingVertical: 15,
        textAlign: 'center'
    },
    detailGuide: {
        color: '#0000FF',
        paddingVertical: 20,
        textAlign: 'center'
    },
    detailRegion: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10
    },
    detailsDeleteButton: {
        backgroundColor: '#999999',
        width: '20%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5,
        borderRadius: 10
    },
    detailsButtonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    detailsButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        flexDirection: 'row'
    },
    detailsEditButton: {
        backgroundColor: '#ff6347',
        width: '20%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5,
        borderRadius: 10
    },
    editImageWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editImage: {
        height: '90%',
        width: '90%',
        resizeMode: 'contain'
    },
    editTextWrapper: {
        flex: 1.4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    editTitle: {
        color: '#ff6347',
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    editButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        flexDirection: 'row'
    }


})

export { styles }
