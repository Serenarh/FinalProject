/**
 * TODO: All interactions with external data should be managed from here.
 * You probably need to 'import' stuff from 'db' if using a database.
 * Then you can create methods such as 'index,' 'create(payload),' etc.
 */
import db from "./db";

export default {
  async index() {
    // https://firebase.google.com/docs/firestore/query-data/get-data
    const querySnapshot = await db.collection("books").get();

    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0#docs
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  // More generically, the PARAMETER might be called 'payload'
  async create(book) {
    // https://firebase.google.com/docs/firestore/manage-data/add-data
    return db.collection("books").add(book);
  },
};
