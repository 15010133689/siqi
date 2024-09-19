import Image from "next/image";

export function useMDXComponents(components) {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                {...props}
            />
        ),
        ...components,
    }
}