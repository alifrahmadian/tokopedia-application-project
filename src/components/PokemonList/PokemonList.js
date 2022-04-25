import React from "react";

import PokemonListCard from "./PokemonListCard";
import "./PokemonList.css";

const pokemon = [
  {
    id: 1,
    name: "Pikachu",
    owned: 0,
    desc: "Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, and brown eyes. Each cheek is a red circle that contains a pouch for electricity storage. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its lightning bolt-shaped tail is a patch of brown fur. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs.",
  },
  {
    id: 2,
    name: "Charmander",
    owned: 0,
    desc: "Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain.",
  },
  {
    id: 3,
    name: "Bulbasaur",
    owned: 0,
    desc: "Bulbasaur is a small, quadrupedal amphibian Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
  },
  {
    id: 4,
    name: "Rattata",
    owned: 0,
    desc: "Rattata is a small, quadrupedal rodent Pokémon. It has purple fur with a cream-colored face, paws, and underbelly. It has narrow eyes containing white sclera and pupil with red irises, rounded ears with cream-colored insides, and a single whisker on each cheek. Its long tail is tightly curled at the end. Its most notable feature is its large teeth. Like most rodents, its teeth grow continuously throughout its life and must be worn down by gnawing. A female Rattata will have shorter whiskers and lighter fur.",
  },
  {
    id: 5,
    name: "Squirtle",
    owned: 0,
    desc: "Squirtle is a small reptilian Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.",
  },
  {
    id: 6,
    name: "Clefairy",
    owned: 0,
    desc: "Clefairy is a bipedal, pink Pokémon with a chubby, vaguely star-shaped body. A small, pointed tooth protrudes from the upper left corner of its mouth. It has wrinkles beside its black, oval eyes, a single dark pink oval marking on each cheek, and large, pointed ears with brown tips. A tuft of fur curls over its forehead, much like its large, upward-curling tail. Each stocky arm has two small claws and a thumb on each hand and both feet have a single toenail. There is a pair of tiny, butterfly-shaped wings on its back. Though incapable of flight, Clefairy's wings can store moonlight and allow it to float.",
  },
  {
    id: 7,
    name: "Psyduck",
    owned: 0,
    desc: "Psyduck is a yellow Pokémon resembling a duck or a bipedal platypus. On top of its head are three thick strands of black hair, and it has a wide, flat cream-colored beak. Psyduck's eyes seem vacant and have tiny pupils. Its legs and tail are stubby, and it has cream-colored webbed feet. There are three claws on each of its hands. Psyduck is constantly stunned by its headache and is unable to think very clearly. It usually stands immobile, trying to calm its headache. However, when its headache becomes too severe, Psyduck releases tension in the form of strong psychic powers. The use of these powers produces brain waves identical to those seen in sleepers, and the Pokémon is unable to recall these episodes. Psyduck lives in freshwater lakes and small ponds, but can be seen in rivers in tropical areas as shown in Pokémon Snap.",
  },
  {
    id: 8,
    name: "Pidgey",
    owned: 0,
    desc: "Pidgey is a small, plump-bodied avian Pokémon. It is primarily brown with a cream-colored face, underside, and flight feathers. On top of its head is a short crest of three tufts. The center crest feathers are brown and the outer two tufts are cream-colored. Just under its crest are its narrow eyes which have white sclera and pupil along with its black irises. Angular black marking extend from behind its eyes and continue down its cheeks. It has a short, stubby beak and feet with two toes in front and one in back. Both its beak and feet are a grayish-pink. It has a short, brown tail made of three feathers.",
  },
  {
    id: 9,
    name: "Jigglypuff",
    owned: 0,
    desc: "Jigglypuff is a pink Pokémon with a spherical body. It has pointed ears with black insides and large, blue eyes. It has small, stubby arms and slightly longer feet. On top of its head is a curled tuft of fur. Its body is filled with air and, as seen in Pokémon Stadium, Jigglypuff can deflate until it is flat. It is able to float by drawing extra air into its body, as demonstrated in Super Smash Bros.",
  },
  {
    id: 10,
    name: "Meowth",
    owned: 0,
    desc: "Meowth is a small, feline Pokémon with cream-colored fur that turns brown at the tips of its hind paws and tail. Its ovoid head features four prominent whiskers, wide eyes with slit pupils, two pointed teeth in the upper jaw, and a gold koban coin embedded in its forehead. Its ears are black with brown interiors and are flanked with an additional pair of long whiskers. Meowth is a quadruped with the ability to walk on its hind legs; while the games always depict Meowth on two legs, the anime states that Meowth normally walks on all fours. It can freely manipulate its claws, retracting them when it wants to move silently. The tip of its tail curls tightly.",
  },
  {
    id: 11,
    name: "Rayquaza",
    owned: 0,
    desc: "Rayquaza is a large, green, serpentine Pokémon that also resembles a missile. It has red-tipped, rudder-like wings on its shoulders and down its body, and similarly patterned fins on the tip of its tail. Yellow ring-like symbols run across the length of Rayquaza's body and it has an additional yellow ring on top of its head. Rayquaza has two limbs with three-clawed hands, and two long, flat, horn-like structures on its head, with two shorter horns along its jawline. It has small, yellow eyes with black pupils, prominent pink gums, and two discernible fangs in its upper jaw.",
  },
  {
    id: 12,
    name: "Arceus",
    owned: 0,
    desc: "Arceus is a white equine Pokémon resembling a qilin or centaur with a gray, vertically-striated underside. The striated pattern has similar recurrences on the underside of its mane, tail, and face. Its four pointed feet are tipped with gold hooves. Its long mane juts away from its head, and its face is gray, with green eyes and red pupils, and a green circular pattern below its eyes. Arceus also has a streak of gold coloration on its head, and ears that point upward. Its neck is fairly long, with two pairs of extrusions to the sides, and a flap-like feature on the neck's underside that is colored white like much of the body. Arceus also has a golden cross-like wheel attached to its body by its round abdomen, which changes color along with its eyes and hooves based on its current type, which depends on the Plate or type-specific Z-Crystal that it wields. The wheel also has four jewels attached to it. The pattern of striated gray of Arceus's underbelly resumes past Arceus's waist. Its limbs have gray undersides and extrusions at the tops of the legs. Arceus's tail is fairly like its mane in terms of shape and coloration.",
  },
  {
    id: 13,
    name: "Snorlax",
    owned: 0,
    desc: "Snorlax is a huge, bipedal, dark blue-green Pokémon with a cream-colored face, belly, and feet. Its body is composed of mostly its belly, as its limbs are comparatively small. Its head is large with small, pointed ears and two pointed teeth protruding from its lower jaw. It has round feet, which both have three claws and a circular brown paw pad, and short arms with five claws on each hand. Snorlax's bulk makes it the heaviest Normal type.",
  },
  {
    id: 14,
    name: "Articuno",
    owned: 0,
    desc: "Articuno is a large avian Pokémon with predominantly sky blue plumage and wings said to be made of ice. On its forehead is a crest that consists of three, darker blue rhombus-shaped feathers. It has circular red eyes, a short gray beak, and long, thin gray legs. Each foot has three forward-facing toes and one that faces backward. On its chest is a mass of pale blue, downy feathers. Its long, streamer-like tail is longer than its body and the same shade of blue as its crest.",
  },
  {
    id: 15,
    name: "Ditto",
    owned: 0,
    desc: 'In its natural state, Ditto is a light-purple or pink blob-like Pokémon with vestigial facial features. It is often referred to as amorphous, but has a relatively consistent appearance in official artwork, including two small nubs on its "head", a few soft lumps at its base, and two pseudopod-like protrusions in place of arms. The face consists of beady eyes and a simple mouth; almost always pulled into a smile.',
  },
];

const pokemonLocalStorage = JSON.parse(localStorage.getItem("pokemon"));
const myPokemonListStorage = JSON.parse(localStorage.getItem("myPokemonList"));

if (pokemonLocalStorage === null) {
  localStorage.setItem("pokemon", JSON.stringify(pokemon));
}

if (myPokemonListStorage === null) {
  localStorage.setItem("myPokemonList", JSON.stringify([]));
}

// console.log(pokemonLocalStorage.find((data) => data.name === "Pikachu"));
export function getPokemonData(id) {
  return pokemon.find((pokemonLocalStorage) => pokemonLocalStorage.id === id);
}

function PokemonList() {
  return (
    <div className="pokemon-lists">
      <h2>Pokemon Lists</h2>
      <PokemonListCard pokemonArr={pokemonLocalStorage} />
    </div>
  );
}

export default PokemonList;
