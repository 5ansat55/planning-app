import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('places.db');

// Initializing Database if database is exist or not
export const init = () => {
  const promise = new Promise((resolve,reject)=>{
    db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title  TEXT NOT NULL,imageUri TEXT NOT NULL, address TEXT NOT NULL,lat REAL NOT NULL, lng REAL NOT NULL);',
          [],
          ()=>{
              resolve();
          },
          (_ , err)=>{
              reject(err);
          }
        );
      });
  }) 
return promise;
};
