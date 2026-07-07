import type { ServiceMenuGroup } from './serviceMenu';

export const technologyMenuGroups: ServiceMenuGroup[] = [
  {
    title: 'BI & Embedded Analytics',
    shortTitle: 'BI & Analytics',
    items: [
      { label: 'Embedded Analytics', href: '/technologies/bi-tech/embedded-analytics', menuLabel: 'Embedded Analytics' },
      { label: 'Embedded Analytics with Power BI', href: '/technologies/bi-tech/embedded-analytics-with-powerbi', menuLabel: 'Power BI Embedded' },
    ],
  },
  {
    title: 'Data Engineering',
    shortTitle: 'Engineering',
    items: [
      { label: 'Data Engineering Services', href: '/technologies/data-engineering-services', menuLabel: 'Data Engineering' },
      { label: 'Azure Data Factory', href: '/technologies/data-engineering-services/azure-data-factory', menuLabel: 'Azure Data Factory' },
      { label: 'Advanced Analytics with Azure SQL', href: '/technologies/data-engineering-services/advanced-analytics-with-azure-sql', menuLabel: 'Azure SQL Analytics' },
    ],
  },
];
