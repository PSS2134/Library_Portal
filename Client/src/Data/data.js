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
];

export default books;
