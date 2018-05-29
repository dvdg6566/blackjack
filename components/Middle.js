import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

export class Middle extends React.Component{

	render = () => {
		return (
		  <View style={{backgroundColor:'#4d4d4d',flex:1}}>
		  	<Text style={{color:'white',fontSize:20}}>
		  		{this.props.text}
		  	</Text>
		  </View>
		)
	}
}

export default Middle