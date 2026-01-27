from vertexai.preview.generative_models import GenerativeModel
import vertexai

vertexai.init(project="h4vb-abhik", location="us-central1")
model = GenerativeModel("gemini-1.5-flash")

def extract_intent(text: str):
    prompt = f"""
    Extract intent and entities from:
    "{text}"
    Return JSON.
    """
    response = model.generate_content(prompt)
    return response.text
