import React, { Component } from 'react';
import{ AppRegistry, Image, Text, View} from 'react-native'



export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return(
  		<View style={{flex: 1, backgroundColor: 'white', height: 180, flexDirection: 'column', marginLeft: 8, marginRight: 8, marginTop: 8, marginBottom: 2}}>
  			<Image style={{height: null, width: null, flex: 1}} source={require('./school.jpg')}>
  				<View style={{flexDirection: 'row'}}>
  					<View style={{flex: 3, height: 108, justifyContent: 'flex-end'}}>
  						<Text style={{color: 'white', fontSize: 40, textAlign: 'left', marginLeft: 15, marginBottom: 8, fontWeight: 'bold'}}>{this.props.surveyTitle}</Text>
  					</View>

  					<View style={{flex: 1, height: 36, justifyContent: 'center', backgroundColor: '#16a085', borderBottomLeftRadius: 50}}>
  						<Text style={{color: '#e9e9e9', fontSize: 14, textAlign: 'center'}}>{this.props.length}</Text>
  					</View>
  				</View>
  			</Image>
  			<View style={{height: 72, flexDirection: 'row'}}>
  				<View style={{flex: 12, marginTop: 15, marginLeft: 15, marginRight: 15}}>
  					<Text style={{color: '#9b9b9b', textAlign: 'justify', fontSize: 10}}>{this.props.descript}</Text>
  				</View>
  				<View style={{flex: 8, borderLeftColor: '#E9E9E9', borderLeftWidth: 2, justifyContent: 'center'}}>
  					<Text style={{color: '#9b9b9b', textAlign: 'center', fontSize: 10}}>Results available in</Text>
  					<Text style={{color: '#16a085', textAlign: 'center', fontSize: 18}}>{this.props.timeTilResults}</Text>
  				</View>
  				<View style={{flex: 5, borderLeftColor: '#E9E9E9', borderLeftWidth: 2, justifyContent: 'center'}}>
  					<Text style={{color: '#16a085', textAlign: 'center', fontSize: 24}}>{this.props.points}</Text>
  					<Text style={{color: '#9b9b9b', textAlign: 'center', fontSize: 10}}>{this.props.whenPublished}</Text>
  				</View>
  			</View>
  		</View>
  );}

}
