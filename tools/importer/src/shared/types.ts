export type Area = 'redstor' | 'titanhq-platform' | 'spamtitan-kb' | 'spamtitan-skellig' | 'spamtitan-legacy';

export interface PageCandidate {
  area: Area;
  sourceId: string;
  sourceUrl: string;
  sourceHost: string;
  canonicalHost: string;
  title: string;
  route: string;
  outputPath: string;
  contentType: 'kb_article' | 'docs_page';
  breadcrumbs: string[];
  folder?: string;
  product: string;
  productStream?: string;
}

export interface ImportReport {
  generatedAt: string;
  counts: Record<string, number>;
  pages: Array<{
    title: string;
    sourceUrl: string;
    route: string;
    outputPath: string;
    warnings: string[];
  }>;
  warnings: string[];
}

export interface SourcesConfig {
  products: ProductSourceConfig[];
}

export interface ProductSourceConfig {
  id: string;
  label: string;
  canonical_host: string;
  sources: {
    kb?: FreshdeskSourceConfig[];
    docs?: DocsSourceConfig[];
  };
}

export interface FreshdeskSourceConfig {
  id: string;
  type: 'freshdesk_public';
  base_url: string;
  area: Area;
  folders: FreshdeskFolderConfig[];
  seeds?: string[];
  scoped_kb_roots?: string[];
  exclude_mirrors?: string[];
}

export interface FreshdeskFolderConfig {
  folder: string;
  source_url: string;
  route_base: string;
  limit: number;
}

export interface DocsSourceConfig {
  id: string;
  type: 'titanhq_static_docs_branch';
  base_url: string;
  area: Area;
  route_base: string;
  breadcrumbs: string[];
  seeds: DocsSeedConfig[];
  product_stream?: string;
  branch_label?: string;
  version_range?: string;
  preferred?: boolean;
}

export type DocsSeedConfig =
  | string
  | {
      path?: string;
      url?: string;
      child_depth?: number;
    };

export type AssetDownloader = (assetUrl: string, page: PageCandidate) => Promise<string>;

export interface ManifestEntry {
  area: Area;
  source_key: string;
  source_id: string;
  source_host: string;
  source_url: string;
  canonical_host: string;
  product: string;
  product_stream?: string;
  content_type: 'kb_article' | 'docs_page' | 'folder' | 'category';
  discovered_from: string;
  breadcrumbs: string[];
  folder?: string;
  title: string;
  status: 'discovered' | 'fetched' | 'converted' | 'warning' | 'failed';
  route: string;
  warnings: string[];
}
