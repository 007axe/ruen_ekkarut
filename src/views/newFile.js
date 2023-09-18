import { db } from '../firebase/init';

export default (await import('vue')).defineComponent({
setup() {
return {
products: []
};
},
created() {
db.collection('products').get().then(QuerySnapshot => {
QuerySnapshot.forEach(doc => {
console.log(doc);
const data = {};
});
});
}
});
