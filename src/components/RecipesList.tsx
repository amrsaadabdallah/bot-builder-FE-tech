import recipes from "../db/db.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button.tsx";
import { Badge } from "./ui/badge.tsx";
import SkeletonCard from "./SkeletonCard.tsx";

const RecipesList = () => {
  return (
    <div className='col-span-full'>
      <h2 className='text-3xl font-bold mb-5'>These are our recipes</h2>
      <div className='grid grid-cols-3 gap-8'>
        <SkeletonCard />
        {recipes.map((recipe) => (
          <Card key={recipe.id} className='flex flex-col justify-between'>
            <CardHeader className='flex flex-row gap-4 items-center'>
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt='@shadcn' />
                <AvatarFallback className='uppercase'>
                  {recipe.title.slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div className=''>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant='secondary'>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
