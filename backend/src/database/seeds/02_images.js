/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('images').del()
  await knex('images').insert([
    {id: "06ee65f2e4e34dc9319c7a30-teste1.jpg",
     name: "teste1.jpg",
     size: 17584, 
     key: "850e38c67dfb8c3a179cd7961d87a3f0-teste1.jpg",
     url: "https://imagensjosinaldo.s3.amazonaws.com/850e38c67dfb8c3a179cd7961d87a3f0-teste1.jpg"
    },
    {id: "6b62ad87b17d9192712e77ee-teste2.png",
     name: "teste2.png",
     size: 1117408, 
     key: "edf6ab66ce61e281a80485126401799f-teste2.png",
     url: "https://imagensjosinaldo.s3.amazonaws.com/edf6ab66ce61e281a80485126401799f-teste2.png"
    },
    {id:"66ed707ee37be5b8a0974901-teste3.png",
     name:"teste3.png",
     size:81822, 
     key: "5edd4b73de8ab399eb29e52428a1bd64-teste3.png",
     url: "https://imagensjosinaldo.s3.amazonaws.com/5edd4b73de8ab399eb29e52428a1bd64-teste3.png"
    },
    {id:"95686a01ae5211fbec86cb54-opclient_logo.png",
     name:"opclient_logo.png",
     size:1904, 
     key: "fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png",
     url: "https://imagensjosinaldo.s3.amazonaws.com/fbf3c3a12fc9044b5920b7b55433cb72-opclient_logo.png"
    },
    
  ]);
};
