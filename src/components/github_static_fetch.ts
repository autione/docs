import colors from './colors.json';

export interface Repository {
  color: string;
  description: string;
  language: string;
}

export const fetchGithubStaticData = async (owner: string, repo: string): Promise<Repository> => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    const data: Repository = await response.json();
    if (!response.ok) {
      data.color = "#fff"
      data.description = ""
      data.language = ""
      return data
    }
    data.color = colors[data.language].color
    return data;
  }