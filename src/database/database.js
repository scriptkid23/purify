import Realm from 'realm';
export const SCHEMA = 'list';
export const LISTDB = {
  name: SCHEMA,
  primaryKey: 'id',
  properties: {
    id: 'int',
    temperature: {type: 'string', indexed: true},
    done: {type: 'bool', default: false},
    humidity: {type: 'string', indexed: true},
    timestamp: {type: 'string', indexed: true},
  },
};
const databaseOptions = {
  path: 'list.realm',
  schema: [LISTDB],
  schemaVersion: 0,
};
export const insertObject = newTodoList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(SCHEMA, newTodoList);
          resolve(newTodoList);
        });
      })
      .catch(error => reject(error));
  });
export const UpDateObJect = TodoList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let Update = realm.objectForPrimaryKey(SCHEMA, TodoList.id);
          Update.value = TodoList.value;
          resolve();
        });
      })
      .catch(error => reject(error));
  });
export const queryALLTodoList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        let allList = realm.objects(SCHEMA);
        let newlist = allList.filtered('done=false');
        resolve(newlist);
      })
      .catch(error => {
        reject(error);
      });
  });
export const deleteTodoList = todoListID =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deleTodoList = realm.objectForPrimaryKey(SCHEMA, todoListID);
          realm.delete(deleTodoList);
        });
      })
      .catch(error => reject(error));
  });
export const Deleteall = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let AllList = realm.objects(SCHEMA);
          AllList[0].done = true;
          resolve();
        });
      })
      .catch(error => reject(error));
  });
export default new Realm(databaseOptions);
