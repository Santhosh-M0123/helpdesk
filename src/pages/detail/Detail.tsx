import Markdown from "../../components/markdownComponents/listMarkdown/ListMarkDown";
import { type Milkdown } from "../../types/data/data";

export default function Detail({ milkdown }: { milkdown: Milkdown }) {
    return <Markdown milkdown={milkdown} />;
}
