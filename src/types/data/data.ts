export interface NavbarLink {
    item: string;
    url: string;
    icon: string;
}

export interface NavButton {
    label: string;
    action: string;
    style: NavButtonStyle;
}

export interface NavButtonStyle {
    backgroundColor: string;
    color: string;
    borderRadius: string;
    padding: string;
    border: string;
    cursor: string;
}

export interface NavbarStyle {
    backgroundColor: string;
    color: string;
    fontFamily: string;
}

export interface NavbarData {
  logo: {
    url: string;
    label: string;
  };
  list: NavbarLink[];
  button: NavButton;
  style: NavbarStyle;
}

export interface NavbarProps {
  navBarData: NavbarData;
  isCollapsed: boolean;
  onToggleSidebar: () => void;
}

export interface AppData {
  Navbar?: NavbarData;
  milkdown?: Milkdown;
}


export interface MarkdownData {
  aliasId?: string;
  collectionId?: string;
  data?: string; // markdown content
  type?: "markdown" | string;
  source?: string;
  metadata?: Metadata;
  name?: string;
  keywords?: string[];
  length?: number;
  refLinks?: string[];
  chunkIds?: string[];
  sotLink?: string | null;
  createdAt?: string; // ISO string
  updatedAt?: string; // ISO string
  deletedAt?: string | null;
  collection?: Collection;
}

export interface Metadata {
  author: string;
  [key: string]: any; // allows extra metadata
}

export interface Collection {
  aliasId: string;
  collectionName: string;
}

export interface Milkdown {
  success: boolean;
  message: string;
  timestamp: string; // ISO string
  data: {
    documents: MarkdownData[];
    pagination?: Pagination;
  };
}

export interface Pagination {
  total?: number;
  limit?: number;
  page?: number;
  totalPages?: number;
}