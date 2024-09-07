import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('Recipes_with_RecipeIDs.csv')

# Calculate frequencies of ingredients
ingredient_freq = df['Ingredients'].str.split(',', expand=True).stack().value_counts()

# Normalize frequencies
total_ingredients = ingredient_freq.sum()
normalized_freq = ingredient_freq / total_ingredients

# Sort frequencies
ranked_ingredients = normalized_freq.sort_values(ascending=False).reset_index()
ranked_ingredients.columns = ['Ingredient', 'Normalized Frequency']

# Create rank column
ranked_ingredients['Rank'] = range(1, len(ranked_ingredients) + 1)

# Save the frequency-rank data to a CSV file
ranked_ingredients.to_csv('frequency_rank_distribution.csv', index=False)

# Plot the frequency-rank distribution
plt.figure(figsize=(12, 6))
plt.plot(ranked_ingredients['Rank'], ranked_ingredients['Normalized Frequency'], marker='o', linestyle='-', color='b')
plt.yscale('log')
plt.xscale('log')
plt.xlabel('Rank (log scale)')
plt.ylabel('Normalized Frequency (log scale)')
plt.title('Frequency-Rank Distribution of Ingredients')
plt.grid(True, which='both', linestyle='--', linewidth=0.5)
plt.xticks(ticks=[1, 10, 100, 1000], labels=['1', '10', '100', '1000'])
plt.yticks(ticks=[0.01, 0.1, 1], labels=['0.01', '0.1', '1'])

# Save the plot as PNG and SVG
plt.savefig('frequency_rank_distribution.png', dpi=300)
plt.savefig('frequency_rank_distribution.svg')

plt.show()
