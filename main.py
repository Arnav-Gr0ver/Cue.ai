from transformers import AutoModelForCausalLM, AutoTokenizer
from huggingface_hub import login
import gradio as gr
from dotenv import load_dotenv
import os

load_dotenv()
token = os.environ.get('TOKEN')

checkpoint = "meta-llama/Llama-3.2-1B-Instruct"
device = "cpu"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForCausalLM.from_pretrained(checkpoint).to(device)

def predict(message, history):
    history.append({"role": "user", "content": message})
    input_text = tokenizer.apply_chat_template(history, tokenize=False)
    inputs = tokenizer.encode(input_text, return_tensors="pt").to(device)  
    outputs = model.generate(inputs, max_new_tokens=100, temperature=0.2, top_p=0.9, do_sample=True)
    decoded = tokenizer.decode(outputs[0])
    response = decoded.split("<|im_start|>assistant\n")[-1].split("<|im_end|>")[0]
    return response

demo = gr.ChatInterface(predict, type="messages")

if __name__ == '__main__':
    login(token=token)
    demo.launch()