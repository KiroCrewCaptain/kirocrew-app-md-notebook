/**
 * The dashboard's GitHub mark (`components/BrandIcon.GithubIcon`): the monochrome
 * mark tinted through a CSS mask so it follows `currentColor`, like the lucide icons
 * beside it. The SVG is inlined into the bundle as a `data:` URI, so the URL is quoted.
 */
import githubMarkUrl from './github-mark.svg?inline'

export function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url("${githubMarkUrl}")`,
        maskImage: `url("${githubMarkUrl}")`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  )
}
