import { useEffect, useState } from "react";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import inBuiltstyles from "./ViewMarkDown.module.css"

export default function ViewMarkDown({
  markdown,
}: {
  markdown: string;
}) {
  const [html, setHtml] = useState<string>("");

    useEffect(()=>{
        const processorMarkdown = async () =>{
          const processor = unified()
            .use(remarkParse)
            .use(remarkRehype, { allowDangerousHtml: true })
            .use(rehypeStringify);

            console.log("the data is : ", markdown);
            const file = await processor.process(markdown);
          setHtml(String(file));
        };

        processorMarkdown();
    }, [markdown])

  return <div className={inBuiltstyles["markdown-body"]} dangerouslySetInnerHTML={{ __html: html }} />;
}
