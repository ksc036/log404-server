export interface CreatePostDTO {
  title: string;
  content: string;
  thumbnailUrl: string;
  desc: string;
  visibility: boolean;
  postUrl: string;
  userId?: number;
  tags?: string[];
}

export interface UpdatePostDTO {
  id: number;
  title: string;
  content: string;
  thumbnailUrl: string;
  desc: string;
  visibility: boolean;
  postUrl: string;
  userId: number;
  tags?: string[];
}
