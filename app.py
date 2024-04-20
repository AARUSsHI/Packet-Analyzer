from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle


from langchain_community.utilities import WikipediaAPIWrapper
from langchain_community.llms import GooglePalm
from langchain.prompts import PromptTemplate
from langchain_community.llms import GooglePalm

import pickle
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# api_key="AIzaSyCIVgLu-1lfBHFqaHXGhzxEDmq3hFrU4bw"
# llm = GooglePalm(google_api_key=api_key,temprature=0.6)
# This is my "103.216.15.12" source ip address and this is my destination Ip address "84.9.164.252" .
# my source port is "31225" destination port is "17616" protocol is "icmp" and 
# packet length is "503" and packet type is "Data" 
# on the basis of this generate [ 'Malware Indicators', 'Anomaly Scores', 'Attack Type','Action Taken', 'Severity Level','Network Segment' ] in list fromat



file_path = 'malware_indicators.pkl'
with open(file_path, 'rb') as f:
    loaded_model = pickle.load(f)

print("Model loaded successfully.")


@app.route('/convert', methods=['POST'])
def convert():

    api_key="AIzaSyCIVgLu-1lfBHFqaHXGhzxEDmq3hFrU4bw"
    llm = GooglePalm(google_api_key=api_key,temprature=0.7)

    if request.method == 'POST':
        source_ip = request.json.get('source_ip')
        destination_ip = request.json.get('destination_ip')
        source_port = request.json.get('source_port')
        destination_port = request.json.get('destination_port')
        protocol = request.json.get('protocol')
        packet_length = request.json.get('packet_length')
        packet_type = request.json.get('packet_type')
        
        input_values = {
            "source_ip" : source_ip,
            "destination_ip": destination_ip,
            "source_port" : source_port,
            "destination_port" : destination_port,
            "protocol" : protocol,
            "packet_length" : packet_length,
            "packet_type" : packet_type
        }

        print(input_values)
        

        prompt_template_name = PromptTemplate(
                input_variables=["source_ip" ,"destination_ip","source_port" ,"destination_port","protocol","packet_length" ,"packet_type"],
                template='''This is my {source_ip} source ip address and this is my destination Ip address {destination_ip} .
                            my source port is {source_port} destination port is {destination_port} protocol is {protocol} and 
                            packet length is {packet_length} and packet type is {packet_type}
                            on the basis of this generate anything except none for 'Malware Indicators', 'Anomaly Scores', 'Attack Type','Action Taken', 'Severity Level','Network Segment' by your choice in this format => 
                            Source IP Address: {source_ip}
                            Destination IP Address: {destination_ip}
                            Source Port: {source_port}
                            Destination Port: {destination_port}
                            Protocol: {protocol}
                            Packet Length: {packet_length}
                            Packet Type: {packet_type}
                            
                            Malware Indicators:IoC Detected
                            Anomaly Scores:
                                ICMP: 10
                                Data: 10
                                Total: 20
                            Attack Type:ICMP Flood
                            Action Taken:Blocked
                            Severity Level:High
                            Network Segment:Untrusted '''
        )
        

        formatted_prompt=prompt_template_name.format(**input_values)
        print(formatted_prompt)

        output = llm(formatted_prompt)
        
        output = output.strip('**').replace("","")
        output = output.strip('**').replace("","")
        print(output)
        
        input_values = {
            "output": output,
        }
        prompt_template_name1 = PromptTemplate(
                input_variables = ["output"],
                template='''Generate information in 30 words about [ 'Malware Indicators', 'Anomaly Scores', 'Attack Type','Action Taken', 'Severity Level','Network Segment' ] from {output} '''
        )
        
        formatted_prompt1=prompt_template_name1.format(**input_values)
        print(formatted_prompt1)
        
        output1 = llm(formatted_prompt1)
        
        print(output1)
        
        input_values = {
            "output": output1,
        }
        
        prompt_template_name2 = PromptTemplate(
                input_variables = ["output"],
                template='''write about attack type in 150 words get attack type from {output} remove all "*"  '''
        )
        
        formatted_prompt2=prompt_template_name2.format(**input_values)
        print(formatted_prompt2)
        
        output2 = llm(formatted_prompt2)
        print(output2)
        # output2.remove("*")
        
        # print(llm("This is my 103.216.15.12 source ip address and this is my destination Ip address 84.9.164.252.My source port is 31225 destination port is 17616 protocol is ICMP and packet length is 503 and packet type is Data on the basis of this generate [ 'Malware Indicators', 'Anomaly Scores', 'Attack Type','Action Taken', 'Severity Level'] "))
        
        dict={}
        dict.update({"output1":output , "output2":output1,"output3":output2})



    return jsonify(dict)



if __name__ == "__main__":
    app.run(debug=True,port=8001)