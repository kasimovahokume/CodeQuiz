export const colors = {
  // Background
  background: '#1A1A2E',
  cardBg: '#16213E',
  surface: '#0F3460',
  
  // Difficulty
  easy: '#00E676',
  medium: '#FFD600',
  hard: '#FF1744',
  
  // States
  correct: '#00E676',
  wrong: '#FF1744',
  primary: '#7C4DFF',
  
  // Text
  white: '#FFFFFF',
  textLight: '#E0E0E0',
  textMuted: '#9E9E9E',
  textDark: '#1A1A2E',
  
  // Score
  scoreBg: '#FF6D00',
  gold: '#FFD700',
  
  // Modal
  modalBg: '#16213E',
  overlay: 'rgba(0, 0, 0, 0.8)',
  
  // Borders
  border: '#2D3561',
} as const;

export type ColorKey = keyof typeof colors;