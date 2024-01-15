import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

export interface ParamsWithLocale {
  locale: string;
  slug?: string;
}

export type PageComponent<
  Params extends ParamsWithLocale = ParamsWithLocale,
  SearchParams extends object = object,
> = FC<{
  params: Params;
  searchParams: SearchParams;
}>;

export type LayoutComponent<
  Params extends ParamsWithLocale = ParamsWithLocale,
> = FC<{
  params: Params;
  children: ReactNode;
}>;

export type ErrorRouteComponent = FC<{
  error: Error;
  reset: () => void;
}>;

export type RenderBehavior =
  | 'auto'
  | 'force-dynamic'
  | 'error'
  | 'force-static';

export type DynamicMetadata<
  Params extends ParamsWithLocale = ParamsWithLocale,
  SearchParams extends object = object,
> = (
  params: {
    params: Params;
    searchParams: SearchParams;
  },
  parent: ResolvingMetadata,
) => Promise<Metadata> | Metadata;
