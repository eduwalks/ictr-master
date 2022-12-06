// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// function Paging () {

// 	const styleObj = {
// 		display: 'flex',
//     justifyContent: 'center',
//     marginTop: '20px'
// 	}

//   return (
//     <Stack>
//       <Pagination style={styleObj} 
//         count={10} 
//         boundaryCount={10} 
//         // color="primary" 
//         variant="outlined" 
//         shape="circular" 
//         size="medium" 
//         showFirstButton 
//         showLastButton />
//     </Stack>
//   );
// }

// export default Paging;

import React, { useState } from 'react';
import Pagination, { bootstrap5PaginationPreset } from 'react-responsive-pagination';

function Paging() {
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 10;

  return (
    <Pagination
      {...bootstrap5PaginationPreset}
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}

export default Paging;