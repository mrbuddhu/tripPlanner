import { GoogleGenAI, Type } from '@google/genai';

// Get API key with fallback for typo in env var name
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY || 
                import.meta.env.VITE_GOGGLE_GEMINI_AI_API_KEY;

if (!apiKey) {
  console.warn('⚠️ Google Gemini API key not found. Set VITE_GOOGLE_GEMINI_AI_API_KEY environment variable.');
}

// Initialize AI only if API key is available
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const model = 'gemini-2.5-flash';

const travelPlanSchema = {
  type: Type.OBJECT,
  properties: {
    location: { type: Type.STRING },
    best_time_to_visit: { type: Type.STRING },
    travel_plan: {
      type: Type.OBJECT,
      properties: {
        duration: { type: Type.STRING },
        budget_category: { type: Type.STRING },
        hotel_options: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              address: { type: Type.STRING },
              pricing_per_night_approx: {
                type: Type.OBJECT,
                properties: {
                  min: { type: Type.STRING },
                  max: { type: Type.STRING },
                },
              },
              rating: { type: Type.STRING },
              description: { type: Type.STRING },
              image_url: { type: Type.STRING },
            },
          },
        },
        itinerary: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              day: { type: Type.NUMBER },
              title: { type: Type.STRING },
              plan: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    activity: { type: Type.STRING },
                    description: { type: Type.STRING },
                    time_of_day: { type: Type.STRING },
                    travel_time: { type: Type.STRING },
                    ticket_pricing_approx: { type: Type.STRING },
                    image_url: { type: Type.STRING },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  required: ['location', 'best_time_to_visit', 'travel_plan'],
};

export async function chat(history, userMessage) {
  if (!ai) {
    throw new Error('Google Gemini API key is not configured. Please set VITE_GOOGLE_GEMINI_AI_API_KEY environment variable in Vercel project settings.');
  }

  const config = {
    responseMimeType: 'application/json',
    responseSchema: userMessage.toLowerCase().includes('travel plan') ? travelPlanSchema : undefined,
  };
  
  const updatedContents = [
    ...history,
    {
      role: 'user',
      parts: [{ text: userMessage }],
    },
  ];
  
  const response = await ai.models.generateContentStream({
    model,
    config,
    contents: updatedContents,
  });
  
  let fullResponseText = '';
  for await (const chunk of response) {
    fullResponseText += chunk.text;
  }
  
  return fullResponseText;
}