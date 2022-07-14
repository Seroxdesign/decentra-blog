import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetailsSero = await getFileBySlug('authors', ['default'])
  const authorDetailsDaniel = await getFileBySlug('authors', ['daniel'])
  return { props: { authorDetailsSero, authorDetailsDaniel } }
}

export default function About({ authorDetailsSero, authorDetailsDaniel }) {
  let { mdxSource, frontMatter } = authorDetailsDaniel

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
