const regex = /(\d+)\/$/;
export const getUrlId = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};
