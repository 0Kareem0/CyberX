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
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    time: "2h ago",
    title: "The Future of Neural Interfaces",
    content: "Just finished reading about the latest developments in brain-computer interfaces...",
    tags: ["#Technology", "#Neural", "#Future"],
    likes: 234,
    comments: 45,
    shares: 18,
    bookmarked: false,
  },
  // Add 4–5 more fake posts...
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