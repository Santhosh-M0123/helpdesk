import { useState } from "react";
import { type Milkdown } from "../../../types/data/data";
import ViewMarkDown from "../viewMarkdown/ViewMarkDown";
import innerStyle from "./ListMarkDown.module.css"

export default function ListMarkdown({ milkdown }: { milkdown: Milkdown }) {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <>
      {!selectedDoc ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {milkdown.data.documents.map((doc) => (
            <div key={doc.aliasId} className={`col-span-1 ${innerStyle.box}`}>
              <h2>{doc.name}</h2>
              <h5>Author : {doc.metadata?.author}</h5>
              <button onClick={() => setSelectedDoc(doc.data ?? null)}>Read</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6">
          <button 
            onClick={() => setSelectedDoc(null)} 
            className="mb-4 px-4 py-2 rounded"
          >
            ⬅ Back
          </button>
          <ViewMarkDown markdown={selectedDoc} />
        </div>
      )}
    </>
  );
}
