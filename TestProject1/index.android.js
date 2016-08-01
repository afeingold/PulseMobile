import React, { Component } from 'react';
import{ AppRegistry, ScrollView, ListView, Image, Text, View, TouchableHighlight } from 'react-native';

import Card from './Card.js';

class PulseHomePage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => false});
    this.state = {
      dataSource: ds.cloneWithRows([
      	{img: './school.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "School House",
         length: "1m 20s"}, 

         {img: './northpark.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "North Park House",
         length: "1m 40s"},

         {img: './eastwheelock.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "East Wheelock House",
         length: "1m 30s"},

         {img: './allen.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "Allen House",
         length: "1m 00s"},

         {img: './west.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "West House",
         length: "1m 40s"},

         {img: './south.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "South House",
         length: "1m 40s"}

		]),
      ongoing: true,
      ongTextColor: "#16a085",
      ongBorderColor: "#16a085",
      comTextColor: "#9b9b9b",
      comBorderColor: "white"
    };
  }


  toggleView(ong) {
    this.setState({ongoing: ong});
    var ongTextColor = ong? "#16a085" : "#9b9b9b";
    var ongBorderColor = ong? "#16a085" : "white";
    var comTextColor = ong? "#9b9b9b" : "#16a085";
    var comBorderColor = ong? "white" : "#16a085";
    this.setState({
      ongTextColor: ongTextColor, 
      ongBorderColor: ongBorderColor,
      comTextColor: comTextColor,
      comBorderColor: comBorderColor
      })

    var datSo = ong? new ListView.DataSource({rowHasChanged: (r1, r2) => false}).cloneWithRows([
      	{img: './school.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "School House",
         length: "1m 20s"}, 

         {img: './northpark.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "North Park House",
         length: "1m 40s"},

         {img: './eastwheelock.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "East Wheelock House",
         length: "1m 30s"},

         {img: './allen.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "Allen House",
         length: "1m 00s"},

         {img: './west.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "West House",
         length: "1m 40s"},

         {img: './south.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "South House",
         length: "1m 40s"}

		]) : new ListView.DataSource({rowHasChanged: (r1, r2) => false}).cloneWithRows([
      	{img: './school.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "School House (Complete)",
         length: "1m 20s"}, 

         {img: './northpark.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "North Park House (Complete)",
         length: "1m 40s"},

         {img: './eastwheelock.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "East Wheelock House (Complete)",
         length: "1m 30s"},

         {img: './allen.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "Allen House (Complete)",
         length: "1m 00s"},

         {img: './west.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "West House (Complete)",
         length: "1m 40s"},

         {img: './south.jpg',
         descript: 'Hi I\'m a description. Would you like me to describe something of use? No? Great.',
         timeTilResults: "18:20:00",
         points: "+11",
         whenPublished: "1 day ago",
         surveyTitle: "South House (Complete)",
         length: "1m 40s"}

		]);


    this.setState({dataSource: datSo});

  }




  render() {
      return(
        <View style={{flex: 1}}>{/* Main wrapper for whole screen */}

          <View style={{backgroundColor: '#34495e', flexDirection: 'row'}}>{/* Wrapper for menu/points header */}

          		<View style={{flex: 1, height: 50, marginLeft: 7, justifyContent: 'center'}}>
              <Text style={{color: '#16a085', fontSize: 24, textAlign: 'left'}}>P</Text>
            </View>

            <View style={{flex: 1, height: 50, marginRight: 7, justifyContent: 'center'}}>
              <Text style={{color: '#e9e9e9', textAlign: 'right', fontSize: 24, textAlignVertical: 'center'}}>923</Text>
            </View>

          </View>


          <View style={{backgroundColor:'white',flexDirection:'row'}}>{/* Wrapper for ongoing/completed header */}

            
            <View style={{flex:1, height: 50, justifyContent: 'center', borderBottomColor: this.state.ongBorderColor, borderBottomWidth: 2}}>
            <TouchableHighlight onPress={() => this.toggleView(true)}>
              <Text style={{color: this.state.ongTextColor, fontSize: 16, textAlign: 'center'}}>ONGOING (148)</Text>
            </TouchableHighlight>
            </View>
            

            
            <View style={{flex:1, height: 50, justifyContent: 'center', borderBottomColor: this.state.comBorderColor, borderBottomWidth: 2}}>
            <TouchableHighlight onPress={() => this.toggleView(false)}>
              <Text style={{color: this.state.comTextColor, fontSize: 16, textAlign: 'center'}}>COMPLETED (5)</Text>
            </TouchableHighlight>
            </View>
            

          </View>

          <ListView style={{flex: 1, backgroundColor: '#c2bbc3'}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Card
                img={rowData.img}
                descript={rowData.descript}
                timeTilResults={rowData.timeTilResults}
                points={rowData.points}
                whenPublished={rowData.whenPublished}
                surveyTitle={rowData.surveyTitle}
                length={rowData.length} />} />


       
        
        </View>
    );
  }
}

/*
const ongoingCards = {
  <ListView style={{flex:1, backgroundColor: '#e9e9e9'}} dataSource={this.state.dataSource} renderRow={(rowData) => <Text style={{fontSize:24}}>{rowData}</Text>}/>



}
*/



AppRegistry.registerComponent(
  'TestProject1',
  () => PulseHomePage);







