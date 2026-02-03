export const currentUser = {
  name: "Kareem",
  username: "@kareemAbbas",
  avatar: "/pfp.jpeg",
  stats: {
    posts: 127,
    followers: 2400,
    following: 384,
    articlesRead: 89,
    booksSaved: 23,
  },
};

export const posts = [
  {
    id: 1,
    author: {
      name: "Marcus_Tech",
      username: "@marcus.tech",
      avatar: "/pfp2.jpeg",
    },
    time: "1h ago",
    title: "The Future of Neural Interfaces",
    content: "Just finished reading about the latest developments in brain-computer interfaces...",
    tags: ["#Technology", "#Neural", "#Future"],
    likes: 234,
    comments: 45,
    shares: 18,
    bookmarked: false,
  },
  {
    id: 2,
    author: {
      name: "Kareem",
      username: "@kareemabbas",
      avatar: "pfp.jpeg",
    },
    time: "3h ago",
    title: "",
    content: "Anyone else think we're living in a simulation? The glitches are everywhere if you know where to look...",
    tags: ["#Simulation", "#Glitches", "#Reality"],
    likes: 3418,
    comments: 1021,
    shares: 917,
    bookmarked: false,
  },
  {
    id: 3,
    author: {
      name: "Alex_Designer",
      username: "@alex.design",
      avatar: "post-pfp1.jpeg",
    },
    time: "4h ago",
    title: "Minimalist UI Trends in 2025",
    content: "The rise of clean, functional interfaces continues to dominate the design landscape...",
    tags: ["#Design", "#UI", "#Minimalism"],
    likes: 156,
    comments: 28,
    shares: 15,
    bookmarked: false,
  },
  {
    id: 4,
    author: {
      name: "Sarah_Code",
      username: "@sarah.code",
      avatar: "post-pfp3.jpeg",
    },
    time: "5h ago",
    title: "Building Scalable APIs with Node.js",
    content: "Best practices for creating robust, maintainable API endpoints...",
    tags: ["#Backend", "#NodeJS", "#API"],
    likes: 203,
    comments: 41,
    shares: 29,
    bookmarked: false,
  },
  {
    id: 5,
    author: {
      name: "Mike_Data",
      username: "@mike.data",
      avatar: "post-pfp2.jpeg",
    },
    time: "7h ago",
    title: "Machine Learning for Beginners",
    content: "A comprehensive guide to understanding the fundamentals of ML...",
    tags: ["#AI", "#MachineLearning", "#Beginners"],
    likes: 312,
    comments: 67,
    shares: 45,
    bookmarked: false,
  },
 
];

export const recommendedReads = [
  {
    title: "Digital Ghosts",
    author: "by J. Morrison",
    rating: 4.6,
    cover: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?...",
  },
  // more...
];

export const activeUsers = [
  { name: "Cipher_X", status: "Online now" },
  // more...
];