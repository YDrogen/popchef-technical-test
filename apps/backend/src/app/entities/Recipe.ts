import { Max, Min } from 'class-validator';
import { ArgsType, Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Ingredient, { UpdateIngredientInput } from './Ingredient';

@InputType()
export class NewRecipeInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => [UpdateIngredientInput], { nullable: true })
  ingredients: Ingredient[];
}

@InputType()
export class UpdateRecipeInput extends NewRecipeInput {
  @Field((type) => ID)
  id: number;
}

@ArgsType()
export class RecipesArgs {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(50)
  take = 10;
}

@Entity()
@ObjectType()
export default class Recipe {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @ManyToMany((type) => Ingredient, (ingredient) => ingredient.recipes, {
    nullable: true,
  })
  @Field((type) => [Ingredient], { nullable: true })
  ingredients?: Ingredient[];
}
