import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
//afterBody: [
//  Component.Comments({
//    provider: 'giscus',
//    options: {
      // from data-repo
//      repo: 'Whekau/werwolf',
      // from data-repo-id
//      repoId: 'R_kgDOM-bu_g',
      // from data-category
//      category: 'Announcements',
      // from data-category-id
//      categoryId: 'DIC_kwDOM-bu_s4CjmfG',
//    }
//  }),
//],
  footer: Component.Footer({
   // links: {
     // GitHub: "https://github.com/jackyzha0/quartz",
  //    "Discord Community": "https://discord.gg/cRFFHYye7t",
  //  },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
	rootName: "Werwolf",
	}),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
	title: "Inhaltsverzeichnis",
	})),
  ],
  right: [
 //Component.Graph(),
 //Component.DesktopOnly(Component.TableOfContents()),
 Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({
	rootName: "Werwolf",
	}), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
	title: "Inhaltsverzeichnis",
	})),
  ],
  right: [],
}
