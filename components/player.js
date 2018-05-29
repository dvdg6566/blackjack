import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export class Player extends React.Component{

	render = () =>{
		return (
			<View style={{flex:2}}>
				<Image source={require('./img/You.png')} style={{height:150,width:160}}/>
			</View>
     	)
	}

}

export default Player
