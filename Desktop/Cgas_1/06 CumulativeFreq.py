import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('Recipes_with_RecipeIDs.csv')

# Ensure 'Ingredients' column is treated as string and handle NaN values
df['Ingredients'] = df['Ingredients'].astype(str).fillna('')

# Calculate the number of ingredients per recipe
df['Number of Ingredients'] = df['Ingredients'].str.split(',').apply(lambda x: len(x) if isinstance(x, list) else 0)

# Compute the CDF
sorted_sizes = df['Number of Ingredients'].sort_values()
cdf = sorted_sizes.rank(pct=True) / len(sorted_sizes)

# Create a DataFrame for CDF data
cdf_df = pd.DataFrame({
    'Number of Ingredients': sorted_sizes,
    'CDF': cdf
})

# Save the CDF data to a CSV file
cdf_df.to_csv('cdf_recipe_size.csv', index=False)

# Plot the CDF
plt.figure(figsize=(12, 6))
plt.plot(sorted_sizes, cdf, marker='o', linestyle='-', color='b')
plt.xlabel('Number of Ingredients')
plt.ylabel('Cumulative Probability')
plt.title('Cumulative Distribution Function of Recipe Size')
plt.grid(True, which='both', linestyle='--', linewidth=0.5)

# Save the plot as PNG
plt.savefig('cdf_recipe_size.png', dpi=300)

plt.show()
