import type { ComponentProps } from "react";

// Maps MDX-rendered HTML elements onto Bizex4U typography + spacing tokens.
export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1 className="text-h2 text-neutral-12 mt-12 mb-4" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-h3 text-neutral-12 mt-10 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="text-h4 text-neutral-12 mt-8 mb-3" {...props} />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4 className="text-h5 text-neutral-12 mt-6 mb-2" {...props} />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="text-body-large text-neutral-11 mb-5" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-neutral-12 underline underline-offset-2 hover:text-neutral-10" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 mb-5 space-y-2 text-body-large text-neutral-11" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-body-large text-neutral-11" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-neutral-04 pl-5 italic text-body-large text-neutral-10 my-6"
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="bg-neutral-02 px-1.5 py-0.5 rounded text-[0.9em] font-mono" {...props} />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre className="bg-neutral-01 border border-neutral-03 rounded-[12px] p-4 overflow-x-auto mb-6 text-sm" {...props} />
  ),
  hr: () => <hr className="my-10 border-neutral-03" />,
  img: ({ alt, ...props }: ComponentProps<"img">) => (
    <img className="w-full rounded-[16px] my-6 object-cover h-auto" loading="lazy" alt={alt ?? ""} {...props} />
  ),
};
