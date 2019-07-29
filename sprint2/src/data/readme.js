/**
 * GET /videos
 * https://project-2-api.herokuapp.com/videos?api_key=a74bc77e-a64a-4c16-94a1-ba5cb480ac2e
 * 
 * 
 * [
    {
        "id": "1af0jruup5gu",
        "title": "BMX Rampage: 2018 Highlights",
        "channel": "Red Cow",
        "image": "https://i.imgur.com/l2Xfgpl.jpg"
    },
    {
        "id": "1ainjruutd1j",
        "title": "Become A Travel Pro In One Easy Lesson",
        "channel": "Todd Welch",
        "image": "https://i.imgur.com/5qyCZrD.jpg"
    },
    {
        "id": "1aivjruutn6a",
        "title": "Les Houches The Hidden Gem Of The Chamonix",
        "channel": "Cornelia Blair",
        "image": "https://i.imgur.com/yFS8EBr.jpg"
    },
    {
        "id": "1a3cjruucpf7",
        "title": "Travel Health Useful Medical Information For",
        "channel": "Glen Harper",
        "image": "https://i.imgur.com/MMDMgD7.jpg"
    },
    {
        "id": "1am3jruuwagz",
        "title": "Cheap Airline Tickets Great Ways To Save",
        "channel": "Emily Harper",
        "image": "https://i.imgur.com/ibLw5q5.jpg"
    },
    {
        "id": "1akljruuvhzt",
        "title": "Take A Romantic Break In A Boutique Hotel",
        "channel": "Ethan Owen",
        "image": "https://i.imgur.com/7rD6Mf6.jpg"
    },
    {
        "id": "1ae5jruuoc4q",
        "title": "Choose the Perfect Accommodations",
        "channel": "Lydia Perez",
        "image": "https://i.imgur.com/0hi3N4B.jpg"
    },
    {
        "id": "1a4kjruuedd9",
        "title": "Cruising Destination Ideas",
        "channel": "Timothy Austin",
        "image": "https://i.imgur.com/DDJNZNw.jpg"
    },
    {
        "id": "1a8qhruuzky3",
        "title": "Train Travel On Track For Safety",
        "channel": "Scotty Cranmer",
        "image": "https://i.imgur.com/i6S8m7I.jpg"
    }
]
 * 
 * 
 * GET `videos/:id`
 * 
 * 
 * {
    "id": "1ainjruutd1j",
    "title": "Become A Travel Pro In One Easy Lesson",
    "channel": "Todd Welch",
    "image": "https://i.imgur.com/5qyCZrD.jpg",
    "description": "Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. This video will focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves.",
    "views": "2,043,765",
    "likes": "400,058",
    "duration": "7:26",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": 1537003624000,
    "comments": [
        {
            "name": "Micheal Lyons",
            "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            "likes": 0,
            "timestamp": 1545162149000
        },
        {
            "name": "Gary Wong",
            "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            "likes": 0,
            "timestamp": 1544595784046
        },
        {
            "name": "Theodore Duncan",
            "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
            "likes": 0,
            "timestamp": 1542262984046
        }
    ]
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  POST `/videos/:id/comments`
 * 
 * body: {
	"name": "Nigel",
	"comment": "This is a test"
}
 * returned 
 {
  "name": "Nigel",
  "comment": "This is a test",
  "id": 4,
  "timestamp": 1531857374673
}
 *  
 * 
 * 
 * DELETE `/videos/:videoId/comments/:commentId`
 * 
 * 
 * {
    "name": "Ian",
    "comment": "You could make $5000 a day too!",
    "id": 1,
    "timestamp": 1530744338878
}
 * 
 * 
 * 
 * 
 * 
 * 
 */