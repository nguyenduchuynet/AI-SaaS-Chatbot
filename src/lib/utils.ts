import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateEmbedCode(chatbotId: string): string {
  return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = 'https://your-domain.com/embed.js';
    script.setAttribute('data-chatbot-id', '${chatbotId}');
    script.async = true;
    document.head.appendChild(script);
  })();
</script>
<div id="ai-chatbot-widget-${chatbotId}"></div>`
}
