// src/routes/+page.js
export async function load({ fetch }) {
  try {
    const res = await fetch('http://localhost:5050/queryposts/');

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const feed = await res.json();


    let dataLists = [];

    if(feed["success"] == true){
      if(feed["data"] != null){
        dataLists = feed["data"];

        for (let i = 0; i < dataLists.length; i++) {
          
        }
      }
    }
    return { "data":dataLists, error: null };
  } catch (err) {
    return {
      feed: [],
      error: err.message
    };
  }
}
