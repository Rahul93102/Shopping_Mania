import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('Recipes_with_RecipeIDs.csv')

# Specify the column name for ingredients
Ingredients_column_name = 'Ingredients'

# Check if the 'Ingredients' column exists
if Ingredients_column_name in df.columns:
    # Count the number of Ingredients for each recipe
    df['Num_Ingredients'] = df[Ingredients_column_name].apply(lambda x: len(x.split(',')) if pd.notna(x) else 0)

    # Calculate the average number of Ingredients and round to the nearest integer
    average_size = round(df['Num_Ingredients'].mean())

    # Plot the distribution of recipe sizes
    plt.figure(figsize=(10, 6))
    plt.hist(df['Num_Ingredients'], bins=range(1, df['Num_Ingredients'].max() + 2), edgecolor='black', alpha=0.7)
    plt.title('Recipe Size Distribution')
    plt.xlabel('Number of Ingredients')
    plt.ylabel('Number of Recipes')
    plt.xticks(range(1, df['Num_Ingredients'].max() + 1))  # Set x-ticks to integer values
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    
    # Save the plot as a PNG file
    plt.savefig('Recipe_Size_Distribution.png', format='png', dpi=300)
    plt.show()

    # Print the average recipe size
    print(f"The average recipe size is {average_size} Ingredients (rounded to the nearest integer).")

    # Create a DataFrame for the recipe size distribution
    size_distribution = df['Num_Ingredients'].value_counts().sort_index().reset_index()
    size_distribution.columns = ['Number of Ingredients', 'Number of Recipes']

    # Save the DataFrame to a CSV file
    size_distribution.to_csv('Recipe_Size_Distribution.csv', index=False)

    print("The recipe size distribution has been saved to 'Recipe_Size_Distribution.csv'.")
else:
    print(f"Column '{Ingredients_column_name}' not found in the dataset.")
