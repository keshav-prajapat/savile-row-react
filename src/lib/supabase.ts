import { createClient } from '@supabase/supabase-js';

// These would be your actual Supabase project URL and anon key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your-supabase-url';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface MediaFile {
  id: string;
  name: string;
  type: 'image' | 'video';
  url: string;
  file_path: string;
  size: number;
  uploaded_at: string;
  uploaded_by: string;
}

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  type: 'hero' | 'product' | 'journal' | 'heritage';
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

// Authentication functions
export const signInAdmin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

// Media management functions
export const uploadMedia = async (file: File, bucket: string = 'media') => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return { data, publicUrl, filePath };
};

export const getMediaFiles = async () => {
  const { data, error } = await supabase
    .from('media_files')
    .select('*')
    .order('uploaded_at', { ascending: false });

  return { data, error };
};

export const deleteMediaFile = async (id: string, filePath: string) => {
  // Delete from storage
  const { error: storageError } = await supabase.storage
    .from('media')
    .remove([filePath]);

  if (storageError) {
    throw storageError;
  }

  // Delete from database
  const { error: dbError } = await supabase
    .from('media_files')
    .delete()
    .eq('id', id);

  return { error: dbError };
};

// Content management functions
export const getContent = async (type?: string) => {
  let query = supabase.from('content_items').select('*');
  
  if (type) {
    query = query.eq('type', type);
  }
  
  const { data, error } = await query.order('updated_at', { ascending: false });
  return { data, error };
};

export const createContent = async (content: Omit<ContentItem, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('content_items')
    .insert([content])
    .select();

  return { data, error };
};

export const updateContent = async (id: string, updates: Partial<ContentItem>) => {
  const { data, error } = await supabase
    .from('content_items')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select();

  return { data, error };
};

export const deleteContent = async (id: string) => {
  const { error } = await supabase
    .from('content_items')
    .delete()
    .eq('id', id);

  return { error };
};