const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e6c98b503ebc6ef57d315c4e3e57b40b',
    imageOriginal: (pathImg) => `https://image.tmdb.org/t/p/original/${pathImg}`,
    image500: (pathImg) => `https://image.tmdb.org/t/p/w500/${pathImg}`
}
export default apiConfig;
