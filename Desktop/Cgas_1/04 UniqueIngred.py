import pandas as pd
from collections import Counter

# Load the dataset
df = pd.read_csv('Recipes_with_RecipeIDs.csv')

# Print column names to check if 'Ingredients' exists
print("Columns in the dataset:", df.columns)

# Adjust 'Ingredients' to the correct column name if needed
Ingredients_column_name = 'Ingredients'  

if Ingredients_column_name in df.columns:
    # Extract Ingredients column
    Ingredients_series = df[Ingredients_column_name]

    # Initialize a list to hold all individual Ingredients
    all_Ingredients = []

    # Process each row in the Ingredients column
    for Ingredients in Ingredients_series.dropna():
        if isinstance(Ingredients, str):
            # Split Ingredients by commas and newlines
            split_Ingredients = [ingredient.strip() for ingredient in Ingredients.split(',') if ingredient.strip()]
            all_Ingredients.extend(split_Ingredients)
    
    # Count occurrences of each unique ingredient
    ingredient_counts = Counter(ingredient.strip() for ingredient in all_Ingredients if ingredient.strip())

    # Convert the count data to a DataFrame
    ingredient_df = pd.DataFrame(ingredient_counts.items(), columns=['Ingredient', 'Frequency'])

    # Sort the DataFrame by frequency in descending order
    ingredient_df = ingredient_df.sort_values(by='Frequency', ascending=False)

    # Save the DataFrame to a CSV file
    ingredient_df.to_csv('Unique_Ingredients_Frequencies.csv', index=False)

    print("Unique Ingredients and their frequencies have been saved to 'Unique_Ingredients_Frequencies.csv'.")
else:
    print(f"Column '{Ingredients_column_name}' not found in the dataset.")
