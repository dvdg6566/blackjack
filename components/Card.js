import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Card extends React.Component{

	state={size:2}

	componentDidMount = () => {
		if (this.props.index === -2){
			this.setState({size:1})
		}
	}

	res = (a) => {
		if (a === -1)return (<Image source={require('./img/-1.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 0)return (<Image source={require('./img/0.jpg')}  style={{height:100,width:70}}/>)
	 	else if (a === 1)return (<Image source={require('./img/1.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 2)return (<Image source={require('./img/2.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 3)return (<Image source={require('./img/3.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 4)return (<Image source={require('./img/4.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 5)return (<Image source={require('./img/5.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 6)return (<Image source={require('./img/6.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 7)return (<Image source={require('./img/7.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 8)return (<Image source={require('./img/8.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 9)return (<Image source={require('./img/9.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 10)return (<Image source={require('./img/10.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 11)return (<Image source={require('./img/11.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 12)return (<Image source={require('./img/12.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 13)return (<Image source={require('./img/13.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 14)return (<Image source={require('./img/14.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 15)return (<Image source={require('./img/15.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 16)return (<Image source={require('./img/16.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 17)return (<Image source={require('./img/17.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 18)return (<Image source={require('./img/18.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 19)return (<Image source={require('./img/19.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 20)return (<Image source={require('./img/20.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 21)return (<Image source={require('./img/21.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 22)return (<Image source={require('./img/22.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 23)return (<Image source={require('./img/23.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 24)return (<Image source={require('./img/24.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 25)return (<Image source={require('./img/25.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 26)return (<Image source={require('./img/26.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 27)return (<Image source={require('./img/27.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 28)return (<Image source={require('./img/28.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 29)return (<Image source={require('./img/29.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 30)return (<Image source={require('./img/30.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 31)return (<Image source={require('./img/31.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 32)return (<Image source={require('./img/32.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 33)return (<Image source={require('./img/33.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 34)return (<Image source={require('./img/34.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 35)return (<Image source={require('./img/35.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 36)return (<Image source={require('./img/36.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 37)return (<Image source={require('./img/37.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 38)return (<Image source={require('./img/38.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 39)return (<Image source={require('./img/39.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 40)return (<Image source={require('./img/40.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 41)return (<Image source={require('./img/41.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 42)return (<Image source={require('./img/42.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 43)return (<Image source={require('./img/43.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 44)return (<Image source={require('./img/44.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 45)return (<Image source={require('./img/45.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 46)return (<Image source={require('./img/46.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 47)return (<Image source={require('./img/47.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 48)return (<Image source={require('./img/48.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 49)return (<Image source={require('./img/49.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 50)return (<Image source={require('./img/50.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 51)return (<Image source={require('./img/51.jpg')}  style={{height:100,width:70}}/>)
		else if (a === 52)return (<Image source={require('./img/52.jpg')}  style={{height:100,width:70}}/>)
	}

	render(){
		return(
			<View style={{flex:1}}>
				{this.res(this.props.index)}
			</View>
		)
	}
}

export default Card