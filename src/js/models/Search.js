import axios from 'axios';




export default class Search {
    constructor (query) {
        this.query = query;
    }



 async getResults() {
    const key = '866f180d075649d8abdfe1f8ad46ca93';
    try{
   const res = await axios(`https://api.spoonacular.com/food/products/search?query=${this.query}&apiKey=866f180d075649d8abdfe1f8ad46ca93`);
   //console.log(res);
   this.result = res.data.products;
   //console.log(this.result);
    }
   catch (error){
     alert(error);
   }
}
}

