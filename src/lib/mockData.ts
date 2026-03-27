import { Series, Chapter, LatestUpdate } from "@/types";

const now = new Date().toISOString();
const yesterday = new Date(Date.now() - 86400000).toISOString();

export const MOCK_SERIES: Series[] = [
  {
    id: "s1",
    title: "Solo Leveling",
    slug: "solo-leveling",
    description: "Ten years ago, after 'the Gate' that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as 'Hunters'. However, not all Hunters are powerful. My name is Sung Jin-Woo, an E-rank Hunter...",
    coverImage: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&q=80",
    type: "MANHWA",
    status: "COMPLETED",
    genres: ["Action", "Fantasy", "System"],
    author: "Chu-Gong",
    artist: "DUBU",
    isFeatured: true,
    views: 12500000,
    rating: 4.9,
    ratingCount: 54000,
    updatedAt: now,
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "s2",
    title: "Omniscient Reader's Viewpoint",
    slug: "omniscient-readers-viewpoint",
    description: "Only I know the end of this world. One day our MC finds himself stuck in the world of his favorite web novel. What does he do to survive? It is a world struck by disaster and danger all around.",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80",
    type: "MANHWA",
    status: "ONGOING",
    genres: ["Action", "Fantasy", "System", "Drama"],
    author: "Sing Shong",
    artist: "Sleepy-C",
    isFeatured: true,
    views: 8900000,
    rating: 4.8,
    ratingCount: 32000,
    updatedAt: now,
    createdAt: "2023-02-01T00:00:00Z",
  },
  {
    id: "s3",
    title: "Martial Peak",
    slug: "martial-peak",
    description: "The journey to the martial peak is a lonely, solitary and long one. In the face of adversity, you must survive and remain unyielding. Only then can you break through and continue on your journey to become the strongest.",
    coverImage: "https://images.unsplash.com/photo-1590845947376-2638caa89309?w=500&q=80",
    type: "MANHUA",
    status: "ONGOING",
    genres: ["Martial Arts", "Action", "Fantasy", "Reincarnation"],
    author: "Momo",
    artist: "Pikachu",
    isFeatured: true,
    views: 21000000,
    rating: 4.6,
    ratingCount: 150000,
    updatedAt: yesterday,
    createdAt: "2021-05-01T00:00:00Z",
  },
  {
    id: "s4",
    title: "The Beginning After The End",
    slug: "the-beginning-after-the-end",
    description: "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power.",
    coverImage: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&q=80",
    type: "COMIC",
    status: "ONGOING",
    genres: ["Fantasy", "Action", "Reincarnation"],
    author: "TurtleMe",
    artist: "Fuyuki23",
    isFeatured: true,
    views: 6500000,
    rating: 4.9,
    ratingCount: 41000,
    updatedAt: now,
    createdAt: "2023-03-01T00:00:00Z",
  },
  {
    id: "s5",
    title: "One Piece",
    slug: "one-piece",
    description: "Gol D. Roger, a man referred to as the 'Pirate King', is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece.",
    coverImage: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=500&q=80",
    type: "MANGA",
    status: "ONGOING",
    genres: ["Action", "Adventure", "Comedy"],
    author: "Eiichiro Oda",
    artist: "Eiichiro Oda",
    isFeatured: false,
    views: 50000000,
    rating: 5.0,
    ratingCount: 500000,
    updatedAt: now,
    createdAt: "1997-07-22T00:00:00Z",
  },
  {
    id: "s6",
    title: "Return of the Mount Hua Sect",
    slug: "return-of-the-mount-hua-sect",
    description: "Chung Myung, the 13th generation disciple of the Mount Hua Sect, falls in battle against the Heavenly Demon. He wakes up 100 years later as a child.",
    coverImage: "https://images.unsplash.com/photo-1583089892943-e590dbbb5c81?w=500&q=80",
    type: "MANHWA",
    status: "ONGOING",
    genres: ["Martial Arts", "Action", "Comedy"],
    author: "Biga",
    artist: "LICO",
    isFeatured: false,
    views: 4200000,
    rating: 4.8,
    ratingCount: 22000,
    updatedAt: yesterday,
    createdAt: "2023-06-01T00:00:00Z",
  },
  {
    id: "s7",
    title: "Mercenary Enrollment",
    slug: "mercenary-enrollment",
    description: "At the age of eight, Ijin Yoo lost his parents in a plane crash and became stranded in a foreign land. He became a mercenary to survive. 10 years later he returns.",
    coverImage: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&q=80",
    type: "MANHWA",
    status: "ONGOING",
    genres: ["Action", "School Life"],
    author: "YC",
    artist: "Rakhyun",
    isFeatured: false,
    views: 3100000,
    rating: 4.7,
    ratingCount: 16000,
    updatedAt: now,
    createdAt: "2023-08-01T00:00:00Z",
  },
  {
    id: "s8",
    title: "Eleceed",
    slug: "eleceed",
    description: "Jiwoo is a kind-hearted young man who harnesses the lightning quick reflexes of a cat to secretly make the world a better place - one saved little child or foster pet at a time.",
    coverImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80",
    type: "MANHWA",
    status: "ONGOING",
    genres: ["Action", "Comedy", "Supernatural"],
    author: "Son Jeho",
    artist: "ZHENA",
    isFeatured: false,
    views: 3800000,
    rating: 4.9,
    ratingCount: 20000,
    updatedAt: now,
    createdAt: "2023-04-01T00:00:00Z",
  }
];

