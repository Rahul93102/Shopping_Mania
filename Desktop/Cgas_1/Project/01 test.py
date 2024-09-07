import pandas as pd

# Load the dataset
df = pd.read_csv('IndianFoodDatasetCSV.csv')

print(df.head())
print(len(df)) 

df['Recipe ID'] = ['Recipe ' + str(i + 1) for i in range(len(df))]

# Save the updated file with unique Recipe IDs
df.to_csv('Recipes_with_RecipeIDs.csv', index=False)

print("Unique Recipe IDs have been assigned and saved to 'Recipes_with_RecipeIDs.csv'.")
