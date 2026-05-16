export type SourceType = 'freshdesk_public' | 'titanhq_static_docs_branch';

export interface ManifestEntry {
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
  title: string;
  status: 'discovered' | 'fetched' | 'converted' | 'warning' | 'failed';
  content_hash?: string;
  route: string;
  warnings: string[];
}

