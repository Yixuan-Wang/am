declare module "data/config.yaml" {
  const value: {
    name: {
      first: string;
      last: string;
      middle?: string;
      family?: string;
      given?: string;
      ipa?: string;
    }
    bio: string;
    nav: Array<{
      id: string;
      name: string;
      icon: string;
    }>;
    links: Array<{
      name: string;
      icon: string;
      url: string;
      important?: boolean;
    }>;
  }
  export default value;
}

declare module "data/news.yaml" {
  const value: {
    news: Record<string, {
      date: string;
      content: string;
      icon?: string;
    }>
  };
  export default value;
}