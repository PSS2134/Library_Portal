const books = [
  {
    "id": "o1",
    "name": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "genre": "Others",
    "url": "https://images-cdn.ubuy.co.in/635158a34d8c46165e5170a3-sapiens-a-brief-history-of-humankind.jpg",
    "summary":
      "Sapiens explores the history of our species, from the emergence of Homo sapiens in Africa to the present day, covering key revolutions that shaped human history.",
  },
  {
    "id": "o2",
    "name": "A Short History of Nearly Everything",
    "author": "Bill Bryson",
    "genre": "Others",
    "url": "https://cdn.penguin.co.uk/dam-assets/books/9780241473610/9780241473610-jacket-large.jpg",
    "summary":
      "A Short History of Nearly Everything is a journey through scientific discoveries and their explanations, covering a wide range of topics from cosmology to paleontology.",
  },
  {
    "id": "o3",
    "name": "Outliers: The Story of Success",
    "author": "Malcolm Gladwell",
    "genre": "Others",
    "url": "https://www.bookspace.in/cdn/shop/products/IMG_9673_d844b13c-b76a-4257-9720-7f8b462f3cc5.jpg?v=1642242859",
    "summary":
      "Outliers examines the factors that contribute to high levels of success, exploring the role of culture, opportunity, and hard work in shaping exceptional achievements.",
  },
  {
    "id": "o4",
    "name": "Becoming",
    "author": "Michelle Obama",
    "genre": "Others",
    "url": "https://m.media-amazon.com/images/I/81dDwAzxtrL._AC_UF1000,1000_QL80_.jpg",
    "summary":
      "Becoming is the memoir of former First Lady Michelle Obama, chronicling her experiences from childhood on the South Side of Chicago to life in the White House.",
  },
  {
    "id": "o5",
    "name": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "genre": "Others",
    "url": "https://5.imimg.com/data5/SELLER/Default/2021/1/DZ/QO/BZ/114532903/new-product-500x500.jpeg",
    "summary":
      "Thinking, Fast and Slow delves into the two systems of thinking that drive our decisions, examining cognitive biases and offering insights into human behavior.",
  },
  {
    "id": "o6",
    "name": "A Brief History of Time",
    "author": "Stephen Hawking",
    "genre": "Others",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3GUNKpshuKWazEdKu4FX4oirnBHymPrRvA&usqp=CAU",
    "summary":
      "A Brief History of Time explores the concepts of cosmology, from the Big Bang theory to black holes, in an accessible manner for both scientists and non-scientists alike.",
  },
  {
    "id": "o7",
    "name": "Principles: Life and Work",
    "author": "Ray Dalio",
    "genre": "Others",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMpXxuqmaaF21m0Sc_A0JJPMC2c-Fl7Z91Q&usqp=CAU",
    "summary":
      "Principles shares the principles and unconventional wisdom of billionaire investor Ray Dalio, offering insights into building an effective life and work principles.",
  },
  {
    "id": "o8",
    "name": "The Emperor of All Maladies: A Biography of Cancer",
    "author": "Siddhartha Mukherjee",
    "genre": "Others",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3LwN4KP-C4Q4gYNup8ZVyJT6ywg6p4a67w&usqp=CAU",
    "summary":
      "The Emperor of All Maladies is a comprehensive history of cancer, exploring its origins, treatments, and societal impact, while highlighting the advancements in medical science.",
  },
  {
    "id": "o9",
    "name": "The Power of Habit: Why We Do What We Do in Life and Business",
    "author": "Charles Duhigg",
    "genre": "Others",
    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOaxJ2cMpp-7jolXoWQ_gHenkzuzgu9PmWw&usqp=CAU",
    "summary":
      "The Power of Habit explores the science behind habits, providing insights into how they are formed, altered, and how we can harness them to achieve personal and professional success.",
  },
  {
    "id": "o10",
    "name": "Incognito: The Secret Lives of the Brain",
    "author": "David Eagleman",
    "genre": "Others",
    "url": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348669116i/9827912.jpg",
    "summary":
      "Incognito delves into the hidden workings of the brain, uncovering the secrets of our subconscious mind and its influence on our thoughts, behaviors, and decision-making processes.",
  },
  {
    "id": "c1",
    "name": "Introduction to Algorithms",
    "author": "Thomas H. Cormen",
    "genre": "Competitive",
    "url": "https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Introduction-to-Algorithms.jpg",
    "summary":
      "This book is often said to be the bible for Algorithms. The book has a lot of famous algorithms ranging from a variety of topics like Dynamic Programming, Greedy methods, to various advanced Graph Algorithms and even Multithreaded Algorithms, algorithms related to Number Theory and what not. ",
  },
  {
    "id": "c2",
    "name": "Structural Analysis",
    "author": "R C Hibbeler",
    "genre": "Competitive",
    "url": "https://th.bing.com/th/id/OIP.KF3DUMMTJvsfd-fjvEntTwHaHa?pid=ImgDet&rs=1",
    "summary":
      " This book is intended to provide the student with a clear and thorough presentation of the theory and application of structural analysis as itapplies to trusses,beams,and frames.Emphasis is placed on developingthe student’s ability to both model and analyze a structure and toprovide realistic applications encountered in professional practice",
  },
  {
    "id": "c3",
    "name": "Engineering Mechanics of Solids",
    "author": "E P Popov",
    "genre": "Competitive",
    "url": "https://www.elsolucionario.me/wp-content/archivos/2018/02/engineering-mechanics-of-solids-egor-p-popov-1st-edition.jpeg",
    "summary":
      "This book is a comprehensive, cross-referenced examination of engineering mechanics of solids. Traditional topics are supplemented by an exposure to several newly-emerging disciplines, such as the probabilistic basis for structural analysis, matrix methods, and plastic limit analysis.",
  },
  {
    "id": "c4",
    "name": "GATE Electrical Engineering Vol 1",
    "author": "R.K. Kanodia",
    "genre": "Competitive",
    "url": "https://content.kopykitab.com/ebooks/2016/06/7572/content/medium/page1.png",
    "summary":
      "A compelling story set in the Deep South during the 1930s, addressing themes of racial injustice and moral courage.",
  },
  {
    "id": "c5",
    "name": "Database System Concepts",
    "author": "Abraham Silberschatz",
    "genre": "Competitive",
    "url": "https://rukminim1.flixcart.com/image/832/832/book/2/2/6/database-systems-concepts-original-imadjr9g2xz6rwxy.jpeg?q=70",
    "summary": "This book covers the fundamental concepts of database systems. It discusses topics such as relational databases, SQL, transaction management, data warehousing, and data mining."
  },
  {
    "id": "c6",
    "name": "Mechanics of Materials",
    "author": "Ferdinand P. Beer",
    "genre": "Competitive",
    "url": "https://m.media-amazon.com/images/I/51JjjA779qL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
    "summary": "This book provides a comprehensive introduction to the mechanics of materials. It covers topics such as stress, strain, axial loading, torsion, bending, and more, with a focus on the behavior of materials under different conditions."
  },
  {
    "id": "c7",
    "name": "Fluid Mechanics",
    "author": "F M White",
    "genre": "Competitive",
    "url": "https://easyengineering.net/wp-content/uploads/2017/10/FLUID-MECHANICS-IN-SI-UNITS-BY-FRANK-M.-WHITE.jpg",
    "summary": "This book provides a comprehensive introduction to fluid mechanics. It covers topics such as fluid properties, fluid statics, fluid dynamics, flow in pipes, and boundary layer flows."
  },
  {
    "id": "c8",
    "name": "Data Structures and Algorithms Made Easy",
    "author": "Narasimha Karumanchi",
    "genre": "Competitive",
    "url": "https://th.bing.com/th/id/R.9d74c9191547a19895b82087f4fc4ac4?rik=x9RTJ8SN%2fxdJCw&riu=http%3a%2f%2fprodimage.images-bn.com%2fpimages%2f9781456549886_p0_v1_s1200x630.jpg&ehk=2Y%2fONWy04L6zFwTpsRM4ShEsJ3x41oaPVttIcVFy5j8%3d&risl=&pid=ImgRaw&r=0",
    "summary": "This book provides a comprehensive guide to data structures and algorithms. It covers various data structures like arrays, linked lists, stacks, queues, trees, graphs, and various algorithmic techniques."
  },
  {
    "id": "c9",
    "name": "Artificial Intelligence: A Modern Approach",
    "author": "Stuart Russell",
    "genre": "Competitive",
    "url": "https://pictures.abebooks.com/isbn/9780131038059-us.jpg",
    "summary": "This book provides a comprehensive introduction to the field of artificial intelligence. It covers various topics including problem-solving, knowledge representation, planning, learning, natural language processing, and more."
  },
  {
    "id": "c10",
    "name": "Chemical Engineering Design",
    "author": "Gavin Towler",
    "genre": "Competitive",
    "url": "https://pictures.abebooks.com/isbn/9780750684231-us.jpg",
    "summary": "This book provides a comprehensive introduction to chemical engineering design. It covers topics such as process design, equipment selection, plant layout, economics, and safety considerations.",
  },
  { 
    "id":"f1",
    "name": "To Kill a Mockingbird",
    "genre":"Fiction",
    "author": "Harper Lee",
    "summary": "Set in the 1930s in a small Southern town, this Pulitzer Prize-winning novel explores themes of racial injustice, compassion, and the loss of innocence through the eyes of Scout Finch, a young girl. It tackles important social issues while delivering a compelling and emotional story.",
    "url":"https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg", 
  },
  { 
    "id":"f2",
    "name": "1984",
    "genre":"Fiction",
    "author": "George Orwell",
    "summary": "In a dystopian future, George Orwell's novel depicts a totalitarian regime where individualism is suppressed, and Big Brother monitors every move. It explores themes of surveillance, manipulation, and the power of language, leaving a lasting impact on readers.",
    "url":"https://m.media-amazon.com/images/I/514CVwOrybL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    "id":"f3",
    "name": "Pride and Prejudice",
    "genre":"Fiction",
    "author": "Jane Austen",
    "summary": "A classic romance novel, Jane Austen's work follows the spirited Elizabeth Bennet as she navigates societal expectations, family dynamics, and the complexities of love. It is a witty and insightful commentary on social class, marriage, and personal growth.",
    "url":"https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
  },
  { 
    "id":"f4",
    "name": "The Great Gatsby",
    "genre":"Fiction",
    "author": "F. Scott Fitzgerald",
    "summary": "Set in the roaring 1920s, F. Scott Fitzgerald's masterpiece explores the pursuit of the American Dream through the eyes of Jay Gatsby, a wealthy and mysterious figure. It delves into themes of love, wealth, and the illusions of the Jazz Age.",
    "url":"https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
  },
  { 
    "id":"f5",
    "name": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "summary": "A fantasy epic, J.R.R. Tolkien's trilogy takes readers on a journey through Middle-earth, following Frodo Baggins as he embarks on a perilous quest to destroy the One Ring. It is a tale of adventure, friendship, and the triumph of good over evil.",
    "url":"https://i0.wp.com/booksofbrilliance.com/wp-content/uploads/2022/08/Add-a-heading-6.png?fit=1200%2C675&ssl=1"
    
  },
  { 
    "id":"f6",
    "name": "Harry Potter and the Sorcerer's Stone",
    "genre":"Fiction",
    "author": "J.K. Rowling",
    "summary": "The start of J.K. Rowling's beloved series introduces readers to the magical world of Harry Potter. Join Harry and his friends as they attend Hogwarts School of Witchcraft and Wizardry and unravel the mysteries surrounding the boy who lived.",
    "url":"https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg"
    
  },
  { 
    "id":"f7",
    "name": "The Catcher in the Rye",
    "genre":"Fiction",
    "author": "J.D. Salinger",
    "summary": "Narrated by the troubled teenager Holden Caulfield, this coming-of-age novel explores themes of alienation, identity, and teenage angst. J.D. Salinger's classic work continues to resonate with readers of all generations.",
    "url":"https://images.wsj.net/im-173743?width=1280&size=1"
  },
  { 
    "id":"f8",
    "name": "To the Lighthouse",
    "genre":"Fiction",
    "author": "Virginia Woolf",
    "summary": "Virginia Woolf's experimental novel delves into the inner lives of its characters as they visit a family's summer home. It is a modernist exploration of consciousness, memory, and the passage of time.",
    "url":"https://m.media-amazon.com/images/I/41GWqsNHAPL.jpg"
  },
  { 
    "id":"f9",
    "name": "One Hundred Years of Solitude",
    "genre":"Fiction",
    "author": "Gabriel Garcia Marquez",
    "summary": "Gabriel Garcia Marquez's masterpiece follows the Buendía family across generations in the fictional town of Macondo. Blending reality and fantasy, the novel explores themes of love, time, and the cyclical nature of history.",
    "url":"https://sslimages.shoppersstop.com/B8AC9759D45547D9AEF177F0DE13B7C8/img/484C23EF26324F3DB351C8B148B2B3FE/204630408_9999_484C23EF26324F3DB351C8B148B2B3FE.jpg"
  },
  { 
    "id":"f10",
    "name": "The Alchemist",
    "genre":"Fiction",
    "author": "Paulo Coelho",
    "summary": "The Alchemist is a novel by Paulo Coelho about a young shepherd named Santiago who embarks on a journey to find his personal legend, discovering wisdom and the importance of following one's dreams along the way.",
    "url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
  },
  {
    "id": "a1",
    "name": "The Diary of a Young Girl",
    "genre":"Autobiography",
    "author": "Anne Frank",
    "summary": "This iconic autobiography is the diary of Anne Frank, a Jewish girl who documented her experiences while hiding from the Nazis during World War II. It provides an intimate and poignant account of her life in hiding and offers a unique perspective on the atrocities of the Holocaust.",
    "url": "https://cdn.kobo.com/book-images/265498db-16c5-421a-b481-e0f4a99e6a74/353/569/90/False/the-diary-of-a-young-girl-27.jpg"
    },
    {
    "id": "a2",
    "name": "The Autobiography of Malcolm X",
    "genre":"Autobiography",
    "author": "Malcolm X and Alex Haley",
    "summary": "In this powerful autobiography, civil rights activist Malcolm X narrates his journey from his troubled youth to becoming a prominent leader in the Nation of Islam. It explores his transformation, advocacy for black empowerment, and his eventual departure from the Nation of Islam.",
    "url": "https://upload.wikimedia.org/wikipedia/commons/9/9b/The_Autobiography_of_Malcolm_X_%281st_ed_dust_jacket_cover%29.jpg"
    },
    {
    "id": "a3",
    "name": "Long Walk to Freedom",
    "genre":"Autobiography",
    "author": "Nelson Mandela",
    "summary": "Nelson Mandela, the iconic South African leader, reflects on his extraordinary life and struggle against apartheid in this autobiography. From his early activism to his 27-year imprisonment and subsequent presidency, Mandela's book offers a profound insight into the fight for justice and equality.",
    "url": "https://upload.wikimedia.org/wikipedia/en/7/74/Long_Walk_to_Freedom.jpg"
    },
    {
    "id": "a4",
    "name": "I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban",
    "genre":"Autobiography",
    "author": "Malala Yousafzai",
    "summary": "Malala Yousafzai, the youngest Nobel Prize laureate, shares her extraordinary story in this autobiography. She recounts her fight for girls' education in Pakistan, surviving an assassination attempt by the Taliban, and her continued activism as a global advocate for education and women's rights.",
    "url": "https://images-na.ssl-images-amazon.com/images/P/1474602118.01.LZZZZZZZ.jpg"
    },
    {
    "id": "a5",
    "name": "The Story of My Life",
    "genre":"Autobiography",
    "author": "Helen Keller",
    "summary": "Helen Keller's autobiography recounts her remarkable journey from being deaf and blind since early childhood to becoming a renowned author, lecturer, and advocate for the disabled. Her inspiring story highlights the power of determination, education, and overcoming obstacles.",
    "url": "https://cdn.kobo.com/book-images/7424c37b-e9a8-4268-a580-a74a8dc2664b/353/569/90/False/the-story-of-my-life-157.jpg"
    },
    {
    "id": "a6",
    "name": "The Diary of a Napoleonic Foot Soldier",
    "genre":"Autobiography",
    "author": "Jakob Walter",
    "summary": "This autobiography provides a firsthand account of life as a foot soldier in Napoleon's army during the Napoleonic Wars. Jakob Walter's diary reveals the harsh realities of war, the suffering of soldiers, and the impact of political conflicts on individuals.",
    "url": "https://m.media-amazon.com/images/I/51TGneRECZL.jpg"
    },
    {
    "id": "a7",
    "name": "The Story of My Experiments with Truth",
    "genre":"Autobiography",
    "author": "Mohandas K. Gandhi",
    "summary": "In this autobiography, Mahatma Gandhi shares his personal and political journey, discussing his experiments with truth, nonviolent resistance, and his role in India's struggle for independence from British rule. It offers profound insights into Gandhi's philosophy and his principles of peaceful protest.",
    "url": "https://m.media-amazon.com/images/I/71GWX22G92L._AC_UF1000,1000_QL80_.jpg"
    },
    {
    "id": "a8",
    "name": "When Breath Becomes Air",
    "genre":"Autobiography",
    "author": "Paul Kalanithi",
    "summary": "In this memoir, Paul Kalanithi, a neurosurgeon diagnosed with terminal cancer, reflects on his life, career, and the search for meaning in the face of mortality. It is a profound exploration of human existence, the fragility of life, and the importance of living fully in the present.",
    "url": "https://m.media-amazon.com/images/I/51N2y-qEjdL.jpg"
    },
    {
    "id": "a9",
    "name": "The Motorcycle Diaries",
    "genre":"Autobiography",
    "author": "Ernesto 'Che' Guevara",
    "summary": "In this travelogue, Che Guevara recounts his motorcycle journey across South America, which had a profound impact on his worldview and political ideology. It offers insights into the social injustices and inequalities that Guevara encountered, ultimately shaping his revolutionary spirit.",
    "url": "https://images.jdmagicbox.com/comp/jd_social/news/2018jul17/image-82734-07zg54t56p.jpg"
    },
    {
    "id": "a10",
    "name": "Wings of Fire",
    "author": "A.P.J. Abdul Kalam",
    "summary": "In this autobiography, A.P.J. Abdul Kalam, the former President of India, shares his inspiring journey from a small town in Tamil Nadu to becoming a renowned scientist and statesman. The book chronicles his childhood, his work in India's space and missile programs, and his vision for the country's future.",
    "url": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg"
    }
];

export default books;

 
  
  