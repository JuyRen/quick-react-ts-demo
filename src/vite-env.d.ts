// https://cn.vitejs.dev/guide/features.html#client-types
/// <reference types="vite/client" />

declare module '@icon/*.svg' {
    const content: React.FC<React.SVGProps<SVGElement>>
    export default content
}
