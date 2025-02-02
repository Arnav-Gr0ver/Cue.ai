from flask import Flask, render_template
import gradio as gr
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.2-1B-Instruct")
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.2-1B-Instruct", torch_dtype=torch.float16, device_map="auto")

def review_cim(file, user_input):
    with open(file.name, "r", encoding="utf-8") as f:
        document_text = f.read()
    
    prompt = (
        "You are an AI specialized in reviewing Confidential Information Memorandums (CIMs). "
        "Only answer questions related to CIMs, investment risks, financials, and company overviews. "
        "If a question is out of scope, respond with 'I can only answer questions related to CIMs.'\n\n"
        f"CIM Document:\n{document_text}\n\nUser Question: {user_input}\n\nAI Response:"
    )
    
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    output = model.generate(**inputs, max_length=512)
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    
    return response

gradio_ui = gr.Interface(
    fn=review_cim,
    inputs=[gr.File(label="Upload CIM Document"), gr.Textbox(label="Ask a Question")],
    outputs=gr.Textbox(label="AI Response"),
    title="Finagen AI - Automated Financial Document Review",
    description="Upload a CIM document and let AI analyze investment insights."
)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/gradio")
def gradio():
    return gradio_ui.launch(share=False, inline=True)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
