import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Widget } from './Widget';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const SmartAssistantWidget: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `In a concise, helpful, and minimalist tone (Nothing OS style), answer this: ${query}`
      });
      setResponse(result.text || "No response provided.");
    } catch (error) {
      setResponse("Connection lost. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Widget span="large" className="bg-nothing-white !text-nothing-black border-none">
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={18} className="text-nothing-black" />
          <h2 className="font-display font-black text-xl tracking-tight uppercase">Smart Assistant</h2>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pr-2">
          {response ? (
            <div className="text-sm font-display leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-bottom-4 duration-500">
              {response}
              <button 
                onClick={() => { setResponse(null); setQuery(''); }}
                className="block mt-4 text-[10px] uppercase font-bold tracking-widest border-b border-nothing-black/20"
              >
                Clear Context
              </button>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-end">
              <p className="text-xs text-nothing-black/50 font-display mb-8 max-w-xs italic">
                "Dots of intelligence at your disposal. Ask me anything meaningful."
              </p>
              <div className="relative group">
                <input 
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                  placeholder="Need insights?"
                  className="w-full bg-nothing-black/5 border-b-2 border-nothing-black/10 py-3 pr-10 focus:outline-none focus:border-nothing-black transition-colors font-display"
                />
                <button 
                  onClick={handleAsk}
                  disabled={loading}
                  className="absolute right-0 bottom-3 text-nothing-black/40 hover:text-nothing-black transition-colors"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <ArrowRight size={20} />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Widget>
  );
};
