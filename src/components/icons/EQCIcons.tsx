import React from 'react';

export const CheckIcon = ({
  color = '#4CAF50',
  title = 'QA Passed'
}: {
  color?: string
  title?: string
}) =>
(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <title>{title}</title>
  <path d="M5 12L10 17L20 7" stroke={color} />
</svg>
);

export const WarningIcon = ({
  color = '#FF9800',
  title = 'QA Not Passed'
}: {
  color?: string
  title?: string
}) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path d="M12 8V14 m0 2v1" stroke={color} />
    <path d="M5 19H19C19.3263 18.9977 19.6471 18.9156 19.9344 18.7609C20.2217 18.6061 20.4667 18.3834 20.6482 18.1122C20.8297 17.841 20.942 17.5295 20.9754 17.2049C21.0089 16.8803 20.9624 16.5525 20.84 16.25L13.74 3.99999C13.567 3.68738 13.3135 3.42682 13.0058 3.24537C12.698 3.06393 12.3473 2.96823 11.99 2.96823C11.6327 2.96823 11.282 3.06393 10.9742 3.24537C10.6665 3.42682 10.413 3.68738 10.24 3.99999L3.14 16.25C3.01994 16.5456 2.97233 16.8656 3.00115 17.1833C3.02997 17.501 3.13437 17.8072 3.30565 18.0764C3.47693 18.3455 3.71011 18.5698 3.98573 18.7305C4.26134 18.8912 4.57139 18.9836 4.89 19" stroke={color} />
  </svg>
)

export const DownIcon = ({
  color = '#25408F',
  title = 'Open icon'
}: {
  color?: string
  title?: string
}) => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path d="M1 1L6 6L11.5 1" stroke={color} />
  </svg>
)
