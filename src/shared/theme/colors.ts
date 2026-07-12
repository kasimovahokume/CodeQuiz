export const colors = {
  // Backgrounds - Soft dark
  background: '#0F0F1E',
  cardBg: '#1A1A2E',
  surface: '#252540',
  
  // Primary - Soft violet
  primary: '#A78BFA',           // Violet-400 (softer)
  accent: '#F472B6',            // Pink-400
  
  // Difficulty - Soft neon
  easy: '#34D399',              // Emerald-400 (softer)
  medium: '#FBBF24',            // Amber-400
  hard: '#F87171',              // Red-400 (softer)
  
  // States
  correct: '#34D399',
  wrong: '#F87171',
  
  // Text
  white: '#FFFFFF',
  textLight: '#CBD5E1',         // Slate-300
  textMuted: '#64748B',         // Slate-500
  textDark: '#0F172A',
  
  // Special
  gold: '#FCD34D',              // Amber-300
  scoreBg: '#FB923C',           // Orange-400
  
  // Borders
  border: '#2D2D4A',
  modalBg: '#1A1A2E',
  overlay: 'rgba(0, 0, 0, 0.7)',
} as const;

export type ColorKey = keyof typeof colors;