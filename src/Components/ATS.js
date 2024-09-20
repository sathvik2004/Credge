import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { PDFDocument } from 'pdf-lib';
import { createCanvas } from 'canvas';
import axios from 'axios';
export default function ATS() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Function to convert PDF pages to images and extract text using Tesseract
  const extractTextFromPDF = async (file) => {
    try {
      const pdfDoc = await PDFDocument.load(await file.arrayBuffer());
      const numPages = pdfDoc.getPageCount();
      const texts = [];

      for (let i = 0; i < numPages; i++) {
        const page = pdfDoc.getPage(i);
        const { width, height } = page.getSize();
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        const imageData = await page.render({ canvasContext: context, viewport: page.getViewport({ scale: 1 }) }).promise;
        const imgDataUrl = canvas.toDataURL('image/png');

        const { data: { text } } = await Tesseract.recognize(imgDataUrl, 'eng');
        texts.push(text);
      }

      return texts.join('\n');
    } catch (err) {
      console.error('Error extracting text from PDF:', err);
      setError('Failed to extract text from the PDF.');
      return null;
    }
  };

  // Function to get response from Google API
  const getGeminiResponse = async (inputPrompt) => {
    try {
      const response = await axios.post('https://generativeai.googleapis.com/v1/models/gemini-pro:generateText', {
        prompt: {
          text: inputPrompt
        }
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (err) {
      console.error('Error fetching response from Google API:', err);
      setError('Failed to get response from the API.');
      return null;
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!resumeFile || !jobDescription || !apiKey) {
      setError('Please upload a resume, enter a job description, and provide an API key.');
      return;
    }

    setError(null);
    setResponse(null);

    // Extract text from the uploaded resume PDF using OCR
    const resumeText = await extractTextFromPDF(resumeFile);

    if (!resumeText) {
      return;
    }

    // Prepare the input prompt for the Google API
    const inputPrompt = `
      Hey Act Like a skilled or very experienced ATS (Application Tracking System)
      with a deep understanding of the tech field, software engineering, data science, data analyst,
      and big data engineering. Your task is to evaluate the resume based on the given job description.
      You must consider the job market is very competitive and you should provide the 
      best assistance for improving the resumes. Assign the percentage Matching based 
      on JD and the missing keywords with high accuracy.
      resume:${resumeText}
      description:${jobDescription}

      I want the response in one single string having the structure
      {"JD Match":"%","MissingKeywords":[],"Profile Summary":""}
    `;

    // Fetch the response from the Google API
    const apiResponse = await getGeminiResponse(inputPrompt);

    if (apiResponse) {
      setResponse(apiResponse);
    }
  };

  return (
    <div className="resume-matcher">
      <h2>Resume Matcher ATS</h2>

      <label htmlFor="jobDescription">Job Description:</label>
      <textarea
        id="jobDescription"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste the Job Description here"
        rows="6"
      />

      <label htmlFor="resumeFile">Upload Your Resume (PDF):</label>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setResumeFile(e.target.files[0])}
      />

      <label htmlFor="apiKey">Google API Key:</label>
      <input
        type="password"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter your Google API Key"
      />

      <button onClick={handleSubmit}>Submit</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {response && (
        <div className="response">
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
