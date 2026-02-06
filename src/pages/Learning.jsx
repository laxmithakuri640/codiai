import { GoogleGenAI } from "@google/genai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");

  // NEW: message state
  const [messages, setMessages] = useState([]);

  const handleRequest = async () => {
    if (!topic) {
      return console.log("Select topic first");
    }
    if (!userRequest || userRequest.trim() === "") {
      return console.log("type your question");
    }

    localStorage.setItem("topic", JSON.stringify(topic));

    const currentRequest = userRequest.trim();

    // show user message right side
    setMessages((prev) => [
      ...prev,
      { type: "user", text: currentRequest }
    ]);

    setUserRequest("");

    const prompt = ` You are an expert ${topic} educator with 10+ years of teaching experience. Respond to this user request: "${currentRequest}" If the user is making casual conversation or greeting, respond naturally and conversationally. For educational requests, provide a clear, structured response following this exact format:  OUTPUT FORMAT REQUIREMENTS: - Return ONLY valid JSON with no additional text outside the JSON structure. - Output must be an array containing exactly 1 object. - The object MUST strictly follow this schema:  {   "summary": "A concise 4-word headline summary from user question if question is one or two word use your intellegence and make it 4-word",   "answer": "Your complete response here following the three-part structure below" }  RESPONSE RULES: 1. "summary" must always be a short, exactly 4-word headline. 2. "answer" must always contain three labeled sections: EXPLANATION, EXAMPLE, SUMMARY. Use plain text only.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      let cleanedResponse = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      console.log("test for response", response.text);

      const aiData = JSON.parse(cleanedResponse);
      const aiItem = Array.isArray(aiData) ? aiData[0] : aiData;

      console.log("this is response", aiItem);

      // show AI response left side
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: aiItem.answer }
      ]);

    } catch (error) {
      console.log(error, "Error to connect with AI");
    }
  };

  return (
    <>
      <Navbar />

      {/* CHAT DISPLAY AREA */}
      <div className="flex flex-col gap-4 p-6 h-[65vh] overflow-y-auto bg-black">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex w-full ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[60%] px-5 py-3 rounded-2xl text-sm whitespace-pre-line ${
                msg.type === "user"
                  ? "bg-red-600 text-white rounded-br-none"
                  : "bg-zinc-800 text-white rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* TOP SELECT SUBJECT */}
      <div className="flex items-center gap-4 px-6 pb-3">
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-xl px-4 py-2.5 focus:border-red-500 outline-none transition-all"
        >
          <option value="" disabled>
            Select Subject
          </option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="HTML/CSS">HTML/CSS</option>
          <option value="Machine Learning">Machine Learning</option>
        </select>
      </div>

      {/* INPUT BOX BOTTOM */}
      <div className="p-6 bg-zinc-900/40 border-t border-zinc-800">
        <div className="relative flex items-end gap-2">
          <textarea
            value={userRequest}
            onChange={(e) => setUserRequest(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              !e.shiftKey &&
              (e.preventDefault(), handleRequest())
            }
            placeholder="Ask a technical question..."
            rows={1}
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-sm text-white focus:border-red-500/50 outline-none resize-none transition-all placeholder:text-zinc-700 overflow-hidden"
          />

          <button
            onClick={handleRequest}
            className="bg-white text-black h-[52px] px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white disabled:opacity-50 transition-all"
          >
            Send
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;