// Helper to generate a fake chapter
const generateChapter = (id: string, seriesId: string, chapNum: number, timeStr: string): Chapter => ({
  id,
  chapterNumber: chapNum,
  pages: [],
  isPublished: true,
  seriesId,
  createdAt: timeStr,
});

export const MOCK_LATEST_UPDATES: LatestUpdate[] = [
  {
    series: MOCK_SERIES[0],
    chapters: [
      generateChapter("c1", "s1", 200, "2 hours ago"),
      generateChapter("c2", "s1", 199, "1 day ago"),
    ]
  },
  {
    series: MOCK_SERIES[1],
    chapters: [
      generateChapter("c3", "s2", 154, "3 hours ago"),
      generateChapter("c4", "s2", 153, "7 days ago"),
    ]
  },
  {
    series: MOCK_SERIES[2],
    chapters: [
      generateChapter("c5", "s3", 3456, "5 hours ago"),
      generateChapter("c6", "s3", 3455, "Yesterday"),
      generateChapter("c7", "s3", 3454, "2 days ago"),
    ]
  },
  {
    series: MOCK_SERIES[3],
    chapters: [
      generateChapter("c8", "s4", 175, "6 hours ago"),
    ]
  },
  {
    series: MOCK_SERIES[4],
    chapters: [
      generateChapter("c9", "s5", 1108, "12 hours ago"),
    ]
  },
  {
    series: MOCK_SERIES[6],
    chapters: [
      generateChapter("c10", "s7", 188, "14 hours ago"),
    ]
  },
  {
    series: MOCK_SERIES[7],
    chapters: [
      generateChapter("c11", "s8", 264, "1 day ago"),
    ]
  },
  {
    series: MOCK_SERIES[5],
    chapters: [
      generateChapter("c12", "s6", 112, "2 days ago"),
    ]
  }
];

export const getFeaturedSeries = () => MOCK_SERIES.filter(s => s.isFeatured);
export const getPopularSeries = () => [...MOCK_SERIES].sort((a, b) => b.views - a.views).slice(0, 10);
export const getLatestUpdates = () => MOCK_LATEST_UPDATES;
export const getSeriesByGenre = (genreStr: string) => genreStr === "All" ? MOCK_SERIES : MOCK_SERIES.filter(s => s.genres.includes(genreStr));
export const getCompletedSeries = () => MOCK_SERIES.filter(s => s.status === "COMPLETED").sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
