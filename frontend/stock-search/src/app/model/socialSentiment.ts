export interface SocialSentiment {
  reddit: [{
    atTime: string;
    mention: number;
    positiveScore: number;
    negativeScore: number;
    positiveMention: number;
    negativeMention: number;
    score: number;
  }];

  symbol: string;
  
  twitter: [{
    atTime: string;
    mention: number;
    positiveScore: number;
    negativeScore: number;
    positiveMention: number;
    negativeMention: number;
    score: number;
  }];
  // reddit:any[]
  // symbol:string
  // twitter:any[]
}
