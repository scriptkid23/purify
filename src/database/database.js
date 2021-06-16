import Realm from 'realm';
export const SCHEMA="list";
export const LISTDB={
    name:SCHEMA,
    primaryKey:'id',
    properties:{
    id:'int',
    value:{type:'string',indexed:true},
    done:{type:'bool',default:false},
}
};
const databaseOptions={
    path:'list.realm',
    schema:[LISTDB],
    schemaVersion:0,
};
export const insertObject  =newTodoList => new Promise((resolve,reject)=>{
Realm.open(databaseOptions).then(realm=>{
    realm.write(()=>{
        realm.create(SCHEMA,newTodoList);
        resolve(newTodoList);
    });
}).catch((error)=>reject(error));
});
export const UpDateObJect =TodoList=> new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
let Update=realm.objectForPrimaryKey(SCHEMA,TodoList.id);
Update.value=TodoList.value;
resolve();
        });
    }).catch((error)=>reject(error));;
});
export const queryALLTodoList=()=> new Promise((resolve,reject)=>{
  
    Realm.open(databaseOptions).then(realm=>{
        let allList=realm.objects(SCHEMA);
        resolve(allList);
    }).catch((error)=>{
        reject(error);
    });
})
export const deleteTodoList=todoListID => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let deleTodoList =realm.objectForPrimaryKey(SCHEMA,todoListID);
            realm.delete(deleTodoList);
        });
    }).catch((error)=>reject(error));;
});
export const Deleteall=()=> new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let AllList=realm.objects(SCHEMA);
            realm.delete(AllList);
            resolve();
        })
    }).catch((error)=>reject(error));
})
export default new Realm(databaseOptions);