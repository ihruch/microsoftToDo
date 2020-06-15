import { db }  from './firebase';

export const getCollectionData = (collections) => {
   return  db.collection(collections)
        .get()
        .then( snapshot =>  {
            const items = snapshot.docs.map( doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return items
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
}