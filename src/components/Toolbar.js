import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Toolbar = () => {
  return (
    <div className="bg-neutral-900 text-yellow-400 p-4 fixed bottom-0 w-full flex justify-around border-t-2">
      <div className="flex justify-between">
        <div className="flex gap-12">
          <div className="px-2">
            <a href="#"><HomeIcon /></a>
          </div>
          <div className="px-2">
            <a href="#"><SearchIcon /></a>
          </div>
          <div className="px-2">
            <a href="#"><AccountCircleIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
