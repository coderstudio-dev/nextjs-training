type USER = {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
};

export interface IArticleData {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url?: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image?: string | null;
  social_image: string | null;
  canonical_url?: string | null;
  created_at: string;
  edited_at?: string | null;
  crossposted_at: string | null;
  published_at: string | null;
  last_comment_at: string | null;
  reading_time_minutes: number;
  tag_list?: Array<string>;
  tags?: Array<string>;
  body_html: string;
  body_markdown: string;
  user: USER;
}
