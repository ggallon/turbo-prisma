import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  docsRepositoryBase:
    "https://github.com/ggallon/turbo-prisma/blob/main/apps/docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Starter",
      };
    }
  },
  darkMode: true,
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ height: "24px" }}
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M247.7 488a231.7 231.7 0 1 1 1.1-463.4V488h-1Zm56.8-8.3c-23.7 0-42.8-14-42.8-31.2s19.1-31.1 42.8-31.1c23.6 0 42.7 14 42.7 31.1 0 17.2-19.1 31.2-42.7 31.2Zm-10.2-87.5a33 33 0 0 1-32.6-33.2 33 33 0 0 1 32.6-33.3H386a33 33 0 0 1 32.6 33.3 33 33 0 0 1-32.6 33.2h-91.8Zm0-101.8a33 33 0 0 1-32.6-33.2 33 33 0 0 1 32.6-33.2H449a33 33 0 0 1 32.6 33.2 33 33 0 0 1-32.6 33.2H294.3Zm0-97.6a33 33 0 0 1-32.6-33.2 33 33 0 0 1 32.6-33.2H386a33 33 0 0 1 32.6 33.2 33 33 0 0 1-32.6 33.2h-91.8Zm10.2-93.4c-23.7 0-42.8-14.4-42.8-32.2 0-17.8 19.1-32.2 42.8-32.2 23.6 0 42.7 14.4 42.7 32.2 0 17.8-19.1 32.2-42.7 32.2Z"
        />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        Monorepo Starter
      </span>
    </>
  ),
  project: {
    link: "https://github.com/ggallon/turbo-prisma",
  },
  footer: {
    text: <span>{new Date().getFullYear()} © Monorepo.</span>,
  },
}

export default config
