import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import Recipe, {
  NewRecipeInput,
  RecipesArgs,
  UpdateRecipeInput,
} from '../entities/Recipe';
import RecipeService from '../services/recipe.service';

@Resolver((of) => Recipe)
export default class RecipeResolver {
  private recipeService: RecipeService;

  constructor() {
    this.recipeService = new RecipeService();
  }

  // @FieldResolver()
  // async ingredients(@Root() recipe: Recipe): Promise<Ingredient[]> {
  //   return recipe.ingredients;
  // }

  @Query((returns) => Recipe)
  async recipe(@Arg('id') id: number): Promise<Recipe> {
    return this.recipeService.getRecipe(id);
  }

  @Query((returns) => [Recipe])
  async recipes(@Args() { skip, take }: RecipesArgs): Promise<Recipe[]> {
    return this.recipeService.getRecipes();
  }

  @Mutation((returns) => Recipe)
  async createRecipe(
    @Arg('newRecipeData') newRecipeData: NewRecipeInput
  ): Promise<Recipe> {
    return this.recipeService.createRecipe(newRecipeData);
  }

  @Mutation((returns) => Recipe)
  async updateRecipe(
    @Arg('updateRecipeData') updateRecipeData: UpdateRecipeInput
  ): Promise<Recipe> {
    return this.recipeService.updateRecipe(updateRecipeData);
  }

  @Mutation((returns) => Boolean)
  async deleteRecipe(@Arg('id') id: number): Promise<boolean> {
    return this.recipeService.deleteRecipe(id);
  }
}
