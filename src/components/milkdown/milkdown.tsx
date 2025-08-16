import { useEffect, useState } from "react";
import { type Milkdown } from "../../types/data/data";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export default function Milkdown({
  MilkdownData,
}: {
  MilkdownData: Milkdown;
}) {
  const [html, setHtml] = useState<string>("");

    useEffect(()=>{
        const processorMarkdown = async () =>{
          const processor = unified()
            .use(remarkParse)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeStringify);


            const file = await processor.process(MilkdownData.data);
          setHtml(String(file));
        };

        processorMarkdown();
    }, [MilkdownData.data])

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
