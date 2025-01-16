import React from 'react';

import SideBar from './SideBar/SideBar';
import SideMain from './SideMain';
import { IResultApi } from '@/Types/GetMovieTvTypes';

export default function Content({ datamovietv }: { datamovietv: IResultApi }) {
  return (
    <div className='global-w flex flex-col-reverse lg:flex-row gap-4 justify-between'>
        <SideBar/>
        <SideMain datamovietv={datamovietv}/>
        
    </div>
  );
}
