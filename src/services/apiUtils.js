export async function fetchSingleCharacter(id){
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  const json = await res.json();

  return {
    id: json._id,
    name: json.name,
    image: json.image,
    quote: json.quote,
    personality: json.personality,
    species: json.species,
    skill: json.skill,
  };
}

export async function fetchAllCharacters(page){
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers?page=${page}&perPage=50`);
  const json = await res.json();

  return json.map((character) => {
    return {
      id: character._id,
      name: character.name,
      image: character.image,
      species: character.species,
    };
  });
}
