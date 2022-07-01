import { Repository } from 'typeorm';
import Ingredient, { NewIngredientInput, UpdateIngredientInput } from '../entities/Ingredient';
import AppDataSource from './Database';

export default class IngredientService {
  private ingredientRepository: Repository<Ingredient>;

  constructor() {
    this.ingredientRepository = AppDataSource.getRepository(Ingredient);
  }

  async getIngredient(id: number): Promise<Ingredient> {
    return this.ingredientRepository.findOne({
      where: { id },
    });
  }

  async getIngredients(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  async createIngredient(newIngredientData: NewIngredientInput): Promise<Ingredient> {
    const ingredient = new Ingredient();
    ingredient.name = newIngredientData.name;
    ingredient.description = newIngredientData.description;

    return this.ingredientRepository.save(ingredient);
  }

  async updateIngredient(updateIngredientData: UpdateIngredientInput): Promise<Ingredient> {
    const ingredient = await this.ingredientRepository.findOne({
      where: { id: updateIngredientData.id },
    });

    ingredient.name = updateIngredientData.name;
    ingredient.description = updateIngredientData.description;

    return this.ingredientRepository.save(ingredient);
  }

  async deleteIngredient(id: number): Promise<boolean> {
    await this.ingredientRepository.delete(id);
    return true;
  }
}
