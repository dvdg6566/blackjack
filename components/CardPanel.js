import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Card} from './Card.js'

export class CardPanel extends React.Component{

	state = {
		key:0,
	}

	res = () => {
		let cnt = 1
		let a = this.props.arr.map((e)=>e)

		if (this.props.dlr === 1 && this.props.gvr === false){
			tp = a[0]
			a = a.map((e)=>0)
			a[0] = tp
		}

		if (a.length <= 3){
			a.push(-1)
			a.unshift(-1)
		}
			
		return(
			<View style={styles.container}>
				{
					a.map(e => {
						{cnt = cnt+1}
						return(<Card index={e} key={cnt}> </Card>)
					}
				)
			}
			</View>
		)
	}

	render = () => {

		return(
			<View style={styles.container}>
			{this.res()}
			</View>
		)
	}
}

export default CardPanel

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#990000',
		flex:6,
		flexDirection:'row',
		alignItems:'flex-start',
	}
})
