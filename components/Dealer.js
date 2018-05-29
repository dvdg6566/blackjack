import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export class Dealer extends React.Component{

	render = () =>{
		return (
			<View style={{flex:2}}>
				<Image source={require('./img/Dealer.png')} style={{height:150,width:160}}/>
			</View>
     	)
	}
}

export default Dealer
