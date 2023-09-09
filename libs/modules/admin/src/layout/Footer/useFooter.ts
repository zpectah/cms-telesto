export interface UseFooterReturn {
  primary: string;
}

export const useFooter = (): UseFooterReturn => {
  return {
    primary: '&copy; 2023 CMS Telesto',
  };
};
