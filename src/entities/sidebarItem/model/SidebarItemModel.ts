import {SidebarItem} from "@/entities/sidebarItem/types/SidebarItem";

export class SidebarItemModel {
    private baseUrl: string;

    constructor(private item: SidebarItem) {
        this.baseUrl = import.meta.env.BASE_URL
    }

    get hasChildren(): boolean {
        return !!this.item.children?.length
    }

    get iconHref(): string {
        return `${this.baseUrl}/icons.svg#icon-${this.item.icon}`
    }

    get arrowHref(): string {
        return `${this.baseUrl}/icons.svg#icon-${this.item.icon_arrow}`
    }

    get colorStyle(): string {
        return this.item.color ? `var(${this.item.color})` : 'currentColor'
    }

    get label(): string {
        return this.item.label
    }

    get children(): SidebarItem[] {
        return this.item.children || []
    }

    get isPadding(): boolean {
        return this.item.padding === 'yes'
    }
}
