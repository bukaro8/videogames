const rawg = require('../apiCreator/rawg'); //this is the axios.create
const axios = require('axios');
const { Platform } = require('../db.js'); //bring the model
const { API_KEY } = process.env;

// const platformAdapter=async()=>{
//   try {
//     const result= await rawg.get(`/platforms?key=${API_KEY}`)
//     const data= await result.data
//     const pagesPlatforms=1

//     const apiInfo=data.results.map(el=>{
//       return{
//         id:el.id,
//         name:el.name
//       }
//     })
//   } catch (error) {

//   }

// }

const platform = (req, res) => {
  console.log(req.params);
  res.send({ msg: 'platforms route' });
};
module.exports = platform;
