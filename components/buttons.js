import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export class Buttons extends React.Component{

	state={}


	render = () => {
		return(
			<View style={styles.container}>
				<TouchableOpacity 
				style={styles.draw}
				onPress={this.props.draw}
				>
				<Text style={{fontSize:40,color:'black'}}>     Draw</Text>

				</TouchableOpacity>
				
				<TouchableOpacity 
				style={styles.fold}
				onPress={this.props.fold}
				>
				<Text style={{fontSize:40,color:'white'}}>    Stand</Text>
				</TouchableOpacity>

			</View>
		)
	}
}

export default Buttons

const styles = StyleSheet.create({
	draw:{
		height:60,
		backgroundColor:'#990000',
		flex:1,
	},fold:{
		height:60,
		backgroundColor:'#660000',
		flex:1,
	},
	container:{
		flex:2,
		flexDirection:'row'
	}
})