import React from 'react';
import Users from '../common/Users';

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-[4rem] font-semibold">Welcome!</h1>
      <Users />
    </div>
  );
};

export default Home;
