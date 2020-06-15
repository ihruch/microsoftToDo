import { db }  from './firebase';

export const getCollectionData = (collectionName) => {
    const collection =  db.collection(collectionName);

    return (query = () => collection) => {
        return query(collection)
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
    }};
    // return  db.collection(collections)
    //     .get()
    //     .then( snapshot =>  {
    //         const items = snapshot.docs.map( doc => ({
    //             id: doc.id,
    //             ...doc.data()
    //         }));
    //         return items
    //     })
    //     .catch(error => {
    //         console.log("Error getting documents: ", error);
    //     });
