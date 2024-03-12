import { FileObject } from '@supabase/storage-js';

// Filter files to only include PDFs
export const fileFilter = (files: FileObject[]) => {
  return files.filter((file) => {
    return file.name.includes('.jpg');
  });
};
