export interface ConfigT {
  wordpress: {
    version: string;
    dest: string;
  };
  symlinks: {
    source: string;
    target: string;
    template?: string;
  }[];
}
