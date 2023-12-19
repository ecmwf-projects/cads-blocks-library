export enum LayoutBlockTypes {
  'accordion',
  'button',
  'link',
  'markdown',
  'html',
  'section',
  'related_entries',
  'table',
  'thumb-markdown',
  'checkitem',
}

interface GenericBlock {
  id: string
  type: keyof typeof LayoutBlockTypes
}

export interface MarkdownBlockInterface extends GenericBlock {
  content: string
}

export interface CheckItemBlockInterface extends GenericBlock, LinkBlockInterface {
  status?: string
  collapsed?: boolean
  blocks?: CheckItemBlockInterface[]
}

export interface HtmlBlockInteface extends GenericBlock {
  content: string
}

export type TableBlockHeadings = {
  id: string
  label: string
}[]

export type TableBlockContent = {
  [key: string]: string
}[]

export interface TableBlock extends GenericBlock {
  caption: string
  structure: {
    orientation: 'horizontal' | 'vertical'
    headings: TableBlockHeadings
  }
  content: TableBlockContent
}

export interface SectionBlock extends GenericBlock {
  title: string
  open: boolean
  blocks: (
    | HtmlBlockInteface
    | CheckItemBlockInterface
    | MarkdownBlockInterface
    | LinkBlockInterface
    | ButtonBlockInterface
  )[]
}

export interface RelatedBlock extends GenericBlock {
  title: string
  open: boolean
  rel: string
}

export type ImageThumb = {
  url: string
  alt: string
}

export interface LinkBlockInterface extends GenericBlock {
  title: string
  description?: string
  href: string
  ['new-window']?: boolean
}

export interface AccordionBlock extends GenericBlock {
  title: string
  collapsed?: boolean
  blocks: LayoutSectionBlock[]
}

export interface ThumbMarkdownBlock extends MarkdownBlockInterface {
  image: ImageThumb
}

export enum ButtonActions {
  'modal' = 'modal',
  'download' = 'download',
  'copy-clipboard' = 'copy-clipboard',
}

export interface ButtonBlockInterface extends GenericBlock {
  'contents-url'?: string
  action: keyof typeof ButtonActions
  content?: string
  parent?: string
  title: string
}

export type LayoutSectionBlock =
  | MarkdownBlockInterface
  | HtmlBlockInteface
  | TableBlock
  | ThumbMarkdownBlock
  | LinkBlockInterface
  | SectionBlock
  | AccordionBlock
  | ButtonBlockInterface
  | CheckItemBlockInterface

export type LayoutSectionBlocksMix = MarkdownBlockInterface &
  TableBlock &
  HtmlBlockInteface &
  ThumbMarkdownBlock &
  LinkBlockInterface &
  SectionBlock &
  AccordionBlock &
  ButtonBlockInterface &
  CheckItemBlockInterface

export interface LayoutSection {
  id: string
  title: string
  blocks: LayoutSectionBlock[]
}

export interface LayoutInterface {
  uid: string
  title: string
  description: string
  body: {
    main: {
      sections: LayoutSection[]
    }
    aside: {
      blocks: LayoutSectionBlock[]
    }
  }
}
