import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("https://api.pandascore.co/dota2/heroes/113", {
      headers: new Headers({
        Authorization: `Bearer mjnJ72t6z9zKrjSm-gahtQq3LUDw4Hyxd4L7GHmS5KR4cbKgtHU`,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home-page">
      <h1 className="text-4xl">Home</h1>
    </div>
  );
};

export default Home;
