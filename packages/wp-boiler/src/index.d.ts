export interface ConfigT {
  wordpress: {
    version: string;
  };
  symLinks: {
    source: string;
    target: string;
  }[];
}
