import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

const FetchResponse = ({ steps, triggerNextStep }) => {
  const [response, setResponse] = useState('Fetching your response...');

  useEffect(() => {
    const fetchResponse = async () => {
      const question = steps['2'].value; // Assuming user entered query in step 2

      // Replace with your Vertex AI model endpoint and API key
      const vertexAiEndpoint = 'https://asia-south1-aiplatform.googleapis.com';
      const vertexAiApiKey = 'AIzaSyDxbYzpP8C3VNy-XKnTQhZC2i1koVzulnI';

      // Assuming your model accepts text inputs and returns generated text
      const prompt = `Answer the user's question in a comprehensive and informative way: ${question}`; // Adjust prompt as needed

      try {
        const apiResponse = await axios.post(vertexAiEndpoint + ':predict', {
          instances: [{ text: prompt }] 
        }, {
          headers: {
            'Authorization': `Bearer ${vertexAiApiKey}`,
            'Content-Type': 'application/json' 
          }
        });

        const generatedText = apiResponse.data.predictions[0].generated_text.trim();
        setResponse(generatedText);
      } catch (error) {
        setResponse('Sorry, I couldn\'t generate a response at the moment.');
        console.error('Vertex AI API Error:', error); 
      } finally {
        triggerNextStep();
      }
    };
    fetchResponse();
  }, [steps, triggerNextStep]);

  return (
    <div>
      {response}
    </div>
  );
};



const steps = [
  {
    id: '1',
    message: 'Hello! What would you like to ask me?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3' 
  },
  {
    id: '3',
    component: <FetchResponse />,
    asMessage: true, 
    end: true 
  }
];

const theme = {
  background: '#A580CA',
  headerBgColor: '#301934',
  headerFontSize: '20px',
  botBubbleColor: '#080121',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#080121',
  userFontColor: 'white',
};

const config = {
  botAvatar: "https://t4.ftcdn.net/jpg/04/46/38/69/360_F_446386956_DiOrdcxDFWKWFuzVUCugstxz0zOGMHnA.jpg",
  floating: true,
};

function Chatbot() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="ChatBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default React.memo(Chatbot);
