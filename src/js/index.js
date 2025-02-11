import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from './views/base'
//Global state of app
//Search object
//Current recipe object
//shopping list object
//liked recipes 
const state = {};

const controlSearch = async () => {
    //1) Get query from view
    const query = searchView.getInput(); //TODO
 

    if(query) {
        //2. new serach object and add to state
        state.search  = new Search(query);

        //3. Prepare UI for results 
        searchView.clearInput();
        

        //4.Search for UI
        await state.search.getResults();

        //5. Render results on UI
        searchView.renderResults(state.search.result);

    }
}

elements.searchForm.addEventListener('submit', e=> {
    e.preventDefault();
    controlSearch();
});



