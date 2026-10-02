
// CASULO COMMUNITY - LOCAL SERVICE
import { CommunityPost, CommunityComment } from "../types";

const STORAGE_KEY = 'casulo_local_community_posts';

const getInitialPosts = (): CommunityPost[] => [
  {
    id: 'p1',
    type: 'question',
    authorId: 'system',
    authorName: 'Mariana • mãe de 4 meses',
    authorAge: 'mãe de 4 meses',
    content: 'Meu bebê não quer dormir de jeito nenhum durante o dia, só quer colo. Alguém passou por isso? É o salto dos 4 meses?',
    likes: 12,
    likedBy: [],
    comments: 3,
    createdAt: new Date().toISOString(),
    reported: false,
    era: 'ERA 2'
  },
  {
    id: 'p2',
    type: 'tip',
    authorId: 'system',
    authorName: 'Ricardo • pai de 1 ano',
    authorAge: 'pai de 1 ano',
    content: 'Dica para introdução alimentar: comecei oferecendo brócolis bem cozidinho e ele amou! O segredo foi não forçar e deixar ele explorar a textura.',
    likes: 25,
    likedBy: [],
    comments: 5,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    reported: false,
    era: 'ERA 2'
  },
  {
    id: 'p3',
    type: 'moment',
    authorId: 'system',
    authorName: 'Beatriz • mãe de 2 anos',
    authorAge: 'mãe de 2 anos',
    content: 'Primeiros passinhos hoje! 👣 Quase não acreditei quando vi ela soltando do sofá e vindo na minha direção. Coração transbordando!',
    likes: 40,
    likedBy: [],
    comments: 8,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    reported: false,
    era: 'ERA 3'
  }
];

export const getLocalPosts = (type: string, sortBy: 'createdAt' | 'likes' = 'createdAt'): CommunityPost[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  let posts: CommunityPost[] = saved ? JSON.parse(saved) : getInitialPosts();
  
  const filtered = posts.filter(p => p.type === type && !p.reported);
  
  return filtered.sort((a, b) => {
    if (sortBy === 'likes') return b.likes - a.likes;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};

export const saveLocalPost = (post: any) => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const posts: CommunityPost[] = saved ? JSON.parse(saved) : getInitialPosts();
  
  const newPost: CommunityPost = {
    ...post,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    likes: 0,
    likedBy: [],
    comments: 0,
    reported: false
  };
  
  posts.push(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return newPost;
};

export const likeLocalPost = (postId: string, userId: string) => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  
  const posts: CommunityPost[] = JSON.parse(saved);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex > -1) {
    const post = posts[postIndex];
    const likedBy = post.likedBy || [];
    const isLiking = !likedBy.includes(userId);
    
    if (isLiking) {
      likedBy.push(userId);
    } else {
      const index = likedBy.indexOf(userId);
      likedBy.splice(index, 1);
    }
    
    post.likedBy = likedBy;
    post.likes = likedBy.length;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};

export const reportLocalPost = (postId: string) => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  
  const posts: CommunityPost[] = JSON.parse(saved);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex > -1) {
    posts[postIndex].reported = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};

export const getLocalComments = (postId: string): CommunityComment[] => {
  const key = `casulo_comments_${postId}`;
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : [];
};

export const addLocalComment = (postId: string, comment: any) => {
  const key = `casulo_comments_${postId}`;
  const saved = localStorage.getItem(key);
  const comments: CommunityComment[] = saved ? JSON.parse(saved) : [];
  
  const newComment: CommunityComment = {
    ...comment,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString()
  };
  
  comments.push(newComment);
  localStorage.setItem(key, JSON.stringify(comments));
  
  // Update post comment count
  const savedPosts = localStorage.getItem(STORAGE_KEY);
  if (savedPosts) {
    const posts: CommunityPost[] = JSON.parse(savedPosts);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex > -1) {
      posts[postIndex].comments = (posts[postIndex].comments || 0) + 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }
  }
  
  return newComment;
};
