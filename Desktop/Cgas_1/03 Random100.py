import pandas as pd
import random

# Step 1: Load the dataset
df = pd.read_csv('Recipes_with_RecipeIDs.csv')

# Step 2: Extract Recipe IDs and Ingredients
# Assuming the dataset has 'Recipe ID' and 'ingredients' columns
# If your columns have different names, adjust accordingly
df = df[['Recipe ID', 'Ingredients']]

# Step 3: Clean and split Ingredients
# Assuming 'Ingredients' is a single string per recipe, split them into individual Ingredients
df['Ingredients'] = df['Ingredients'].apply(lambda x: x.split('\n') if isinstance(x, str) else [])

# Step 4: Randomly choose 100 recipes
sample_df = df.sample(n=100, random_state=1)  # random_state for reproducibility

# Step 5: Prepare data for saving
# Create a list to hold the formatted strings
formatted_data = []

# Iterate over the sample DataFrame and format the data
for index, row in sample_df.iterrows():
    recipe_id = row['Recipe ID']
    for ingredient in row['Ingredients']:
        ingredient_cleaned = ingredient.strip()  # Clean up any extra whitespace
        if ingredient_cleaned:  # Ensure the ingredient is not empty
            formatted_data.append(f"{recipe_id}—{ingredient_cleaned}")

# Step 6: Save the formatted data to a text file
with open('Recipe_Ingredients.txt', 'w') as file:
    for line in formatted_data:
        file.write(line + '\n')

print("Recipe ID and ingredient information saved to 'Recipe_Ingredients.txt'.")
