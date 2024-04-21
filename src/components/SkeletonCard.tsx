import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <Card className='flex flex-col justify-between bg-primary'>
      <CardHeader className='flex flex-row gap-4 items-center'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='flex-grow'>
          <Skeleton className='h-4 mb-2' />
          <Skeleton className='h-4 w-32' />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-6 flex-grow mb-3' />
        <Skeleton className='h-6 flex-grow mb-3' />
        <Skeleton className='h-6 flex-grow' />
      </CardContent>
      <CardFooter>
        <Skeleton className='h-10 w-24 ' />
      </CardFooter>
    </Card>
  );
};

export default SkeletonCard;
