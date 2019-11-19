import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { AlertStyles } from './src/Styles';

const Styles = AlertStyles;

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.animatedValue = new Animated.Value(0)
    }


    componentDidUpdate = (prevProps, prevState) => {
        Animated.timing(this.animatedValue, {
            toValue: this.props.visible ? 1 : 0,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.bezier(.17, .67, .15, 1.24)
        }).start();
    };


    alertColor = (status) => {
        var color;
        switch (status) {
            case 'success':
                color = this.props.circleColor ? this.props.circleColor : '#93ebb6';
                break;
            case 'error':
                color = this.props.circleColor ? this.props.circleColor : '#E94141';
                break;
            case 'warning':
                color = this.props.circleColor ? this.props.circleColor : '#FFB703';
                break;
            case 'info':
                color = this.props.circleColor ? this.props.circleColor : '#34C4FC';
                break;
            default:
                break;
        }
        return color;
    }

    renderIcon = (status) => {
        var icon;
        const { propIcon } = this.props;

        switch (status) {
            case 'success':
                icon = propIcon ? propIcon : require('./src/img/check.png');
                break;
            case 'error':
                icon = propIcon ? propIcon : require('./src/img/close-cross.png');
                break;
            case 'warning':
                icon = propIcon ? propIcon : require('./src/img/warning.png');
                break;
            case 'info':
                icon = propIcon ? propIcon : require('./src/img/info.png');
                break;
            default:
                break;
        }
        return icon;
    }

    callBackFunc = () => {
        this.props.onConfirmPressed && this.props.onConfirmPressed()
    }

    render() {
        const scale = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1,]
        })
        const { titleStyle, messageStyle, title, message, showButton, status, visible, overlay, overlayColor, buttonText, confirmButtonStyle, confirmButtonTextStyle, circleColor } = this.props;
        const { container, alertWrapper, circleStyle, smallCircle, smallCircleSecond, iconStyle, statusWrapper, statusText, responseWrapper, responseText, buttonStyle, } = Styles;
        return (
            <View pointerEvents='box-none' style={[container, {
                backgroundColor: visible && overlay && overlayColor
            }]}>
                <Animated.View style={[alertWrapper, this.props.containerStyle, {
                    transform: [{ scale: scale }],
                    opacity
                }]}>
                    <View style={[circleStyle, circleColor, {
                        backgroundColor: this.alertColor(status),
                        shadowColor: this.alertColor(status),
                    }]}>
                        <View style={[smallCircle, circleColor, {
                            backgroundColor: this.alertColor(status),
                            shadowColor: this.alertColor(status),
                        }]} />
                        <View style={[smallCircleSecond, circleColor, {
                            backgroundColor: this.alertColor(status),
                            shadowColor: this.alertColor(status),
                        }]} />
                        <Image style={iconStyle} source={this.renderIcon(status)} />
                    </View>
                    {<View style={statusWrapper}>
                        <Text style={[statusText, titleStyle, {
                            color: this.alertColor(status),
                        }]}>
                            {title ? title : 'Title'}
                        </Text>
                    </View>}
                    <View style={responseWrapper}>
                        <Text style={[responseText, messageStyle]}>
                            {message ? message : 'Lorem ipsum dolor sit amet'}
                        </Text>
                    </View>
                    {showButton && <TouchableOpacity onPress={this.callBackFunc} activeOpacity={0.8} style={[buttonStyle, confirmButtonStyle, {
                        backgroundColor: this.alertColor(status),
                    }]}>
                        <Text style={[Styles.buttonText, {
                            confirmButtonTextStyle
                        }]}>
                            {buttonText ? buttonText : 'Ok'}
                        </Text>
                    </TouchableOpacity>}
                </Animated.View>
            </View>
        );
    }
}


export default Alert;
