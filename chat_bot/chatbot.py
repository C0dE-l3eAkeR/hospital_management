import random
import json
import pickle
import numpy as np

import nltk
from nltk.stem import WordNetLemmatizer

from tensorflow import keras
import keras.api._v2.keras as keras
from keras import Sequential
from keras import layers
from keras.layers import Dense, Activation, Dropout
from keras.optimizers import SGD
from keras.models import load_model
nltk.download('punkt')
nltk.download('wordnet')

lemmatizer = WordNetLemmatizer()

intents = json.loads(open('intents.json').read())
words = pickle.load(open('words.pkl','rb'))
classes = pickle.load(open('classes.pkl','rb'))

model =load_model('chatbot_model.h5')

def clean_up_sentences(sentence):
    sentence_word=nltk.tokenize.word_tokenize(sentence)
    sentence_word= [lemmatizer.lemmatize(word) for word in sentence_word]
    return sentence_word

def bag_of_words(sentence):
    sentence_word=clean_up_sentences(sentence)
    bag= [0]*len(words)
    for w in sentence_word:
        for i, word in enumerate(words):
            if word == w:
                bag[i]=1
    
    return np.array(bag)

def predict_class(sentence):
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    
    ERROR_T = 0.25
    result = [[i,r] for i, r in enumerate(res) if r > ERROR_T]

    result.sort(key=lambda x: x[1], reverse=True )
    return_list=[]
    for r in result:
        return_list.append({'intent':classes[r[0]], 'probability': str(r[1])})
   
    return return_list

def get_response(intents_list, intents_json):
    tag =  intents_list[0]['intent']
    list_of_intents = intents_json['intents']
    result=""
    for i in list_of_intents:
        if i['tag'] == tag:
           result = random.choice(i['responses']) 
           break
    return result


while True : 
    message = input("")
    
    ints = predict_class(message)
    res = get_response(ints, intents)
    
    print(res)  








































    