export  const getYouTubeVideoTitle = async (url: string):
  Promise<string> => {
    try {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
      if (!videoId) return 'YouTube Video';

      const response = await
      fetch(`https://www.googleapis.com/oembed?url=https:
      //www.youtube.com/watch?v=${videoId}&format=json`);
      const data = await response.json();
      return data.title || `YouTube Video ${Math.random().toString(20)}`;
    } catch (error) {
      console.error('Error fetching YouTube title:',
  error);
      return 'YouTube Video';
    }
  };