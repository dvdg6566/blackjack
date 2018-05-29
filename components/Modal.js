import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';

export class CModal extends React.Component{

	state={
		text:"",
		arr:[],
	}

	export = () => {
		let e = Number(this.state.text)
		if (e >= 20 && e <= 26){
			this.update()
		}else{
			this.rng()
		}
	}

	componentDidMount(){
		for (var i = 500; i >= 0; i--){
			this.Random()
		}
	}
 
 	Random = () => {
	    fetch("https://www.random.org/integers/?num=1&min=20&max=26&col=1&base=10&format=plain&rnd=new")
	    .then(res => res.json())
	    .then(res => {
	        this.state.arr.push(res)
	      }
	    ).catch(() => {
	    	let x = 20+Math.floor(Math.random()*7)
	    	this.state.arr.push(x)
	    })
	  }

	rng = () => { 
		x = this.state.arr[this.state.arr.length-1]
		this.state.arr.pop()
		this.setState({text:String(x)})
	}

	update = () =>{
		this.props.update(Number(this.state.text))
		this.setState({text:""})
	}

	render = () =>{
		return (
		  <Modal
		    visible={this.props.state}
		    animationType={'fade'}
		  >
		  <View style={{flexDirection:'column', flex:1,backgroundColor:'#007400'}}>
		  		<Text style={styles.hold}></Text>
		  		<TextInput
		          placeholder="Bust Score"
		          onChangeText={(txt) => this.setState({text:txt})}
		          value={this.state.text}
		          style={styles.txt}
		        />
		        <TouchableOpacity
		          style = {styles.btn}
		          onPress={this.export}
		        >
		        <Text style={{color:'white', fontSize:32}}>                 Set Score</Text>
		        </TouchableOpacity>
		        <TouchableOpacity
		          style = {{flex:1,borderWidth:1,backgroundColor:'#6d6d6d',height:60,flexDirection:'row'}}
		          onPress={this.rng}
		        >
		        <Text style={{color:'white', fontSize:32}}>                 Random</Text>
		        </TouchableOpacity>	
		        <Text style={styles.hold}></Text>
		  </View>
			  
		  </Modal>
     	)
	}
}

const styles = StyleSheet.create({

	txt:{
	    fontSize:50,
	    flex:1,
	    backgroundColor:'#990000',
	},
    btn:{
    	flex:1,
    	borderWidth:1,
    	backgroundColor:'#4d4d4d',
    	height:60,
    	flexDirection:'row'
  	},
  	hold:{
		flex:5,
		color:'#007400',
	},
	tmp:{
		flex:2,
		backgroundColor:'#007400',
		borderTopColor:'#007400',
	}

});

export default CModal