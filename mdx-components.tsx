import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: 'white', fontSize: '25px', fontWeight: 500, borderLeft: '8px solid', paddingLeft: '10px' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 500 }}>{children}</h2>
    ),
    p: ({ children }) => (
      <p style={{ color: 'white', fontSize: '16px', lineHeight: 1.5, display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', unicodeBidi: 'isolate' }}>{children}</p>
    ),
    code: ({ children }) => (
      <code style={{ color: 'white', fontSize: '16px', backgroundColor: 'rgb(10, 143, 183)', padding: '5px', borderRadius: '5px' }}>{children}</code>),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '200%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
