declare module '*.scss' {
    const value: Record<string, string>;
    export default value;
}

declare module '*.svg' {
    const content: string;
    export default content;
}
