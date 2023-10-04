import { useState, useEffect } from 'react';

import { createClient } from 'contentful';

const client = createClient({
  space: 'nk6zx4s0ala4',
  environment: 'master', // defaults to 'master' if not set
  // accessToken: import.meta.env.VITE_API_KEY,
  accessToken: 'Sgf3j3AjrFPe3MmmlBRP8b302NLyHvA7wF4Gg5dtZI0',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, code, image, category } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img, code, category };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
