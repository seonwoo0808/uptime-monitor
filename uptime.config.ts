// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "ptg.kr Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://ptg.kr', label: 'About Me' },
    { link: 'https://github.com/seonwoo0808', label: 'GitHub' },
    { link: 'mailto:me@ptg.kr', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'ptg_main',
      name: 'ptg.kr',
      method: 'GET',
      target: 'https://ptg.kr',
      statusPageLink: 'https://ptg.kr',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ptg_auth',
      name: 'auth.ptg.kr',
      method: 'GET',
      target: 'https://auth.ptg.kr',
      statusPageLink: 'https://auth.ptg.kr',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ptg_img',
      name: 'img.ptg.kr',
      method: 'GET',
      target: 'https://img.ptg.kr',
      statusPageLink: 'https://img.ptg.kr',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ptg_docs',
      name: 'docs.ptg.kr',
      method: 'GET',
      target: 'https://docs.ptg.kr',
      statusPageLink: 'https://docs.ptg.kr',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ptg_waka',
      name: 'waka.ptg.kr',
      method: 'GET',
      target: 'https://waka.ptg.kr',
      statusPageLink: 'https://waka.ptg.kr',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'ptg_portainer',
      name: 'portainer.ptg.kr',
      method: 'GET',
      target: 'https://portainer.ptg.kr',
      statusPageLink: 'https://portainer.ptg.kr',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
