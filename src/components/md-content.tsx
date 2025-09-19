import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MdContentProps {
  content: string;
  className?: string;
}

export function MdContent({ content, className = "" }: MdContentProps) {
  // Clean up content: remove image tags and clean formatting
  const cleanContent = content
    .replace(/!\[.*?\]\(.*?\)\{.*?\}/g, '') // Remove image tags with attributes
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove simple image tags
    .replace(/^\s*$/gm, '') // Remove empty lines
    .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
    .trim();

  return (
    <div className={`prose prose-slate max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-4xl font-bold text-gray-900 mb-8 mt-10 pb-4 border-b-2 border-warm-300/60 heading-text">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-8 heading-text block">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-6 heading-text block">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="content-text text-gray-800 leading-relaxed mb-6 text-xl font-medium">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside mb-8 space-y-4 text-gray-800 ml-6 text-lg font-medium">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside mb-8 space-y-4 text-gray-800 ml-6 text-lg font-medium">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="content-text text-gray-800 leading-relaxed text-lg font-medium mb-4">
              {children}
            </li>
          ),
          strong: ({ children }) => {
            // Check if this is a numbered section (like "1.", "2.", etc.)
            const content = String(children);
            const isNumberedSection = /^\d+\.\s/.test(content);
            
            if (isNumberedSection) {
              return (
                <div className="font-bold text-gray-900 text-xl mt-6 mb-4 block">
                  {children}
                </div>
              );
            }
            
            return (
              <strong className="font-bold text-gray-900 text-lg">
                {children}
              </strong>
            );
          },
          em: ({ children }) => (
            <em className="italic text-gray-700 text-lg">
              {children}
            </em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent-400 bg-warm-100/60 p-6 italic text-gray-800 my-8 rounded-r-lg text-lg font-medium">
              {children}
            </blockquote>
          ),
        }}
      >
        {cleanContent}
      </ReactMarkdown>
    </div>
  );
}