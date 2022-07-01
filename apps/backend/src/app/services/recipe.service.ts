import { Repository } from 'typeorm';
import Recipe, { NewRecipeInput, UpdateRecipeInput } from '../entities/Recipe';
import AppDataSource from './Database';

export default class RecipeService {
  private recipeRepository: Repository<Recipe>;

  constructor() {
    this.recipeRepository = AppDataSource.getRepository(Recipe);
  }

  async getRecipe(id: number): Promise<Recipe> {
    return this.recipeRepository.findOne({
      where: { id },
    });
  }

  async getRecipes(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async createRecipe(newRecipeData: NewRecipeInput): Promise<Recipe> {
    const recipe = new Recipe();
    recipe.name = newRecipeData.name;
    recipe.description = newRecipeData.description;
    recipe.ingredients = newRecipeData.ingredients;

    return this.recipeRepository.save(recipe);
  }

  async updateRecipe(updateRecipeData: UpdateRecipeInput): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({
      where: { id: updateRecipeData.id },
    });

    recipe.name = updateRecipeData.name;
    recipe.description = updateRecipeData.description;
    recipe.ingredients = updateRecipeData.ingredients;

    return this.recipeRepository.save(recipe);
  }

  async deleteRecipe(id: number): Promise<boolean> {
    await this.recipeRepository.delete(id);
    return true;
  }
}
