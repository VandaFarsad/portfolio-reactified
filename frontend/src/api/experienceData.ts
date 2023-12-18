export type Experience = {
  id: string;
  type: string;
  date: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/experiences`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as Promise<Experience[]>;
  } catch (error) {
    console.error(`Failed to fetch Experiences: ${error}`);
    return [];
  }
};

