export enum EditorMode {
  HTML = 'HTML',
  PREVIEW = 'PREVIEW',
  SPLIT = 'SPLIT'
}

export interface GenerationHistory {
  id: string;
  prompt: string;
  code: string;
  timestamp: number;
}

export interface AiResponse {
  code: string;
  explanation?: string;
}