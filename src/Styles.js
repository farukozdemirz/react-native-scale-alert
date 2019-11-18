

const circle = 110;
export const AlertStyles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    alertWrapper: {
        backgroundColor: '#fff',
        width: '75%',
        alignItems: 'center',
        borderRadius: 22,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 0.6,
        shadowRadius: 9.0,
    },
    circleStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: circle,
        height: circle,
        borderRadius: circle / 2,
        backgroundColor: '#93ebb6',
        position: 'absolute',
        top: -circle / 2,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowColor: '#93ebb6',
        shadowOpacity: 0.8,
        shadowRadius: 9.0,
        position: 'absolute'
    },
    smallCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#93ebb6',
        top: 0,
        right: 10,
        position: 'absolute',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: '#93ebb6',
        shadowOpacity: 0.6,
        shadowRadius: 8.0,
    },
    smallCircleSecond: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#93ebb6',
        top: 8,
        right: -4,

        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: '#93ebb6',
        shadowOpacity: 0.6,
        shadowRadius: 8.0,
        position: 'absolute'
    },
    iconStyle: {
        width: 36,
        height: 36
    },
    statusWrapper: {
        paddingTop: circle / 2,
        marginTop: 25
    },
    statusText: {
        fontSize: 21,
        color: '#69E49A'
    },
    responseWrapper: {
        marginTop: 15,
        paddingBottom: 40
    },
    responseText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#5A5A5A',
        lineHeight: 30,
        paddingHorizontal: 10,
    },
    buttonStyle: {
        marginTop: 'auto',
        marginBottom: 20,
        backgroundColor: '#93ebb6',
        paddingVertical: 7,
        paddingHorizontal: 32,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff'
    }
};

