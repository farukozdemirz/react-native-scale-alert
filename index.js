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
                color = this.props.successColor ? this.props.successColor : '#93ebb6';
                break;
            case 'error':
                color = this.props.errorColor ? this.props.errorColor : '#E94141';
                break;
            case 'warning':
                color = this.props.warningColor ? this.props.warningColor : '#FFB703';
                break;
            case 'info':
                color = this.props.infoColor ? this.props.infoColor : '#34C4FC';
                break;
            default:
                break;
        }
        return color;
    }

    renderIcon = (status) => {
        var icon;

        switch (status) {
            case 'success':
                icon = require('./src/img/check.png');
                break;
            case 'error':
                icon = require('./src/img/close-cross.png');
                break;
            case 'warning':
                icon = require('./src/img/warning.png');
                break;
            case 'info':
                icon = require('./src/img/info.png');
                break; x
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
        const { titleStyle, subTitleStyle, title, subTitle, showButton, status } = this.props;
        const { container, alertWrapper, circleStyle, smallCircle, smallCircleSecond, iconStyle, statusWrapper, statusText, responseWrapper, responseText, buttonStyle, buttonText } = Styles;
        return (
            <View pointerEvents='box-none' style={container}>
                <Animated.View style={[alertWrapper, this.props.cardStyle, {
                    transform: [{ scale: scale }],
                    opacity
                }]}>
                    <View style={[circleStyle, {
                        backgroundColor: this.alertColor(status),
                        shadowColor: this.alertColor(status),
                    }]}>
                        <View style={[smallCircle, {
                            backgroundColor: this.alertColor(status),
                            shadowColor: this.alertColor(status),
                        }]} />
                        <View style={[smallCircleSecond, {
                            backgroundColor: this.alertColor(status),
                            shadowColor: this.alertColor(status),
                        }]} />
                        <Image style={iconStyle} source={this.renderIcon(status)} />
                    </View>
                    {<View style={statusWrapper}>
                        <Text style={[statusText, titleStyle, {
                            color: this.alertColor(status),
                        }]}>
                            {title}
                        </Text>
                    </View>}
                    <View style={responseWrapper}>
                        <Text style={[responseText, subTitleStyle]}>
                            {subTitle}
                        </Text>
                    </View>
                    {showButton && <TouchableOpacity onPress={this.callBackFunc} activeOpacity={0.8} style={[buttonStyle, {
                        backgroundColor: this.alertColor(status),
                    }]}>
                        <Text style={buttonText}>
                            Ok
                        </Text>
                    </TouchableOpacity>}
                </Animated.View>
            </View>
        );
    }
}


export default Alert;
