export type Role = "USER" | "ADMIN";
export type SeriesType = "MANGA" | "MANHWA" | "MANHUA" | "COMIC";
export type SeriesStatus = "ONGOING" | "COMPLETED" | "HIATUS";
export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  role: Role;
  createdAt: string;
}

export interface Series {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  type: SeriesType;
  status: SeriesStatus;
  genres: string[];
  author?: string;
  artist?: string;
  isFeatured: boolean;
  views: number;
  rating?: number;
  ratingCount?: number;
  latestChapter?: Chapter;
  chapters?: Chapter[];
  updatedAt: string;
  createdAt: string;
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title?: string;
  pages: string[];
  isPublished: boolean;
  seriesId: string;
  series?: Pick<Series, "id" | "title" | "slug" | "coverImage">;
  createdAt: string;
}

export interface LatestUpdate {
  series: Series;
  chapters: Chapter[];
}

export interface Bookmark {
  id: string;
  userId: string;
  seriesId: string;
  series: Series;
}

export interface ReadHistory {
  id: string;
  userId: string;
  seriesId: string;
  chapterId: string;
  pageNumber: number;
  series: Series;
  chapter: Chapter;
  updatedAt: string;
}

export interface Comment {
  id: string;
  content: string;
  userId: string;
  chapterId: string;
  parentId?: string;
  user: Pick<User, "id" | "name" | "avatar">;
  replies?: Comment[];
  createdAt: string;
}

export interface Payment {
  id: string;
  userId: string;
  plan: "MONTHLY" | "YEARLY" | "LIFETIME";
  amount: number;
  currency: string;
  status: PaymentStatus;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: { page: number; limit: number; total: number; };
}
