import { Max, Min } from 'class-validator';
import { ArgsType, Field, ID, InputType, Int, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Recipe from './Recipe';

@InputType()
export class NewIngredientInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class UpdateIngredientInput extends NewIngredientInput {
  @Field((type) => ID)
  id: number;
}

@ArgsType()
export class IngredientsArgs {
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
export default class Ingredient {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @ManyToMany((type) => Recipe, (recipe) => recipe.ingredients, {
    nullable: true,
  })
  // @Field((type) => [Recipe])
  recipes?: Recipe[];
}
