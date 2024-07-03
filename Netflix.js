let movies=[
    {
        Name:"Rangasthalam",
        // Director:"Sukumar",
        Rating:8.2,
        Poster: "https://th.bing.com/th/id/OIP.vwp53mwW1juA-mnSyvPN7gHaKL?w=202&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Description:"The film is set in 1980's rural India. Chittibabu, a pure and innocent guy with partial deafness, earns his livelihood by supplying water to agricultural lands in the fictional village of Rangasthalam."


    },

    {
        Name:"Mahanati",
        // Director:"Nag Ashwin",
        Rating:8.4,
        Poster:"https://th.bing.com/th/id/OIP.Wx1_ZuhruLPlkO8QN9q8LAHaNJ?w=115&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Description:"Mahanati is a 2018 Indian Telugu-language biographical drama film based on the life of actress Savitri. It is written and directed by Nag Ashwin, and produced by Priyanka Dutt under Vyjayanthi Movies and Swapna Cinema"
    },

    {
        Name:"RRR",
        // Director:"RajaMouli",
        Rating:7.8,
        Poster:'https://th.bing.com/th/id/OIP.bcxYkDOaVrpzTHEbvPYGJQHaKf?w=124&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"During the British Raj in 1920, Governor Scott Buxton and his wife Catherine visit a forest in Adilabad, where they abduct Malli, an artistically talented young girl from the Gond tribe. The tribe's guardian Komaram Bheem embarks for Delhi to rescue her, disguising himself as a Muslim named Akhtar. "

    }
    ,
    {
        Name:"Gaami",
        // Director:'Vidhyadhar',
        Rating:8.0,
        Poster:'https://th.bing.com/th/id/OIP.vSZ996sJRQSqUqIriy514AAAAA?w=131&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:'Gaami  is a 2024 Indian Telugu-language epic adventure thriller film written and directed by debutant Vidyadhar Kagita. The film features Vishwak Sen, Chandini Chowdary, Abhinaya, Harika Pedda and Mohammad Samad in primary roles.'

    }
    ,
    {
        Name:'Hridayam',
        // Director:'Vineeth Sreenivasan',
        Rating:8.1,
        Poster:'https://th.bing.com/th/id/OIP.1K5lRqAiN6Mhrq3V4erpWAHaLH?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:'Hridayam is a 2022 Malayalam romance movie about the life and colours of Arun Neelakandan, a wedding photographer who starts his own business.'

    },
    {
        Name:'Animal',
        // Director:'Sandeep Reddy Vanga',
        Rating:6.3,
        Poster:'https://th.bing.com/th/id/OIP.zn4ts0afKlvIET7IR-ZuwwHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"The hardened son of a powerful industrialist returns home after years abroad and vows to take bloody revenge on those threatening his father's life."

    },
    {
        Name:'Vikram',
        // Director:'Lokesh Kanagaraj',
        Rating:8.3,
        Poster:'https://m.media-amazon.com/images/M/MV5BMDRiOWNjYjUtMDI0ZC00MDMyLTkwZDItNTU5NWQ1NjEyNGYxXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_QL75_UX380_CR0,57,380,562_.jpg',
        Description:'A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.'

    },
    {
        Name:'Color Photo',
        // Director:"Sandeep Raj",
        Rating:'8.1',
        Poster:'https://m.media-amazon.com/images/M/MV5BZDRiYzhiOTAtZGU5My00MTE0LTkwZjAtM2JhOGM2MzA4NWFiXkEyXkFqcGdeQXVyMTI0MjU5MzUw._V1_QL75_UY562_CR91,0,380,562_.jpg',
        Description:'A tragic-comedy that is set in the 90s between two different personalities coming from different backgrounds that change their lives in a tale of love.'

    },
    {
        Name:'Ambajipeta Marriage Band',
        // Director:'Dushyanth',
        Rating:6.6,
        Poster:'https://th.bing.com/th/id/OIP._8iDHJTajE7daLHvZXVw-gHaE9?w=296&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:'In a small village during the early 2000s, happy twins Mallikarjuna and Padmavati find their lives changing on their 25th birthday.'

    },
    {
        Name:'Pushpa',
        // Director:'Sukumar',
        Rating:7.6,
        Poster:"https://th.bing.com/th/id/OIP.lpgBrtSlzMJqZCfy73AQZQAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Description:'A labourer rises through the ranks of a red sandal smuggling syndicate, making some powerful enemies in the process.'

    },
    {
        Name:'Bahubali',
        // Director:'Rajamouli',
        Rating:8.2,
        Poster:'https://th.bing.com/th/id/OIP.Zv8EB7mhjPY_W03p3rXoUwHaK-?w=123&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:'Amarendra Baahubali, the heir apparent to the throne of Mahishmati, finds his life and relationships endangered as his adoptive brother Bhallaladeva conspires to claim the throne.'

    },
    {
        Name:'Jai Bheem',
        // Director:'Gnanavel Raja',
        Rating:8.7,
        Poster:'https://th.bing.com/th/id/OIP.rkbJ0Vy8tR7JRAhx1PC2LwHaJQ?w=140&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:'When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice'
    },
    {
        Name:'C/o Kancherapalem',
        // Director:'Venkatesh Maha',
        Rating:8.8,
        Poster:'https://th.bing.com/th/id/OIP.xRzMGUfQO1KLiaa9ohFvxQAAAA?w=129&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:'Four unconventional love stories set in the town and including the people of Kancherapalem.',

    },
    {
        Name:'Jersey',
        // Director:'Gowtham Thinnanuri',
        Rating:8.5,
        Poster:'https://th.bing.com/th/id/OIP.Qpo1h3rqt4SCFgAGt7mpowHaFY?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"A failed cricketer decides to revive his cricketing career in his late 30's despite everyone being skeptical of his ability to do so"

    },
    {
        Name:'Sita Ramam',
        // Director:'Hanu',
        Rating:8.6,
        Poster:'https://th.bing.com/th/id/OIP.vKy2Pd7P7rd6c4zZ7Pm7hgHaHa?w=147&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a letter to Sita which won't reach her",

    },
    {
        Name:"OG",
        // Director:"Sujeeth",
        Rating:'NA',
        Poster:'https://th.bing.com/th/id/OIP.96LbnTGhu1DXphq8d1bHowHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"After vanishing from Mumbai's underworld for a decade, mob boss Ojas Gambheera resurfaces seeking vengeance against rival crime lords.",

    },
    {
        Name:'Hanuman',
        // Director:'Prasanth Varma',
        Rating:8.1,
        Poster:"https://th.bing.com/th/id/OIP.abRR_-LThehPdRv53s3xcgAAAA?w=129&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Description:"An imaginary place called Anjanadri where the protagonist gets the powers of Hanuman and fights for Anjanadri",

    },
    {
        Name:'Guntur Karam',
        // Director:'Trivikram',
        Rating:5.4,
        Poster:'https://th.bing.com/th/id/OIP.mv58J72xZSSBgJH2m7gBpgHaKf?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"Years after his mother abandons him and remarries, a man demands answers when he's asked to sign a document denying he is her son as she runs for office",

    },
    {
        Name:'Shershaah',
        // Director:'Vishnuvardhan',
        Rating:8.3,
        Poster:'https://th.bing.com/th/id/OIP.7u6ov7SwXvqYWQmBmF-TuAHaD2?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        Description:"Shershaah is the story of PVC awardee Indian soldier Capt. Vikram Batra, whose bravery and unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.",

    },
    {
        Name:'Kantara',
        // Director:'Rishab Shetty',
        Rating:8.2,
        Poster:"https://th.bing.com/th/id/OIP.iK7nn8XAfJDi5EQEoSm1DgHaJQ?w=143&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        Description:'When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.',

    },
    {
        Name:'Salaar',
        Rating:8.7,
        Poster:"https://th.bing.com/th?id=OIP.naQSTinXF7mBPmfuAX8SJAHaKs&w=207&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
        Name:'Leo',
        Rating:7.7,
        Poster:"https://th.bing.com/th/id/OIP.4LghctcGIXbP1oIyYijbAgHaJQ?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
    ,
    {
        Name:'Kalki 2898 AD',
        Rating:9.7,
        Poster:"https://th.bing.com/th?id=OIP.i_Dv7LmG9T5BBasgkqrcrQAAAA&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    }
    ,
    {
        Name: 'Manjummal Boys',
        Rating:8.8,
        poster:"https://th.bing.com/th?id=OIP.pMyYBTzxgvNJWrQwo9nUIwEaFh&w=199&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    }


]
console.log(movies);
function searchMovie(){
    // console.log("Working");
    
   let movieName= document.getElementById('search').value;
   if(movieName!="")
   {
    let result=movies.filter(function(movie)
    {
          return movie.Name.toUpperCase().includes(movieName.toUpperCase())
    })
    displayMovies(result);
   }
   else{
    displayMovies(movies);
   }
//    console.log(movieName);
}
function displayMovies(data)
{
    document.getElementById("movies").innerHTML="";
    let htmlString=`
    
    `;
    for(let i=0;i<data.length;i++)
    {
        htmlString=htmlString+` <div class="movie">
        <div class="overlay">
            <div class="video">
                
            </div>
            <div class="details">
                <h1>${data[i].Name}</h1>
                <h2>${data[i].Rating}</h2>

                
            </div>
        </div>
        <img class="poster" src="${data[i].Poster}"" alt="Poster">
    
    </div>`;
    }
    console.log('htmlString');
    document.getElementById('movies').innerHTML=htmlString;
    
}
displayMovies(movies);







// let movie=document.createElement("div");
//     movie.classList.add("movie");
//     let overlay=document.createElement("div");
//     overlay.classList.add("overlay");
//     movie.appendChild(overlay);
//     let video=document.createElement("div");
//     video.classList.add("video");
//     let details=document.createElement("div");
//     details.classList.add("details");
//     overlay.appendChild(video);
//     overlay.appendChild(details);
//     console.log(movie);