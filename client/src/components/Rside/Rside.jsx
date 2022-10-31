import React from 'react';
import {
  Container,
  Sidebaryellow,
  IconContainer,
  CollectiveItem,
  TextBox,
  CollectButton,
  ChatIcon,
  LogoIcon,
  NumberBadge,
  SidebarCollective,
  CollectiveNameGroup,
} from './style';

const Rside = () => {
  const penIcon = (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
      <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
    </svg>
  );
  const googleIcon = (
    <svg
      width="32"
      height="43"
      viewBox="0 0 254 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M156.184 88.5068L163.039 88.6238L181.664 69.9991L182.566 62.1079C167.794 48.9469 148.29 40.9319 126.977 40.9319C88.3897 40.9319 55.8216 67.187 46.1816 102.751C48.2146 101.333 52.5615 102.397 52.5615 102.397L89.7774 96.2776C89.7774 96.2776 91.69 93.1111 92.6597 93.2683C97.0114 88.4873 102.314 84.6682 108.227 82.0558C114.141 79.4433 120.535 78.0952 127 78.0977C138.034 78.1211 148.199 82.0199 156.184 88.47V88.5068Z"
        fill="#EA4335"
      />
      <path
        d="M207.818 102.825C203.495 86.8751 194.584 72.7912 182.556 62.1079L156.184 88.4801C166.75 97.0066 173.528 110.054 173.528 124.659V129.314C186.358 129.314 196.781 139.76 196.781 152.566C196.781 165.396 186.335 175.819 173.528 175.819H127.023L122.369 180.5V208.407L127.023 213.038H173.528C189.559 213.016 204.927 206.638 216.263 195.303C227.598 183.968 233.977 168.6 234 152.57C233.977 131.989 223.634 113.782 207.818 102.828V102.825Z"
        fill="#4285F4"
      />
      <path
        d="M80.4718 213.068H126.95V175.819H80.4718C77.1697 175.819 73.906 175.11 70.902 173.739L64.1911 175.795L45.5664 194.42L43.9346 200.706C54.4303 208.713 67.2673 213.048 80.4684 213.041L80.4718 213.068Z"
        fill="#34A853"
      />
      <path
        d="M80.4717 92.1247C64.441 92.1468 49.0731 98.5246 37.7374 109.86C26.4016 121.195 20.023 136.562 20 152.593C20 172.231 29.406 189.692 43.9613 200.753L70.9253 173.789C66.844 171.949 63.3801 168.97 60.9491 165.211C58.518 161.451 57.223 157.07 57.2193 152.593C57.2193 139.763 67.6652 129.341 80.4717 129.341C89.9011 129.341 98.0063 135.025 101.671 143.05L128.635 116.086C117.577 101.531 100.113 92.1247 80.4751 92.1247H80.4717Z"
        fill="#FBBC05"
      />
    </svg>
  );
  const intelIcon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V72H72V0H0Z" fill="#0068B5" />
      <path d="M15.19 24.72H11.4V28.51H15.19V24.72Z" fill="#00C7FD" />
      <path
        d="M15.1 44.45V30.81H11.5V44.45H15.1ZM38.91 44.59V41.25C38.38 41.25 37.94 41.22 37.61 41.17C37.24 41.11 36.96 40.99 36.77 40.8C36.58 40.61 36.45 40.34 36.4 39.98C36.34 39.64 36.32 39.2 36.32 38.66V33.89H38.92V30.82H36.32V25.5H32.73V38.68C32.73 39.79 32.83 40.74 33.02 41.49C33.21 42.24 33.53 42.84 33.98 43.3C34.43 43.76 35.02 44.09 35.73 44.28C36.45 44.48 37.38 44.58 38.47 44.58H38.91V44.59ZM59.5 44.45V24.45H55.91V44.45H59.5ZM29.25 32.15C28.25 31.08 26.85 30.53 25.07 30.53C24.21 30.53 23.42 30.71 22.71 31.05C22 31.4 21.4 31.89 20.92 32.51L20.72 32.76V32.53V30.8H17.18V44.44H20.75V37.17V37.67C20.75 37.59 20.75 37.5 20.75 37.42C20.79 36.15 21.11 35.19 21.7 34.59C22.33 33.95 23.1 33.62 23.98 33.62C25.02 33.62 25.81 33.94 26.33 34.56C26.84 35.17 27.11 36.05 27.11 37.17V37.2C27.11 37.2 27.11 37.2 27.11 37.21V44.42H30.74V36.68C30.76 34.76 30.25 33.23 29.25 32.15ZM54.04 37.6C54.04 36.62 53.87 35.69 53.52 34.84C53.18 33.99 52.69 33.23 52.07 32.59C51.46 31.95 50.71 31.44 49.85 31.08C48.99 30.72 48.03 30.53 47 30.53C46.02 30.53 45.09 30.72 44.23 31.09C43.37 31.46 42.61 31.97 41.98 32.61C41.35 33.24 40.84 34 40.46 34.86C40.09 35.72 39.9 36.65 39.9 37.63C39.9 38.61 40.08 39.54 40.43 40.4C40.78 41.26 41.28 42.02 41.9 42.65C42.52 43.28 43.29 43.79 44.18 44.16C45.07 44.53 46.05 44.72 47.1 44.72C50.14 44.72 52.04 43.34 53.17 42.04L50.58 40.07C50.03 40.72 48.74 41.59 47.13 41.59C46.12 41.59 45.28 41.36 44.65 40.89C44.02 40.43 43.58 39.79 43.35 39L43.31 38.87H54.03V37.6H54.04ZM43.35 36.35C43.35 35.35 44.5 33.61 46.97 33.61C49.44 33.61 50.59 35.35 50.59 36.35H43.35Z"
        fill="white"
      />
      <path
        d="M63.6 42.73C63.53 42.57 63.43 42.43 63.31 42.31C63.19 42.19 63.05 42.09 62.89 42.02C62.73 41.95 62.56 41.91 62.37 41.91C62.19 41.91 62.01 41.95 61.85 42.02C61.69 42.09 61.55 42.19 61.43 42.31C61.31 42.43 61.21 42.57 61.14 42.73C61.07 42.89 61.03 43.06 61.03 43.25C61.03 43.43 61.07 43.61 61.14 43.77C61.21 43.93 61.31 44.07 61.43 44.19C61.55 44.31 61.69 44.41 61.85 44.48C62.01 44.55 62.18 44.59 62.37 44.59C62.55 44.59 62.73 44.55 62.89 44.48C63.05 44.41 63.19 44.31 63.31 44.19C63.43 44.07 63.53 43.93 63.6 43.77C63.67 43.61 63.71 43.44 63.71 43.25C63.7 43.06 63.67 42.89 63.6 42.73ZM63.38 43.67C63.32 43.8 63.24 43.92 63.15 44.02C63.05 44.12 62.93 44.2 62.8 44.25C62.67 44.31 62.52 44.34 62.37 44.34C62.22 44.34 62.08 44.31 61.94 44.25C61.81 44.19 61.69 44.11 61.59 44.02C61.49 43.92 61.41 43.8 61.36 43.67C61.3 43.54 61.27 43.39 61.27 43.24C61.27 43.09 61.3 42.95 61.36 42.81C61.42 42.68 61.5 42.56 61.59 42.46C61.69 42.36 61.81 42.28 61.94 42.23C62.07 42.17 62.22 42.14 62.37 42.14C62.52 42.14 62.66 42.17 62.8 42.23C62.93 42.29 63.05 42.37 63.15 42.46C63.25 42.55 63.33 42.68 63.38 42.81C63.44 42.94 63.47 43.09 63.47 43.24C63.47 43.39 63.44 43.54 63.38 43.67ZM62.62 43.36C62.72 43.35 62.81 43.31 62.88 43.24C62.95 43.17 62.98 43.07 62.98 42.94C62.98 42.79 62.94 42.68 62.85 42.6C62.76 42.52 62.63 42.48 62.44 42.48H61.85V44H62.13V43.38H62.33L62.72 44H63.01L62.62 43.36ZM62.47 43.14C62.43 43.14 62.38 43.15 62.34 43.15H62.14V42.72H62.34C62.38 42.72 62.43 42.72 62.47 42.72C62.51 42.72 62.55 42.73 62.59 42.75C62.62 42.76 62.65 42.79 62.67 42.81C62.69 42.84 62.7 42.88 62.7 42.93C62.7 42.98 62.69 43.02 62.67 43.05C62.65 43.08 62.62 43.1 62.59 43.11C62.55 43.12 62.51 43.13 62.47 43.14Z"
        fill="white"
      />
    </svg>
  );
  const wso2Icon = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 254 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M254 0H0V254H254V0Z" fill="white" />
      <path
        d="M127 25C70.7354 25 25 70.5709 25 126.835C25 183.1 70.7354 228.671 127 228.671C183.264 228.671 229 183.1 229 126.835C229.164 70.5709 183.429 25 127 25ZM45.2354 130.784C45.4 132.758 45.5645 134.567 45.729 136.377C45.4 134.567 45.2354 132.758 45.2354 130.784ZM45.729 137.364C45.8935 139.174 46.2225 140.984 46.5516 142.793C46.2225 140.984 46.058 139.174 45.729 137.364ZM127 209.587C87.187 209.587 53.9548 180.796 46.5516 142.793L101.664 142.958L126.671 87.3515L162.535 174.709L186.061 132.429H208.764C208.929 130.619 208.929 128.809 208.929 126.835C208.929 124.697 208.764 122.558 208.6 120.419H178.822L164.016 147.071L127.329 56.9161L94.0966 130.948L45.2354 130.784C45.2354 129.468 45.0709 128.151 45.0709 126.671C45.0709 80.9354 81.7579 43.9193 127 43.9193C172.242 43.9193 208.929 80.9354 208.929 126.835C209.093 172.571 172.406 209.587 127 209.587Z"
        fill="#FF7300"
      />
    </svg>
  );

  return (
    <Container>
      <Sidebaryellow>
        <header>The Overflow Blog</header>
        <ul>
          <li>
            {penIcon}Goodbye Webpack, hello Turbopack! The big news from today’s
            Next.JS conference
          </li>
          <li>
            {penIcon}CEO update: Breaking down barriers to unlock innovation
          </li>
        </ul>
        <header>Featured on Meta</header>
        <ul>
          <li>
            <ChatIcon />
            <span>The 2022 Community-a-thon has begun!</span>
          </li>
          <li>
            <ChatIcon />
            Mobile app infrastructure being decommissioned
          </li>
          <li>
            <LogoIcon />
            Staging Ground Workflow: Canned Comments
          </li>
          <li>
            <LogoIcon />
            The Ask Wizard has graduated
          </li>
        </ul>
        <header>Hot Meta Posts</header>
        <ul>
          <li>
            <NumberBadge>11</NumberBadge>
            "Opinion based" link should go to the "Don't Ask" page
          </li>
          <li>
            <NumberBadge>5</NumberBadge>
            Where should we direct new users who post comments as answers?
          </li>
        </ul>
      </Sidebaryellow>
      <div>
        <SidebarCollective>
          <header>Collectives</header>
          <CollectiveItem>
            <div>
              <IconContainer>{googleIcon}</IconContainer>
              <CollectiveNameGroup>
                <p>Google Cloud</p>
                <small>31k Members</small>
              </CollectiveNameGroup>
              <CollectButton>Join</CollectButton>
            </div>
            <TextBox>
              Google Cloud provides organizations with leading infrastructure,
              platform capabilities
            </TextBox>
          </CollectiveItem>

          <CollectiveItem>
            <div>
              <IconContainer>{intelIcon}</IconContainer>
              <CollectiveNameGroup>
                <p>Intel</p>
                <small>8k Members</small>
              </CollectiveNameGroup>
              <CollectButton>Join</CollectButton>
            </div>
            <TextBox>
              A space for developers to collaborate on Intel software tools,
              libraries, and resources. Share
            </TextBox>
          </CollectiveItem>

          <CollectiveItem>
            <div>
              <IconContainer>{wso2Icon}</IconContainer>
              <CollectiveNameGroup>
                <p>WSO2</p>
                <small>2k Members</small>
              </CollectiveNameGroup>
              <CollectButton>Join</CollectButton>
            </div>
            <TextBox>
              WSO2 solutions give enterprises the flexibility to deploy
              applications and services on
            </TextBox>
          </CollectiveItem>
        </SidebarCollective>
      </div>
    </Container>
  );
};

export default Rside;
