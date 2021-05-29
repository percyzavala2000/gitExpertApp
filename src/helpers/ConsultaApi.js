const consultaAPI = async (categoria) => {
  const api_key = "VQYhLU7iId9In4cUbAuBC8L1FJsFDtP7";
  const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(
    categoria
  )}&limit=10`;

  try {
    const resultado = await fetch(url);
    const { data } = await resultado.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    console.log(error);
  }
};

export default consultaAPI;