const books = [
  {
    id: 1,
    name: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Others",
    url: "https://images-cdn.ubuy.co.in/635158a34d8c46165e5170a3-sapiens-a-brief-history-of-humankind.jpg",
    summary:
      "Sapiens explores the history of our species, from the emergence of Homo sapiens in Africa to the present day, covering key revolutions that shaped human history.",
  },
  {
    id: 2,
    name: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    genre: "Others",
    url: "https://cdn.penguin.co.uk/dam-assets/books/9780241473610/9780241473610-jacket-large.jpg",
    summary:
      "A Short History of Nearly Everything is a journey through scientific discoveries and their explanations, covering a wide range of topics from cosmology to paleontology.",
  },
  {
    id: 3,
    name: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    genre: "Others",
    url: "https://www.bookspace.in/cdn/shop/products/IMG_9673_d844b13c-b76a-4257-9720-7f8b462f3cc5.jpg?v=1642242859",
    summary:
      "Outliers examines the factors that contribute to high levels of success, exploring the role of culture, opportunity, and hard work in shaping exceptional achievements.",
  },
  {
    id: 4,
    name: "Becoming",
    author: "Michelle Obama",
    genre: "Others",
    url: "https://m.media-amazon.com/images/I/81dDwAzxtrL._AC_UF1000,1000_QL80_.jpg",
    summary:
      "Becoming is the memoir of former First Lady Michelle Obama, chronicling her experiences from childhood on the South Side of Chicago to life in the White House.",
  },
  {
    id: 5,
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Others",
    url: "https://5.imimg.com/data5/SELLER/Default/2021/1/DZ/QO/BZ/114532903/new-product-500x500.jpeg",
    summary:
      "Thinking, Fast and Slow delves into the two systems of thinking that drive our decisions, examining cognitive biases and offering insights into human behavior.",
  },
  {
    id: 6,
    name: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Others",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3GUNKpshuKWazEdKu4FX4oirnBHymPrRvA&usqp=CAU",
    summary:
      "A Brief History of Time explores the concepts of cosmology, from the Big Bang theory to black holes, in an accessible manner for both scientists and non-scientists alike.",
  },
  {
    id: 7,
    name: "Principles: Life and Work",
    author: "Ray Dalio",
    genre: "Others",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMpXxuqmaaF21m0Sc_A0JJPMC2c-Fl7Z91Q&usqp=CAU",
    summary:
      "Principles shares the principles and unconventional wisdom of billionaire investor Ray Dalio, offering insights into building an effective life and work principles.",
  },
  {
    id: 8,
    name: "The Emperor of All Maladies: A Biography of Cancer",
    author: "Siddhartha Mukherjee",
    genre: "Others",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3LwN4KP-C4Q4gYNup8ZVyJT6ywg6p4a67w&usqp=CAU",
    summary:
      "The Emperor of All Maladies is a comprehensive history of cancer, exploring its origins, treatments, and societal impact, while highlighting the advancements in medical science.",
  },
  {
    id: 9,
    name: "The Power of Habit: Why We Do What We Do in Life and Business",
    author: "Charles Duhigg",
    genre: "Others",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOaxJ2cMpp-7jolXoWQ_gHenkzuzgu9PmWw&usqp=CAU",
    summary:
      "The Power of Habit explores the science behind habits, providing insights into how they are formed, altered, and how we can harness them to achieve personal and professional success.",
  },
  {
    id: 10,
    name: "Incognito: The Secret Lives of the Brain",
    author: "David Eagleman",
    genre: "Others",
    url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348669116i/9827912.jpg",
    summary:
      "Incognito delves into the hidden workings of the brain, uncovering the secrets of our subconscious mind and its influence on our thoughts, behaviors, and decision-making processes.",
  },
  {
    id: 11,
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    genre: "Competitive",
    url: "https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg",
    summary:
      "This book is often said to be the bible for Algorithms. The book has a lot of famous algorithms ranging from a variety of topics like Dynamic Programming, Greedy methods, to various advanced Graph Algorithms and even Multithreaded Algorithms, algorithms related to Number Theory and what not. ",
  },
  {
    id: 12,
    name: "Structural Analysis",
    author: "R C Hibbeler",
    genre: "Competitive",
    url: "https://3.bp.blogspot.com/-ijSwgH39zks/Uvpmw-CZUgI/AAAAAAAAD80/9mgR7zagcQw/s1600/Hibbeler+Structural+Analysis+8th-engineersdaily_Page_001.jpg",
    summary:
      " This book is intended to provide the student with a clear and thorough presentation of the theory and application of structural analysis as itapplies to trusses,beams,and frames.Emphasis is placed on developingthe student’s ability to both model and analyze a structure and toprovide realistic applications encountered in professional practice",
  },
  {
    id: 13,
    name: "Engineering Mechanics of Solids",
    author: "E P Popov",
    genre: "Competitive",
    url: "https://www.elsolucionario.me/wp-content/archivos/2018/02/engineering-mechanics-of-solids-egor-p-popov-1st-edition.jpeg",
    summary:
      "This book is a comprehensive, cross-referenced examination of engineering mechanics of solids. Traditional topics are supplemented by an exposure to several newly-emerging disciplines, such as the probabilistic basis for structural analysis, matrix methods, and plastic limit analysis.",
  },
  {
    id: 14,
    name: "GATE Electrical Engineering Vol 1",
    author: "R.K. Kanodia",
    genre: "Competitive",
    url: "https://content.kopykitab.com/ebooks/2016/06/7572/content/medium/page1.png",
    summary:
      "A compelling story set in the Deep South during the 1930s, addressing themes of racial injustice and moral courage.",
  },
  {
    id: 15,
    name: "Database System Concepts",
    author: "Abraham Silberschatz",
    genre: "Competitive",
    url: "https://rukminim1.flixcart.com/image/832/832/book/2/2/6/database-systems-concepts-original-imadjr9g2xz6rwxy.jpeg?q=70",
    summary: "This book covers the fundamental concepts of database systems. It discusses topics such as relational databases, SQL, transaction management, data warehousing, and data mining."
  },
  {
    id: 16,
    name: "Mechanics of Materials",
    author: "Ferdinand P. Beer",
    genre: "Competitive",
    url: "https://m.media-amazon.com/images/I/51JjjA779qL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    summary: "This book provides a comprehensive introduction to the mechanics of materials. It covers topics such as stress, strain, axial loading, torsion, bending, and more, with a focus on the behavior of materials under different conditions."
  },
  {
    id: 17,
    name: "Fluid Mechanics",
    author: "F M White",
    genre: "Competitive",
    url: "https://easyengineering.net/wp-content/uploads/2017/10/FLUID-MECHANICS-IN-SI-UNITS-BY-FRANK-M.-WHITE.jpg",
    summary: "This book provides a comprehensive introduction to fluid mechanics. It covers topics such as fluid properties, fluid statics, fluid dynamics, flow in pipes, and boundary layer flows."
  },
  {
    id: 18,
    name: "Data Structures and Algorithms Made Easy",
    author: "Narasimha Karumanchi",
    genre: "Competitive",
    url: "https://th.bing.com/th/id/R.9d74c9191547a19895b82087f4fc4ac4?rik=x9RTJ8SN%2fxdJCw&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781456549886_p0_v1_s1200x630.jpg&ehk=2Y%2fONWy04L6zFwTpsRM4ShEsJ3x41oaPVttIcVFy5j8%3d&risl=&pid=ImgRaw&r=0",
    summary: "This book provides a comprehensive guide to data structures and algorithms. It covers various data structures like arrays, linked lists, stacks, queues, trees, graphs, and various algorithmic techniques."
  },
  {
    id: 19,
    name: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    genre: "Competitive",
    url: "https://pictures.abebooks.com/isbn/9780131038059-us.jpg",
    summary: "This book provides a comprehensive introduction to the field of artificial intelligence. It covers various topics including problem-solving, knowledge representation, planning, learning, natural language processing, and more."
  },
  {
    id: 20,
    name: "Chemical Engineering Design",
    author: "Gavin Towler",
    genre: "Competitive",
    url: "https://pictures.abebooks.com/isbn/9780750684231-us.jpg",
    summary: "This book provides a comprehensive introduction to chemical engineering design. It covers topics such as process design, equipment selection, plant layout, economics, and safety considerations.",
  },
];

export default books;
