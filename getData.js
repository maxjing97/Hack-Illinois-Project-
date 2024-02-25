// api key: AIzaSyCpsTND0xQbp5xb44bs2F2v-GWaYsb4DAI
// custom search engine ID: e4d582333695544f8

import axios from 'axios';

const api_key = "AIzaSyCpsTND0xQbp5xb44bs2F2v-GWaYsb4DAI";
const engine_id = "e4d582333695544f8";


//function to search the json object returned. Returns an array of matching restaurant objects.
export function search (searchString) {
  const query = searchString.toLowerCase().trim(); //makes the search string actually used all lowercase and removed of trailing or leading spaces.
  let results = []; //initializes a results array;

  var apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${api_key}&cx=${engine_id}`;
  axios.get(apiUrl).then(response =>{
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })

  return results;
}


  // //loop to travese the JSON array of restaurant objects and return matching restaurants by name or cuisine type
  // for (let i = 0; i < RestaurantList.length; i++) {
  //   let restaurantName = RestaurantList[i].Name.toLowerCase().trim();   //stores the name string of each Restaurant.
  //   let restaurantCuisine = RestaurantList[i].Cuisine.toLowerCase().trim(); //stores the cuisine string of each Restaurant.

  //   //add all restaurant objects that contain the search string in the name or cuisine.
  //   if(restaurantName.includes(query) || restaurantCuisine.includes(query)) {
  //     results.push(RestaurantList[i]);
  //   }
  // }


  // //sorts alphabetically by first letter in name
  // results.sort(function(a,b) {
  //   return a.Name.charCodeAt(0) - b.Name.charCodeAt(0);
  // });


  // return results; //returns the list of restaurant objects
