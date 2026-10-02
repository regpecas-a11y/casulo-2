export const askGemini = async (prompt: string, context: string) => {
  try {
    const response = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, context }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to call Gemini API");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error asking Gemini via proxy:", error);
    return "Desculpe, família. Tive um pequeno problema técnico. Pode perguntar de novo?";
  }
};
