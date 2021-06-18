import Link from 'next/link'
import React from 'react'
import styled, { css, CSSObject } from 'styled-components'

interface OwnProps {
  readonly applyActiveLinkStyles?: boolean
  readonly applyFilterOnHover?: boolean
  readonly activeLinkStyles?: TemplateStringsArray | CSSObject
}

const AppLinkInner = styled.div<OwnProps>`
  text-decoration: none;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.link};
  transition: filter 0.2s ease, opacity 0.2s ease, color 0.3s ease;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
  ${props =>
    props.applyActiveLinkStyles &&
    css`
      color: ${props => props.theme.colors.link};
      ${props => (props as any).activeLinkStyles && css((props as any).activeLinkStyles)};
    `}

  .nav_icon {
    display: none;
    width: 35px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    .nav_title {
      display: none;
    }

    .nav_icon {
      display: block;
      filter: brightness(0) invert(1);
    }
  }
`

interface AppLinkProps {
  href: string
  title: string
  icon: React.ReactNode
}

export default function Clickable({ href, title, icon }: AppLinkProps) {
  return (
    <Link href={href || ''}>
      <AppLinkInner>
        <span className="nav_title">{title}</span>
        {icon}
      </AppLinkInner>
    </Link>
  )
}
