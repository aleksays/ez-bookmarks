/*global chrome */
export const ROOT_FOLDER_NAME = 'Easy dials';
// export const ICON_PATH = 'chrome://favicon/size/18@2x';
export const getIconPath = (url) => `chrome-extension://${chrome.runtime.id}/_favicon/?pageUrl=${encodeURIComponent(url)}&size=32`;

export const glassColorScheme = {
  light: {
    background: 'rgba(255, 255, 255, 0.21)',
    border: '1px solid rgba(255, 255, 255, 0.17)',
  },
  dark: {
    background: 'rgba(0, 0, 0, 0.21)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
  },
};

export const getGlassEffect = ({ colorScheme, radius }) => ({
  background: glassColorScheme[colorScheme].background,
  borderRadius: radius.md,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(12.9px)',
  border: glassColorScheme[colorScheme].border,
})