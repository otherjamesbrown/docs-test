declare module 'turndown' {
  interface TurndownOptions {
    bulletListMarker?: string;
    codeBlockStyle?: 'fenced' | 'indented';
    headingStyle?: 'atx' | 'setext';
  }

  interface TurndownNode {
    nodeName: string;
    getAttribute?: (name: string) => string | null;
  }

  interface TurndownRule {
    filter: string | string[] | ((node: TurndownNode) => boolean);
    replacement: (content: string, node: TurndownNode) => string;
  }

  export default class TurndownService {
    constructor(options?: TurndownOptions);
    addRule(key: string, rule: TurndownRule): void;
    turndown(html: string): string;
  }
}
