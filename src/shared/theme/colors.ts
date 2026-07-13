export const colors = {
  // Backgrounds - Soft dark
  background: '#0F0F1E',
  cardBg: '#1A1A2E',
  surface: '#252540',
  
  // Primary - Soft violet
  primary: '#A78BFA',           
  accent: '#F472B6',           
  
  // Difficulty - Soft neon
  easy: '#34D399',             
  medium: '#FBBF24',            
  hard: '#F87171',              
  
  // States
  correct: '#026d46',
  wrong: '#b10202',
  
  // Text
  white: '#FFFFFF',
  textLight: '#CBD5E1',         
  textMuted: '#64748B',        
  textDark: '#0F172A',
  
  // Special
  gold: '#FCD34D',              
  scoreBg: '#FB923C',         
  
  // Borders
  border: '#2D2D4A',
  modalBg: '#1A1A2E',
  overlay: 'rgba(0, 0, 0, 0.7)',
} as const;

export type ColorKey = keyof typeof colors;