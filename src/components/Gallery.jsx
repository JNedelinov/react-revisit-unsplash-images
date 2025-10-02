import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../GlobalContextProvider';
import api from '../custom';
import { config } from '../config';

const Gallery = () => {
  const { searchVal } = useGlobalContext();
  const queryFunction = async () => {
    const res = await api.get(
      `https://api.unsplash.com/search/photos?query=${searchVal}&client_id=${config.accessKey}`
    );
    return res.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ['photos', searchVal],
    queryFn: queryFunction,
    // Refetch the data every second
    // refetchInterval: 3000,
  });

  console.log('rerender');

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  console.log(data);

  return (
    <section className="image-container">
      {data?.results?.map((photo) => (
        <img
          key={photo.id}
          src={photo?.urls?.regular}
          alt={photo.alt_description}
          className="img"
        />
      ))}
    </section>
  );
};
export default Gallery;
