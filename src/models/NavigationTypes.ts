// Nav Links
export interface INavLink {
    id: number;
    name: string;
    onClick?: () => void;
    hasDropdown: boolean;
    isDropdownOpened?: boolean;
    dropdownLinks?: IDropdownLinkObj[];
    path: string;
}

export interface IDropdownLinkObj {
    id: number;
    name: string;
    onClick: () => void;
}
  