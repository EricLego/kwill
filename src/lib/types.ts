// User type
export interface User {
  id: string;
  username: string;
  memberSince: Date;
}

// Journal Entry type
export interface JournalEntry {
  id: string;
  userId: string;
  content: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
}

// Like type
export interface Like {
  id: string;
  entryId: string;
  userId: string;
  createdAt: Date;
}