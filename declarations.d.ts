declare module "data/config.toml" {
  const value: {
    name: {
      first: string;
      last: string;
      middle?: string;
      family?: string;
      given?: string;
    }
    description: string;
    links: Array<{
      name: string;
      icon: string;
      url: string;
      important?: boolean;
    }>;
  }
  export default value;
}
