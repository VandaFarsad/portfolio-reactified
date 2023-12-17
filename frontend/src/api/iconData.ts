export type StackIcon = {
  iconSetPrefix: string;
  iconName: string;
  text: string;
  icon: string;
  position: number;
};

export const fetchStackIcons = async (): Promise<StackIcon[]> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/stackicons`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as Promise<StackIcon[]>;
  } catch (error) {
    console.error(`Failed to fetch StackIcons: ${error}`);
    return [];
  }
};
