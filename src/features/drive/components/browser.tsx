import React from 'react';
import useSWR from 'swr';
import type { FileObject } from '@supabase/storage-js';

// utils
import { supabase } from '@/utils/supabase';
import { Item } from './item';

// fetch the current user
const userFetcher = async () => await supabase.auth.getUser();

// fetch the current user's files
const storageFetcher = async () =>
  await supabase.storage
    .from('test-bucket')
    .list('373d0ca3-6527-4a59-a0ec-36c6a4d1f828', {
      limit: 10,
    });

export const Browser = () => {
  const user = useSWR('user', userFetcher);
  const files = useSWR('storage', storageFetcher);

  if (user.error && files.error) return <div>failed to load</div>;
  if (user.isLoading && files.isLoading) return <div>loading...</div>;

  return (
    <div className="@sm:grid-cols-3 @md:grid-cols-5 @xs:md:grid-cols-2 grid grid-cols-1 gap-2 border rounded-md">
      {[...Array(8)].map((file: FileObject, key: React.Key) => (
        <Item key={key} />
      ))}
    </div>
  );
};
