import { describe, expect, test } from 'vitest'

import { getDOM } from '@/tests/helpers/e2etest'
import { loadPages } from '@/frame/lib/page-data'

const pageList = await loadPages(undefined, ['en'])

describe('server rendering certain GraphQL pages', () => {
  test('minitoc hrefs on breaking-changes match', async () => {
    const $ = await getDOM('/graphql/overview/breaking-changes')
    const links = $('[data-testid="minitoc"] a[href]')
    const hrefs = links.map((i, link) => $(link).attr('href')).get()
    expect(hrefs.length).toBeGreaterThan(0)

    for (const href of hrefs) {
      if (!href.startsWith('#')) {
        throw new Error(`Expected href to start with # but got ${href}`)
      }
      const headings = $(href)
      expect(headings.length).toBe(1)
    }
    expect.assertions(hrefs.length + 1)
  })

  const autogeneratedPages = pageList.filter(
    (page) => page.autogenerated === 'graphql' && page.relativePath.includes('reference'),
  )
  const nonFPTPermalinks = autogeneratedPages
    .map((page) =>
      page.permalinks.find((permalink) => permalink.pageVersion !== 'free-pro-team@latest'),
    )
    .filter(Boolean)
  const nonFPTPermalinksHrefs = nonFPTPermalinks.map((permalink) => {
    return permalink.href
  })

  test.each(nonFPTPermalinksHrefs)(
    'all links keep locale and version in %s',
    async (permalinkHref) => {
      const $ = await getDOM(permalinkHref)
      const internalLinks = $('#article-contents a[href^="/"]')
      const hrefs = internalLinks.map((i, link) => $(link).attr('href')).get()
      const [, pageLocale, pageVersion] = permalinkHref.split('/')
      for (const href of hrefs) {
        const [, locale, version] = href.split('/')
        expect(locale).toBe(pageLocale)
        expect(version).toBe(pageVersion)
      }
    },
  )
})
