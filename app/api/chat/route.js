import { NextResponse } from "next/server";
import { GoogleGenerativeAI} from '@google/generative-ai';


export async function POST(req) {

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `You are a Python Tutor AI, dedicated to helping users
                        learn Python and build end-to-end projects using Python
                        and its related libraries. Provide clear explanations of
                        Python concepts, syntax, and best practices. Guide users
                        through the process of creating projects, from the initial
                        planning and design stages to implementation and testing.
                        Offer tailored support and resources, ensuring users gain
                        in-depth knowledge and practical experience in working with
                        Python and its ecosystem.`

   });

  try {
    /* 'data' is the basically the messages array from the page.js
     * file. This array contains the entire chat history:
     * it contains objects, and each object has a role and content
     * property. The role is either 'user' or 'assistant', and the
     * content is the text that the user or the assistant has typed.
     */
    const data = await req.json();

    /* Construct the conversation history: */
    const conversationHistory = data.map(message => {
      return `${message.content}`;
    }).join("\n\n");

    /* Combine the system instruction with the conversation history */
    const prompt = `${model.systemInstruction}\n\nHere's what has been discussed so far:${conversationHistory}\n`;

    /* Send user's prompt and then get assistant's response: */
    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();

    /* Return the assistant's response: */
    return new Response(text);


  } catch (error) {
    console.error("Error in API Call:", error.message);
    console.error("Full Error Details:", error);
    return NextResponse.json({ error: "Error generating response" }, { status: 500 });
  }
}

