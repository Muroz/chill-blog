export interface StrapyEntry {
  id: number | string;
}

export interface StrapiResponse<T> {
  data: Array<T>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Article extends StrapyEntry {
  slug: string;
  title: string;
  category: {
    slug: string;
  };
  blocks: Array<BaseBlock>;
}

export interface Category extends StrapyEntry {
  name: string;
  slug: string;
}

export interface BaseBlock extends StrapyEntry {
  __component: string;
}
