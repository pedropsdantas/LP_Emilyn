export interface Treatment {
  id: string;
  name: string;
  description: string;
  category: 'facial' | 'corporal' | 'injetaveis' | 'todos';
  duration?: string;
  benefits: string[];
  ctaText: string;
}

export interface SkinProfile {
  skinType: string;
  mainConcern: string;
  sensitivity: string;
  ageGroup: string;
  currentRoutineCount: number;
}

export interface RecommendationResult {
  skinAnalysis: string;
  morningRoutine: string[];
  nightRoutine: string[];
  recommendedTreatments: {
    name: string;
    reason: string;
  }[];
  expertTip: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  comment: string;
  rating: number;
  date: string;
  avatarUrl?: string;
}

export interface InstagramReel {
  id: string;
  title: string;
  views: string;
  durationString: string;
  likes: string;
  coverImage?: string;
  takeaways: string[];
  suggestedTreatmentId: string;
  videoTips: string[];
}
