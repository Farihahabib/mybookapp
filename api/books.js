// Mock book data
let books = [
  {
    id: 1,
    name: "The Midnight Library",
    description: "A dazzling novel about all the choices that go into a life well lived.",
    price: 14.99,
    author: "Matt Haig",
    genre: "Fiction",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Atomic Habits",
    description: "An easy and proven way to build good habits and break bad ones.",
    price: 16.99,
    author: "James Clear",
    genre: "Self-Help",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Project Hail Mary",
    description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
    price: 15.99,
    author: "Andy Weir",
    genre: "Science Fiction",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    name: "The Silent Patient",
    description: "A woman's act of violence against her husband and the therapist obsessed with uncovering her motive.",
    price: 13.99,
    author: "Alex Michaelides",
    genre: "Mystery",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Educated",
    description: "A memoir about a young woman who leaves her survivalist family and goes on to earn a PhD from Cambridge.",
    price: 17.99,
    author: "Tara Westover",
    genre: "Biography",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Where the Crawdads Sing",
    description: "A coming-of-age story of a young girl raised by the marshlands of the South.",
    price: 15.99,
    author: "Delia Owens",
    genre: "Fiction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    name: "Sapiens",
    description: "A brief history of humankind from the Stone Age to the modern age.",
    price: 18.99,
    author: "Yuval Noah Harari",
    genre: "History",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    name: "The Seven Husbands of Evelyn Hugo",
    description: "A reclusive Hollywood icon opens up about her glamorous and scandalous life.",
    price: 14.99,
    author: "Taylor Jenkins Reid",
    genre: "Romance",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
  }
];

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { method, query } = req;
  const { id } = query;

  switch (method) {
    case 'GET':
      if (id) {
        // Get single book
        const book = books.find(b => b.id === parseInt(id));
        if (book) {
          res.status(200).json(book);
        } else {
          res.status(404).json({ message: 'Book not found' });
        }
      } else {
        // Get all books
        res.status(200).json(books);
      }
      break;

    case 'POST':
      const { name, description, price, author, genre, image } = req.body;
      
      if (!name || !description || !price || !author || !genre) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const newBook = {
        id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
        name,
        description,
        price: parseFloat(price),
        author,
        genre,
        image: image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
      };

      books.push(newBook);
      res.status(201).json(newBook);
      break;

    case 'DELETE':
      if (id) {
        const index = books.findIndex(b => b.id === parseInt(id));
        if (index !== -1) {
          books.splice(index, 1);
          res.status(200).json({ message: 'Book deleted successfully' });
        } else {
          res.status(404).json({ message: 'Book not found' });
        }
      } else {
        res.status(400).json({ message: 'Book ID is required' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}