import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import Ingredient, {
  NewIngredientInput,
  IngredientsArgs,
  UpdateIngredientInput,
} from '../entities/Ingredient';
import IngredientService from '../services/ingredient.service';

@Resolver((of) => Ingredient)
export default class IngredientResolver {
  private ingredientService: IngredientService;

  constructor() {
    this.ingredientService = new IngredientService();
  }

  // @FieldResolver()
  // async ingredients(@Root() ingredient: Ingredient): Promise<Ingredient[]> {
  //   return ingredient.ingredients;
  // }

  @Query((returns) => Ingredient)
  async ingredient(@Arg('id') id: number): Promise<Ingredient> {
    return this.ingredientService.getIngredient(id);
  }

  @Query((returns) => [Ingredient])
  async ingredients(@Args() { skip, take }: IngredientsArgs): Promise<Ingredient[]> {
    return this.ingredientService.getIngredients();
  }

  @Mutation((returns) => Ingredient)
  async createIngredient(
    @Arg('newIngredientData') newIngredientData: NewIngredientInput
  ): Promise<Ingredient> {
    return this.ingredientService.createIngredient(newIngredientData);
  }

  @Mutation((returns) => Ingredient)
  async updateIngredient(
    @Arg('updateIngredientData') updateIngredientData: UpdateIngredientInput
  ): Promise<Ingredient> {
    return this.ingredientService.updateIngredient(updateIngredientData);
  }

  @Mutation((returns) => Boolean)
  async deleteIngredient(@Arg('id') id: number): Promise<boolean> {
    return this.ingredientService.deleteIngredient(id);
  }
}
