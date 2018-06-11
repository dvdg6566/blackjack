import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

export class EndGame extends React.Component{


	cvt = (a,bool) => {
		if (a === -1) {
			if (bool === true){
				return "Player Busted"
			}else{
				return "Dealer Busted"
			}
		}else{
			if (bool === true){
				return "Player's score: " + a
			}else{
				return "Dealer's score: " + a
			}
		}
	}

	map = () => {
		if (this.props.player === this.props.dealer){
			return ["      Draw","",80,80]
		} //OK

		else if (this.props.player === this.props.bust){
			return ["      You Win","    Blackjack",64,64]
		} //OK

		else if (this.props.dealer === this.props.bust){
			return ["      You Lose","  Dealer Blackjack",60,48]
		} //OK

		else if (this.props.player === -1){
			return ["    You Lose","      Busted",64,64]
		} // OK

		else if (this.props.dealer === -1){
			return ["     You Win","  Dealer Busted",64,54]
		}

		else if (this.props.player > this.props.dealer){
			return ["      You Win"," Higher Score",64,64]
		}

		else {
			return ["     You Lose","  Lower Score",64,64]
		} // OK
	}

	render = () =>{
		x = this.map()
		return (
		  <Modal
		    visible={this.props.state}
		    animationType={'slide'}
		  >
		  <View style={{flexDirection:'column', flex:1, backgroundColor:'#007400'}}>
		  		<Text style={styles.hold}></Text>
		  		<Text style={{flex:2,fontSize:x[2],color:'#DDDDDD',backgroundColor:'#007400'}}>{x[0]}</Text>
		  		<Text style={{flex:2,fontSize:x[3],color:'#DDDDDD',backgroundColor:'#007400'}}>{x[1]}</Text>
		  		<Text style={styles.hold}></Text>
		  		<Text style={styles.ply}>{this.cvt(this.props.player,true)}</Text>
		  		<Text style={styles.dlr}>{this.cvt(this.props.dealer,false)}</Text>
		  		<Text style={styles.hold}></Text>
		        <View style={{flex:2,flexDirection:'row'}}>
			        <TouchableOpacity
			          style = {styles.btn}
			          onPress={this.props.update}
			        >
			        <Text style={{fontSize:48,backgroundColor:'#009900',color:'white'}}>    New Game({this.props.bs})</Text>
			        </TouchableOpacity>
		        </View>
		        <View style={{flex:2,flexDirection:'row'}}>
			        <TouchableOpacity
			          style = {styles.btn}
			          onPress={this.props.restart}
			        >
			        <Text style={{fontSize:48,backgroundColor:'#004400',color:'white'}}>   Reset Bustscore</Text>
			        </TouchableOpacity>
		        </View>
		        
		  </View>
			  
		  </Modal>
     	)
	}
}

const styles = StyleSheet.create({

	txt:{
	    fontSize:28,
	    flex:1,
	    backgroundColor:'#007400',
	},
    btn:{
    	flex:3,
    	borderWidth:1,
    	backgroundColor:'black',
    	height:60,
  	},
  	hold:{
		flex:2,
		color:'white',
	},ply:{
		flex:2,
		backgroundColor:'#990000',
		fontSize:48,
		color:'#DDDDDD'
	},dlr:{
		flex:2,
		backgroundColor:'#660000',
		fontSize:48,
		color: '#DDDDDD'
	}


});

export default EndGame
