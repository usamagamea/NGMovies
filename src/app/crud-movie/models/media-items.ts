export interface MediaItem {
  name: string;
  description: string;
  image: string;
  category_id: string;
}

export interface MediaItemResponse {
  mediaItems: MediaItem[];
}
