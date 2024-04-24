import { Skeleton } from '@mui/material';

export const CardItemSkeleton = () => {
  return (
    <article className="flex justify-between items-center flex-col p-8 border border-1 border-elements">
        <Skeleton 
          height={196}
          width={196}
          variant="rectangular"
          style={{ marginBottom: 32 }}
        />
        <Skeleton 
          height={40}
          width={'80%'}
          variant="rectangular"
          style={{ marginBottom: 0 }}
        />
        
        <Skeleton 
          height={32}
          width={'80%'}
          variant="rectangular"
          style={{ marginBottom: 18 }}
        />

        <Skeleton 
          height={111}
          width={'80%'}
          variant="rectangular"
        />
      </article>
  );
}