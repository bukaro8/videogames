const bringPlatform = async (data) => {
  const platformsArr = await data.platforms.map((ele) => ele.platform.name);
  return platformsArr;
};
const videogameObj = async (data) => {
  const platforms = await bringPlatform(data);
  return {
    id: data.id,
    name: data.name,
    description: description,
    released: data.released,
    rating: data.rating,
    createdInDb: data.createdInDb,
    background_image: data.background_image,
    platforms: platforms,
  };
};
module.exports = videogameObj;
