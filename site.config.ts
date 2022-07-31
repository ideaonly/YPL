import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'YPL-725a2b15700a45d180b6ec24fe5aa1a7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'YPL 收腹带',
  domain: 'https://www.notion.so/ideaonly/YPL-725a2b15700a45d180b6ec24fe5aa1a7',
  author: 'YPL',

  // open graph metadata (optional)
  description: 'YPL-最新小腰精收腹带，收腹束腰，减脂正型，曲线自来。最新款',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'ideaonly',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
    // navigationLinks: [
    //   {
    //     title: 'About',
    //    pageId: 'd6bf6d082b734a1b9e6ae2755cfd5d94'
    // },
    // ]
})
