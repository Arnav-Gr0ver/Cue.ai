import gradio as gr
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
#from pymongo import MongoClient

#client = MongoClient("mongodb://localhost:27017/")
#db = client["cim_database"]
#doc_collection = db["cim_documents"]
#query_collection = db["cim_queries"]

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.2-1B-Instruct")
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.2-1B-Instruct", torch_dtype=torch.float16, device_map="auto")

def review_cim(file, user_input):
    with open(file.name, "r", encoding="utf-8") as f:
        document_text = f.read()
    
    #doc_entry = {"filename": file.name, "content": document_text}
    #doc_id = doc_collection.insert_one(doc_entry).inserted_id
    
    prompt = (
        "You are an AI specialized in reviewing Confidential Information Memorandums (CIMs). "
        "Only answer questions related to CIMs, investment risks, financials, and company overviews. "
        "If a question is out of scope, respond with 'I can only answer questions related to CIMs.'\n\n"
        f"CIM Document:\n{document_text}\n\nUser Question: {user_input}\n\nAI Response:"
    )
    
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    output = model.generate(**inputs, max_length=512)
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    
    #query_entry = {"document_id": doc_id, "query": user_input, "response": response}
    #query_collection.insert_one(query_entry)
    
    return response

demo = gr.Interface(
    fn=review_cim,
    inputs=[gr.File(label="Upload CIM Document"), gr.Textbox(label="Ask a Question")],
    outputs=gr.Textbox(label="AI Response"),
    title="Confidential Information Memorandum (CIM) Reviewer",
    description="Upload a CIM document and ask questions related to investment analysis."
)

demo.launch()
