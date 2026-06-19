import type { ComponentProps } from "react";

type MDXComponents = {
  [key: string]: (props: ComponentProps<"div">) => React.ReactElement | null;
};

export function useMDXComponents(
  components: Record<string, unknown>
): Record<string, unknown> {
  return {
    ...components,
  };
}

export type { MDXComponents };
