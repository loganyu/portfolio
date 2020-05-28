import React from "react"
import {Display4} from 'baseui/typography'
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
  } from "baseui/header-navigation";
  import { StyledLink } from "baseui/link";
  import { Button } from "baseui/button";
  import { Avatar } from "baseui/avatar";

export default () => (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
            <Avatar
                name="Jane Doe"
                size="scale1200"
                src="/avatar.png"
            />
        </StyledNavigationItem>
        <StyledNavigationItem>
            <Display4>
                Logan Yu
            </Display4>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="http://github.com/loganyu/" target="_blank">
            Github
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="https://www.linkedin.com/in/loganyu/" target="_blank">
            LinkedIn
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
            <StyledLink href="https://twitter.com/loganyu/" target="_blank">
                Twitter
            </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
            <StyledLink href="https://www.instagram.com/loganyu/" target="_blank">
                Instagram
            </StyledLink>
        </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
            <Button $as="a" href="mailto:yu.logan@gmail.com" target="_blank">Contact</Button>
        </StyledNavigationItem>
    </StyledNavigationList>
    </HeaderNavigation>
)