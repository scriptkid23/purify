import React,{Component} from 'react';
import {View,FlatList,Text,TouchableOpacity,StyleSheet,Alert, PickerIOSComponent, Button} from 'react-native';
import {insertObject,queryALLTodoList,Deleteall} from '../components/database/database';
import realm from '../components/database/database';
import { List } from 'realm';
import NetInfo from "@react-native-community/netinfo";
class FlatListItem extends Component{
    render(){
        return(
<View style={{flex:1, backgroundColor:(this.props.index%2)?'':'lightblue',margin:2, borderRadius:10}} >
<Text style={{left:70}}>value : {this.props.item.value}</Text>
<Text  style={{left:70}}>ID : {this.props.item.id}</Text>
</View>
        );
    }
}
export default class TodoListComponent extends Component{
  
    constructor(props){
        super(props);
        this.state={
          
            todoLists:[]
        };
        this.reloadData();
    };
    
   
reloadData=()=>{
      
        queryALLTodoList().then((todoLists)=>{
        this.setState({todoLists});
      
      
       
    
      }).catch((error)=>{
    this.setState({todoLists:[]});
             console.log(error);
             return [];
    });
        console.log("reload data");
    };

    
DeleteAlll=()=>{
     Deleteall().then(()=>{
       this.setState({todoLists:[]})  
         console.log("xóa thành công");
        
     }).catch((error)=>{
         console.log(error);
     })
    };
    InserObjext=()=>{
        const newTodoList ={
            id:Math.floor(Date.now()/1000),
           value:"huydz11111111111111",
            done:false

        }
       insertObject(newTodoList).then().catch((error)=>{
             alert(error);
        });
        queryALLTodoList().then((todoLists)=>{
            this.setState({todoLists});
           
        
          }).catch((error)=>{
        this.setState({todoLists:[]});
                 console.log(error);
        });
    }
   
    render(){
        return (
            <View >
           
            <Button color="black" title="Thêm dữ liệu " onPress={this.InserObjext}></Button>
            <View style={{marginBottom: 10}}></View>
    <Button color="pink"  title="Xóa tất cả dữ liệu " onPress={this.DeleteAlll}></Button>
            
            <FlatList 
             keyExtractor={(item, index) => index.toString()}
                data={this.state.todoLists}
                renderItem={({item, index})=>{
                 
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
           
           </View>
            )
        }
    }
const styles=StyleSheet.create({
    cotainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        margin: 10,
    },flatLists:{
        flex:1,
        flexDirection:'column',
        height:50,
        width:50,
        color:'blue',
      
    }
})
