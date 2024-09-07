import pandas as pd
import spacy

# Load the dataset with Recipe IDs
df = pd.read_csv('Recipes_with_RecipeIDs.csv')

# Step 1: Fetch non-duplicate ingredient entries
df_unique = df[['Recipe ID', 'Ingredients']].drop_duplicates()

# Load SpaCy model
nlp = spacy.load('en_core_web_sm')

# Function to apply NER on the ingredients
def extract_ingredients(ingredient_text):
    # Ensure ingredient_text is a string
    if pd.isna(ingredient_text):
        return ''
    doc = nlp(ingredient_text)
    ingredients = [ent.text for ent in doc.ents if ent.label_ in ['FOOD','PRODUCT']]  # Adjust label as needed
    return ', '.join(ingredients)

# Apply NER to extract named entities (ingredients)
df_unique['Extracted Ingredients'] = df_unique['Ingredients'].apply(extract_ingredients)

# Save the results to a new CSV
df_unique.to_csv('Extracted_Ingredients_with_RecipeIDs.csv', index=False)

print("NER extraction completed and saved to 'Extracted_Ingredients_with_RecipeIDs.csv'.")
