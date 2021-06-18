declare const __DEV__: boolean
declare module '*.ttf'
declare module '*.svg' {
  const content: StaticImageData

  export default content
}
