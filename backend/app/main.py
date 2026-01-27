from fastapi import FastAPI
from app.gemini import extract_intent
from app.rules import decide_next_step

app = FastAPI()

@app.post("/process")
def process_input(payload: dict):
    text = payload["text"]
    session_id = payload["session_id"]

    intent_data = extract_intent(text)
    response = decide_next_step(session_id, intent_data)

    return response
