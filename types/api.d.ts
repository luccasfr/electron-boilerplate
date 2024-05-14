declare global {
  interface Window {
    api: {
      quit: () => void;
      minimize: () => void;
      maximize: () => void;
    };
  }
}

export {};
